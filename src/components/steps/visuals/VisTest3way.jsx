import { C, mono } from '../../../tokens.js';
const mf = { fontFamily: mono };

export default function VisTest3way() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" className="block w-full">
      <rect
        x="14"
        y="20"
        width="72"
        height="100"
        rx="5"
        fill={C.svgPanel2}
        stroke={C.border2}
        strokeWidth="1.5"
      />
      <rect
        x="22"
        y="28"
        width="56"
        height="36"
        rx="2"
        fill="#0a2010"
        stroke="#1e3a20"
        strokeWidth="1"
      />
      <text x="50" y="47" {...mf} fontSize="12" fill={C.green} textAnchor="middle">
        Ω
      </text>
      <text x="50" y="60" {...mf} fontSize="8" fill={C.green} textAnchor="middle">
        CONT
      </text>
      <circle cx="36" cy="96" r="7" fill={C.border} stroke={C.dgray} strokeWidth="1" />
      <circle cx="64" cy="96" r="7" fill={C.border} stroke={C.dgray} strokeWidth="1" />
      <line x1="36" y1="103" x2="36" y2="130" stroke={C.gray} strokeWidth="1.5" />
      <line x1="64" y1="103" x2="64" y2="130" stroke={C.red} strokeWidth="1.5" />
      <circle cx="36" cy="132" r="3" fill={C.gray} />
      <circle cx="64" cy="132" r="3" fill={C.red} />
      <line
        x1="36"
        y1="135"
        x2="36"
        y2="148"
        stroke={C.gray}
        strokeWidth="1.5"
        strokeDasharray="3,2"
      />
      <line
        x1="64"
        y1="135"
        x2="110"
        y2="148"
        stroke={C.red}
        strokeWidth="1.5"
        strokeDasharray="3,2"
      />
      <circle cx="36" cy="152" r="4" fill={C.svgBg} stroke={C.gray} strokeWidth="1.5" />
      <circle cx="110" cy="152" r="4" fill={C.svgBg} stroke={C.amber} strokeWidth="1.5" />
      <ellipse
        cx="130"
        cy="60"
        rx="30"
        ry="16"
        fill={C.greenBg}
        stroke={C.green}
        strokeWidth="1.2"
      />
      <text x="130" y="64" {...mf} fontSize="9" fill={C.green} textAnchor="middle">
        BEEP
      </text>
      {/* Bar chart: 3 positions only */}
      <rect
        x="170"
        y="18"
        width="118"
        height="120"
        rx="3"
        fill={C.svgBg}
        stroke={C.border}
        strokeWidth="1"
      />
      <text x="229" y="32" {...mf} fontSize="7" fill={C.darker} textAnchor="middle">
        OUTPUT LEVEL
      </text>
      <rect x="186" y="75" width="20" height="50" fill={C.red} opacity="0.7" />
      <text x="196" y="70" {...mf} fontSize="6.5" fill={C.red} textAnchor="middle">
        1
      </text>
      <rect x="219" y="90" width="20" height="35" fill={C.blue} opacity="0.7" />
      <text x="229" y="85" {...mf} fontSize="6.5" fill={C.blue} textAnchor="middle">
        2
      </text>
      <rect x="252" y="75" width="20" height="50" fill={C.blue} opacity="0.7" />
      <text x="262" y="70" {...mf} fontSize="6.5" fill={C.blue} textAnchor="middle">
        3
      </text>
      <line x1="178" y1="125" x2="280" y2="125" stroke={C.dgray} strokeWidth="1" />
      <text x="229" y="138" {...mf} fontSize="6" fill={C.dgray} textAnchor="middle">
        pos 2 slightly lower (parallel)
      </text>
    </svg>
  );
}
