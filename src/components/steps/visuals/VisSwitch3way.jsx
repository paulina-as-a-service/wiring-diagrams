import { C, mono } from '../../../tokens.js';
const mf = { fontFamily: mono };

export default function VisSwitch3way() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" className="block w-full">
      {/* Switch body */}
      <rect
        x="90"
        y="30"
        width="120"
        height="110"
        rx="3"
        fill={C.svgPanel}
        stroke={C.border2}
        strokeWidth="1.5"
      />
      <text x="150" y="49" {...mf} fontSize="8" fill={C.amber} textAnchor="middle">
        3-WAY
      </text>
      <text x="150" y="60" {...mf} fontSize="7" fill={C.darker} textAnchor="middle">
        CRL USA
      </text>
      {/* Top hat knob */}
      <rect
        x="136"
        y="18"
        width="28"
        height="14"
        rx="4"
        fill="#1e2a3a"
        stroke={C.dgray}
        strokeWidth="1"
      />
      <text x="150" y="29" {...mf} fontSize="6" fill={C.amber} textAnchor="middle">
        TOP HAT
      </text>
      <line x1="150" y1="32" x2="150" y2="30" stroke={C.dgray} strokeWidth="1" />
      {/* Left terminals: B.HOT, N.HOT */}
      <circle cx="90" cy="82" r="4" fill={C.border} stroke={C.red} strokeWidth="1.2" />
      <circle cx="90" cy="108" r="4" fill={C.border} stroke={C.blue} strokeWidth="1.2" />
      <line x1="20" y1="82" x2="86" y2="82" stroke={C.red} strokeWidth="1.5" />
      <line x1="20" y1="108" x2="86" y2="108" stroke={C.blue} strokeWidth="1.5" />
      <text x="16" y="79" {...mf} fontSize="6.5" fill={C.red} textAnchor="end">
        B.HOT
      </text>
      <text x="16" y="105" {...mf} fontSize="6.5" fill={C.blue} textAnchor="end">
        N.HOT
      </text>
      {/* Right terminal: SIG.OUT */}
      <circle cx="210" cy="95" r="4" fill={C.border} stroke={C.green} strokeWidth="1.2" />
      <line x1="214" y1="95" x2="280" y2="95" stroke={C.green} strokeWidth="1.5" />
      <text x="284" y="92" {...mf} fontSize="6.5" fill={C.green}>
        SIG
      </text>
      <text x="284" y="101" {...mf} fontSize="6.5" fill={C.dim}>
        → Vol L3
      </text>
      {/* Grounds go directly to bus (below switch) */}
      <line
        x1="20"
        y1="145"
        x2="280"
        y2="145"
        stroke={C.gray}
        strokeWidth="2"
        strokeDasharray="5,3"
      />
      <text x="150" y="157" {...mf} fontSize="6.5" fill={C.darker} textAnchor="middle">
        GND BUS
      </text>
      {/* B.GND drop */}
      <line
        x1="50"
        y1="82"
        x2="50"
        y2="144"
        stroke={C.orange}
        strokeWidth="1.5"
        strokeDasharray="3,2"
      />
      <circle cx="50" cy="145" r="3" fill={C.orange} />
      <text x="50" y="135" {...mf} fontSize="5.5" fill={C.orange} textAnchor="middle">
        B.GND
      </text>
      {/* N.GND drop */}
      <line
        x1="74"
        y1="108"
        x2="74"
        y2="144"
        stroke={C.lblue}
        strokeWidth="1.5"
        strokeDasharray="3,2"
      />
      <circle cx="74" cy="145" r="3" fill={C.lblue} />
      <text x="74" y="135" {...mf} fontSize="5.5" fill={C.lblue} textAnchor="middle">
        N.GND
      </text>
    </svg>
  );
}
