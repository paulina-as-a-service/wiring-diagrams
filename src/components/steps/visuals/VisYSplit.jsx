import { C, mono } from '../../../tokens.js';
const mf = { fontFamily: mono };

export default function VisYSplit() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" className="block w-full">
      <circle cx="150" cy="90" r="9" fill={C.greenBg} stroke={C.green} strokeWidth="2" />
      <text x="150" y="86" {...mf} fontSize="7" fill={C.green} textAnchor="middle">
        Vol
      </text>
      <text x="150" y="97" {...mf} fontSize="7" fill={C.green} textAnchor="middle">
        L2
      </text>
      <line x1="60" y1="90" x2="140" y2="90" stroke={C.green} strokeWidth="2" />
      <polygon points="136,86 146,90 136,94" fill={C.green} />
      <text x="100" y="82" {...mf} fontSize="7" fill={C.green} textAnchor="middle">
        from
      </text>
      <text x="100" y="92" {...mf} fontSize="7" fill={C.dim} textAnchor="middle">
        Vol wiper
      </text>
      <line x1="157" y1="83" x2="230" y2="40" stroke={C.green} strokeWidth="2" />
      <polygon points="223,40 234,36 232,47" fill={C.green} />
      <rect
        x="236"
        y="24"
        width="54"
        height="24"
        rx="3"
        fill={C.svgPanel2}
        stroke={C.border2}
        strokeWidth="1"
      />
      <text x="263" y="34" {...mf} fontSize="7.5" fill={C.green} textAnchor="middle">
        JACK
      </text>
      <text x="263" y="44" {...mf} fontSize="7.5" fill={C.green} textAnchor="middle">
        TIP
      </text>
      <line x1="157" y1="97" x2="230" y2="138" stroke={C.green} strokeWidth="2" />
      <polygon points="223,130 234,138 224,143" fill={C.green} />
      <rect
        x="236"
        y="126"
        width="54"
        height="24"
        rx="3"
        fill={C.svgPanel2}
        stroke={C.border2}
        strokeWidth="1"
      />
      <text x="263" y="136" {...mf} fontSize="7.5" fill={C.green} textAnchor="middle">
        TONE
      </text>
      <text x="263" y="146" {...mf} fontSize="7.5" fill={C.green} textAnchor="middle">
        L3
      </text>
      <text x="150" y="120" {...mf} fontSize="8" fill={C.amber} textAnchor="middle">
        Y-SPLIT
      </text>
      <text x="150" y="132" {...mf} fontSize="7" fill={C.dim} textAnchor="middle">
        both wires at same lug
      </text>
      <circle cx="263" cy="90" r="18" fill="#1a0808" stroke={C.red} strokeWidth="1" opacity="0.6" />
      <line x1="254" y1="81" x2="272" y2="99" stroke={C.red} strokeWidth="1.5" />
      <line x1="272" y1="81" x2="254" y2="99" stroke={C.red} strokeWidth="1.5" />
      <text x="263" y="88" {...mf} fontSize="6" fill={C.red} textAnchor="middle">
        not here
      </text>
    </svg>
  );
}
