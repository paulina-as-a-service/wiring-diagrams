import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { C, mono } from '../../tokens.js';

const navItems = [
  { label: 'TELE / 4-WAY', to: '/4-way' },
  { label: 'TELE / 3-WAY', to: '/3-way' },
];

export default function NavDropdown() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    function handleOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('pointerdown', handleOutside);
    return () => document.removeEventListener('pointerdown', handleOutside);
  }, [isOpen]);

  return (
    <div ref={wrapRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen((o) => !o)}
        style={{
          fontFamily: mono,
          fontSize: '0.72rem',
          background: '#1a2235',
          border: `1px solid ${C.border}`,
          color: C.text,
          padding: '5px 12px 5px 14px',
          cursor: 'pointer',
          letterSpacing: '0.08em',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          userSelect: 'none',
          whiteSpace: 'nowrap',
          outline: 'none',
        }}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        WIRING CONFIGS
        <span
          style={{
            color: C.accent,
            fontSize: '0.8rem',
            display: 'inline-block',
            transition: 'transform 0.18s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          ▾
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 2px)',
            left: 0,
            background: C.panel,
            border: `1px solid ${C.border}`,
            minWidth: 200,
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {navItems.map(({ label, to }, i) => {
            const isActive = pathname === to;
            return isActive ? (
              <span
                key={to}
                style={{
                  fontFamily: mono,
                  fontSize: '0.72rem',
                  color: C.accent,
                  padding: '9px 16px',
                  letterSpacing: '0.08em',
                  borderBottom: i < navItems.length - 1 ? `1px solid ${C.border}` : 'none',
                  display: 'block',
                  pointerEvents: 'none',
                }}
              >
                ● {label}
              </span>
            ) : (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: mono,
                  fontSize: '0.72rem',
                  color: C.dim,
                  padding: '9px 16px',
                  letterSpacing: '0.08em',
                  borderBottom: i < navItems.length - 1 ? `1px solid ${C.border}` : 'none',
                  display: 'block',
                  textDecoration: 'none',
                }}
                className="nav-item-link"
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
