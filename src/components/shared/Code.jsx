import { C, mono } from '../../tokens.js';

export default function Code({ children }) {
  return (
    <code
      className="text-xs rounded px-1"
      style={{ fontFamily: mono, color: C.green, background: C.greenBg }}
    >
      {children}
    </code>
  );
}
