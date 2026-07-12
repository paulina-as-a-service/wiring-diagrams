import { C, mono } from '../../tokens.js';

export default function WarnBox({ children }) {
  return (
    <div
      className="text-xs mt-2 px-2.5 py-1.5 border-l-2 tracking-wide"
      style={{ fontFamily: mono, color: C.amber, background: '#1a1500', borderColor: C.amber }}
    >
      {children}
    </div>
  );
}
