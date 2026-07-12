import { C, mono } from '../../../tokens.js';
const mf = { fontFamily: mono };

export default function VisSwitch4way() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" className="block w-full">
      <rect
        x="90"
        y="20"
        width="120"
        height="130"
        rx="3"
        fill={C.svgPanel}
        stroke={C.border2}
        strokeWidth="1.5"
      />
      <text x="150" y="37" {...mf} fontSize="8" fill={C.amber} textAnchor="middle">
        4-WAY
      </text>
      <text x="150" y="48" {...mf} fontSize="7" fill={C.darker} textAnchor="middle">
        SWITCH
      </text>
      <line
        x1="150"
        y1="55"
        x2="150"
        y2="145"
        stroke={C.border}
        strokeWidth="1"
        strokeDasharray="3,3"
      />
      <path
        d="M108,115 Q150,100 192,115"
        stroke={C.amber}
        strokeWidth="1.5"
        strokeDasharray="3,2"
        fill="none"
      />
      <text x="150" y="112" {...mf} fontSize="6" fill={C.amber} textAnchor="middle">
        series jumper
      </text>
      <circle cx="90" cy="68" r="4" fill={C.border} stroke={C.red} strokeWidth="1.2" />
      <circle cx="90" cy="88" r="4" fill={C.border} stroke={C.orange} strokeWidth="1.2" />
      <circle cx="90" cy="108" r="4" fill={C.border} stroke={C.blue} strokeWidth="1.2" />
      <circle cx="90" cy="128" r="4" fill={C.border} stroke={C.lblue} strokeWidth="1.2" />
      <line x1="20" y1="68" x2="86" y2="68" stroke={C.red} strokeWidth="1.5" />
      <line x1="20" y1="88" x2="86" y2="88" stroke={C.orange} strokeWidth="1.5" />
      <line x1="20" y1="108" x2="86" y2="108" stroke={C.blue} strokeWidth="1.5" />
      <line x1="20" y1="128" x2="86" y2="128" stroke={C.lblue} strokeWidth="1.5" />
      <text x="16" y="65" {...mf} fontSize="6.5" fill={C.red} textAnchor="end">
        B.HOT
      </text>
      <text x="16" y="85" {...mf} fontSize="6.5" fill={C.orange} textAnchor="end">
        B.GND
      </text>
      <text x="16" y="105" {...mf} fontSize="6.5" fill={C.blue} textAnchor="end">
        N.HOT
      </text>
      <text x="16" y="125" {...mf} fontSize="6.5" fill={C.lblue} textAnchor="end">
        N.GND
      </text>
      <circle cx="210" cy="78" r="4" fill={C.border} stroke={C.green} strokeWidth="1.2" />
      <circle cx="210" cy="104" r="4" fill={C.border} stroke={C.gray} strokeWidth="1.2" />
      <line x1="214" y1="78" x2="280" y2="78" stroke={C.green} strokeWidth="1.5" />
      <line x1="214" y1="104" x2="280" y2="104" stroke={C.gray} strokeWidth="1.5" />
      <text x="284" y="75" {...mf} fontSize="6.5" fill={C.green}>
        SIG
      </text>
      <text x="284" y="84" {...mf} fontSize="6.5" fill={C.dim}>
        → Vol L3
      </text>
      <text x="284" y="101" {...mf} fontSize="6.5" fill={C.gray}>
        GND
      </text>
      <text x="284" y="110" {...mf} fontSize="6.5" fill={C.dim}>
        → bus
      </text>
      <rect
        x="20"
        y="121"
        width="68"
        height="15"
        rx="2"
        fill="#1a0808"
        stroke={C.red}
        strokeWidth="1"
        opacity="0.8"
      />
      <text x="54" y="131" {...mf} fontSize="6" fill={C.red} textAnchor="middle">
        ↑ to switch only!
      </text>
    </svg>
  );
}
