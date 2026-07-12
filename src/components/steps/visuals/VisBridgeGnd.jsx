import { C, mono } from '../../../tokens.js';
const mf = { fontFamily: mono };

export default function VisBridgeGnd() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" className="block w-full">
      <rect
        x="10"
        y="10"
        width="280"
        height="150"
        rx="5"
        fill="#090c10"
        stroke={C.border}
        strokeWidth="1"
        strokeDasharray="4,3"
      />
      <text x="150" y="22" {...mf} fontSize="7" fill={C.border2} textAnchor="middle">
        BODY CAVITY
      </text>
      <rect
        x="20"
        y="35"
        width="80"
        height="45"
        rx="3"
        fill={C.svgPanel2}
        stroke={C.border2}
        strokeWidth="1.5"
      />
      <text x="60" y="55" {...mf} fontSize="7.5" fill={C.amber} textAnchor="middle">
        BRIDGE
      </text>
      <text x="60" y="67" {...mf} fontSize="7.5" fill={C.amber} textAnchor="middle">
        PLATE
      </text>
      <rect
        x="30"
        y="80"
        width="60"
        height="14"
        rx="2"
        fill="#1e2a3a"
        stroke={C.dgray}
        strokeWidth="1"
      />
      <text x="60" y="91" {...mf} fontSize="7" fill={C.lblue} textAnchor="middle">
        CLAW
      </text>
      <path
        d="M90,87 C140,87 140,120 200,120"
        stroke={C.dgray}
        strokeWidth="2"
        strokeDasharray="5,4"
        fill="none"
      />
      <polygon points="195,116 205,120 195,124" fill={C.dgray} />
      <circle cx="230" cy="120" r="32" fill={C.svgPanel2} stroke={C.border2} strokeWidth="1.5" />
      <circle cx="230" cy="120" r="18" fill={C.svgBg} stroke={C.border} strokeWidth="1" />
      <text x="230" y="117" {...mf} fontSize="7.5" fill={C.amber} textAnchor="middle">
        VOL
      </text>
      <text x="230" y="128" {...mf} fontSize="7" fill={C.darker} textAnchor="middle">
        CASING
      </text>
      <circle cx="200" cy="120" r="4" fill={C.amber} opacity="0.9" />
      <text x="150" y="150" {...mf} fontSize="7.5" fill={C.amber} textAnchor="middle">
        ★ solder to back of casing
      </text>
      <circle cx="230" cy="88" r="7" fill="#1a0a0a" stroke={C.red} strokeWidth="1" />
      <line x1="226" y1="84" x2="234" y2="92" stroke={C.red} strokeWidth="1.5" />
      <line x1="234" y1="84" x2="226" y2="92" stroke={C.red} strokeWidth="1.5" />
      <text x="244" y="86" {...mf} fontSize="6.5" fill={C.red}>
        not lug
      </text>
    </svg>
  );
}
