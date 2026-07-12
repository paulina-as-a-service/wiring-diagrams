import { C, mono } from '../../tokens.js';

export default function Step({ num, title, body, visual, caption }) {
  return (
    <div className="step-row border-b py-5" style={{ borderColor: C.border }}>
      <div
        className="step-num text-right pt-0.5 leading-none select-none text-2xl"
        style={{ fontFamily: mono, color: C.border }}
      >
        {num}
      </div>

      <div className="step-body">
        <h3
          className="text-xs tracking-widest mb-1.5"
          style={{ fontFamily: mono, color: C.accent }}
        >
          {title}
        </h3>
        <div className="text-sm leading-relaxed" style={{ color: C.text }}>
          {body}
        </div>
      </div>

      <div className="step-visual">
        <div
          className="border rounded-sm overflow-hidden"
          style={{ background: '#090c10', borderColor: C.border }}
        >
          {visual}
        </div>
        {caption && (
          <p
            className="text-center mt-1 tracking-widest"
            style={{ fontFamily: mono, fontSize: '0.62rem', color: C.dim }}
          >
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
