import { C, mono } from '../../../tokens.js';
const mf = { fontFamily: mono };

export default function VisJack() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" className="block w-full">
      <rect
        x="80"
        y="55"
        width="130"
        height="60"
        rx="30"
        fill={C.svgPanel2}
        stroke={C.border2}
        strokeWidth="1.5"
      />
      <ellipse cx="80" cy="85" rx="10" ry="30" fill={C.svgBg} stroke={C.dgray} strokeWidth="1" />
      <rect
        x="28"
        y="73"
        width="52"
        height="24"
        rx="4"
        fill="#1e2a3a"
        stroke={C.dgray}
        strokeWidth="1"
      />
      <text x="54" y="85" {...mf} fontSize="7" fill={C.dim} textAnchor="middle">
        1/4" plug
      </text>
      <text x="54" y="95" {...mf} fontSize="7" fill={C.dim} textAnchor="middle">
        mono
      </text>
      <line x1="145" y1="55" x2="145" y2="25" stroke={C.green} strokeWidth="2" />
      <circle cx="145" cy="25" r="5" fill={C.greenBg} stroke={C.green} strokeWidth="1.5" />
      <text x="145" y="16" {...mf} fontSize="8" fill={C.green} textAnchor="middle">
        TIP
      </text>
      <text x="175" y="25" {...mf} fontSize="7" fill={C.dim}>
        ← signal
      </text>
      <text x="175" y="35" {...mf} fontSize="7" fill={C.dim}>
        {' '}
        from Vol L2
      </text>
      <line x1="195" y1="85" x2="225" y2="85" stroke={C.gray} strokeWidth="2" />
      <circle cx="230" cy="85" r="5" fill="#1a1a20" stroke={C.gray} strokeWidth="1.5" />
      <text x="238" y="78" {...mf} fontSize="8" fill={C.gray}>
        SLV
      </text>
      <text x="238" y="90" {...mf} fontSize="7" fill={C.dim}>
        → gnd bus
      </text>
      <text x="150" y="132" {...mf} fontSize="7.5" fill={C.darker} textAnchor="middle">
        SWITCHCRAFT J11
      </text>
      <line
        x1="145"
        y1="55"
        x2="100"
        y2="55"
        stroke={C.dgray}
        strokeWidth="1"
        strokeDasharray="2,2"
      />
      <text x="96" y="52" {...mf} fontSize="6.5" fill={C.dgray} textAnchor="end">
        longer lug
      </text>
      <text x="96" y="61" {...mf} fontSize="6.5" fill={C.dgray} textAnchor="end">
        = tip
      </text>
    </svg>
  );
}
