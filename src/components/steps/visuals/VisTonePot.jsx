import { C, mono } from '../../../tokens.js';
const mf = { fontFamily: mono };

export default function VisTonePot() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" className="block w-full">
      <circle cx="120" cy="90" r="55" fill={C.svgPanel2} stroke={C.border2} strokeWidth="1.5" />
      <circle cx="120" cy="90" r="32" fill={C.svgBg} stroke={C.border} strokeWidth="1" />
      <text x="120" y="87" {...mf} fontSize="9" fill={C.amber} textAnchor="middle">
        TONE
      </text>
      <text x="120" y="99" {...mf} fontSize="8" fill={C.darker} textAnchor="middle">
        CTS 250k
      </text>
      <circle cx="65" cy="90" r="5" fill={C.border} stroke={C.green} strokeWidth="1.5" />
      <text x="48" y="94" {...mf} fontSize="8" fill={C.green} textAnchor="middle">
        L3
      </text>
      <line x1="18" y1="90" x2="59" y2="90" stroke={C.green} strokeWidth="1.5" />
      <polygon points="55,86 65,90 55,94" fill={C.green} />
      <text x="26" y="82" {...mf} fontSize="6.5" fill={C.green}>
        ← Vol L2
      </text>
      <circle cx="120" cy="35" r="5" fill={C.border} stroke={C.pink} strokeWidth="1.5" />
      <text x="120" y="22" {...mf} fontSize="8" fill={C.pink} textAnchor="middle">
        L2
      </text>
      <line x1="120" y1="30" x2="120" y2="18" stroke={C.pink} strokeWidth="1.5" />
      <line x1="107" y1="14" x2="133" y2="14" stroke={C.pink} strokeWidth="2.5" />
      <line x1="107" y1="8" x2="133" y2="8" stroke={C.pink} strokeWidth="2.5" />
      <text x="140" y="12" {...mf} fontSize="7" fill={C.pink}>
        0.047µF
      </text>
      <line
        x1="120"
        y1="6"
        x2="120"
        y2="1"
        stroke={C.pink}
        strokeWidth="1.5"
        strokeDasharray="3,2"
      />
      <line x1="108" y1="1" x2="132" y2="1" stroke={C.gray} strokeWidth="1.5" />
      <circle cx="120" cy="145" r="5" fill={C.border} stroke={C.gray} strokeWidth="1.5" />
      <text x="120" y="162" {...mf} fontSize="8" fill={C.gray} textAnchor="middle">
        L1
      </text>
      <line x1="120" y1="150" x2="120" y2="157" stroke={C.gray} strokeWidth="1.5" />
      <polygon points="116,153 120,159 124,153" fill={C.gray} />
      <line
        x1="60"
        y1="160"
        x2="180"
        y2="160"
        stroke={C.gray}
        strokeWidth="2"
        strokeDasharray="5,3"
      />
      <text x="120" y="170" {...mf} fontSize="6.5" fill={C.darker} textAnchor="middle">
        GND
      </text>
      <rect
        x="202"
        y="55"
        width="88"
        height="60"
        rx="3"
        fill="#0a1020"
        stroke={C.border}
        strokeWidth="1"
      />
      <text x="246" y="72" {...mf} fontSize="7" fill={C.pink} textAnchor="middle">
        TONE SWEEP
      </text>
      <text x="246" y="84" {...mf} fontSize="6.5" fill={C.dim} textAnchor="middle">
        full = bright
      </text>
      <text x="246" y="95" {...mf} fontSize="6.5" fill={C.dim} textAnchor="middle">
        zero = dark
      </text>
      <text x="246" y="108" {...mf} fontSize="6.5" fill={C.dim} textAnchor="middle">
        via cap to gnd
      </text>
    </svg>
  );
}
