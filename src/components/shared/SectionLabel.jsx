import { C, mono } from '../../tokens.js';

export default function SectionLabel({ children, style }) {
  return (
    <div
      className="flex items-center gap-3 px-10 pt-5 pb-2.5 border-b text-xs tracking-widest uppercase"
      style={{ fontFamily: mono, color: C.dim, borderColor: C.border, ...style }}
    >
      <span
        className="inline-block flex-shrink-0 w-1.5 h-1.5 rounded-full"
        style={{ background: C.accent }}
      />
      {children}
    </div>
  );
}
