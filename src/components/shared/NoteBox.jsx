import { C, mono } from '../../tokens.js';

export default function NoteBox({ children }) {
  return (
    <div
      className="text-xs mt-2 px-2.5 py-1.5 border-l-2 tracking-wide"
      style={{ fontFamily: mono, color: C.dim, background: '#0f1218', borderColor: C.border }}
    >
      {children}
    </div>
  );
}
