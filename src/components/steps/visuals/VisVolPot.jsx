import { C, mono } from '../../../tokens.js';
const mf = { fontFamily: mono };

export default function VisVolPot() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" className="block w-full">
      <circle cx="150" cy="90" r="60" fill={C.svgPanel2} stroke={C.border2} strokeWidth="1.5" />
      <circle cx="150" cy="90" r="36" fill={C.svgBg} stroke={C.border} strokeWidth="1" />
      <text x="150" y="87" {...mf} fontSize="9" fill={C.amber} textAnchor="middle">
        VOL
      </text>
      <text x="150" y="99" {...mf} fontSize="8" fill={C.darker} textAnchor="middle">
        CTS 250k
      </text>
      <circle cx="90" cy="90" r="5" fill={C.border} stroke={C.green} strokeWidth="1.5" />
      <text x="73" y="94" {...mf} fontSize="8" fill={C.green} textAnchor="middle">
        L3
      </text>
      <line x1="18" y1="90" x2="84" y2="90" stroke={C.green} strokeWidth="1.5" />
      <polygon points="80,86 90,90 80,94" fill={C.green} />
      <text x="30" y="82" {...mf} fontSize="6.5" fill={C.green}>
        SIG.OUT
      </text>
      <text x="30" y="91" {...mf} fontSize="6.5" fill={C.dim}>
        ← switch
      </text>
      <circle cx="150" cy="30" r="5" fill={C.border} stroke={C.green} strokeWidth="1.5" />
      <text x="150" y="18" {...mf} fontSize="8" fill={C.green} textAnchor="middle">
        L2
      </text>
      <line x1="150" y1="24" x2="150" y2="10" stroke={C.green} strokeWidth="1.5" />
      <polygon points="146,14 150,6 154,14" fill={C.green} />
      <text x="150" y="5" {...mf} fontSize="6" fill={C.green} textAnchor="middle">
        → TONE L3 + JACK TIP
      </text>
      <circle cx="150" cy="150" r="5" fill={C.border} stroke={C.gray} strokeWidth="1.5" />
      <text x="150" y="168" {...mf} fontSize="8" fill={C.gray} textAnchor="middle">
        L1
      </text>
      <line x1="150" y1="155" x2="150" y2="163" stroke={C.gray} strokeWidth="1.5" />
      <polygon points="146,159 150,165 154,159" fill={C.gray} />
      <path
        d="M 115,143 A 60,60 0 0 0 185,143"
        stroke={C.gray}
        strokeWidth="2"
        strokeDasharray="3,3"
        fill="none"
      />
      <text x="236" y="148" {...mf} fontSize="6.5" fill={C.gray}>
        → casing
      </text>
      <text x="236" y="158" {...mf} fontSize="6.5" fill={C.dim}>
        (+ bridge
      </text>
      <text x="236" y="167" {...mf} fontSize="6.5" fill={C.dim}>
        {' '}
        wire)
      </text>
    </svg>
  );
}
