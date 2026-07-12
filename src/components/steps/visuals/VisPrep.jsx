import { C, mono } from '../../../tokens.js';
const mf = { fontFamily: mono };

export default function VisPrep() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" className="block w-full">
      <rect
        x="20"
        y="30"
        width="100"
        height="28"
        rx="4"
        fill={C.svgPanel2}
        stroke={C.border2}
        strokeWidth="1"
      />
      <text x="70" y="49" {...mf} fontSize="8.5" fill={C.amber} textAnchor="middle">
        SOLDERING IRON
      </text>
      <rect
        x="120"
        y="36"
        width="50"
        height="16"
        rx="2"
        fill="#1e2a3a"
        stroke={C.border2}
        strokeWidth="1"
      />
      <polygon points="170,38 190,44 170,50" fill={C.orange} />
      <text x="70" y="78" {...mf} fontSize="9" fill={C.green} textAnchor="middle">
        700–750°F
      </text>
      <text x="70" y="90" {...mf} fontSize="7.5" fill={C.dim} textAnchor="middle">
        370–400°C
      </text>
      <circle cx="230" cy="55" r="28" fill={C.svgPanel2} stroke={C.border2} strokeWidth="1" />
      <circle cx="230" cy="55" r="14" fill={C.svgBg} stroke={C.border} strokeWidth="1" />
      <text x="230" y="52" {...mf} fontSize="7" fill={C.text} textAnchor="middle">
        60/40
      </text>
      <text x="230" y="63" {...mf} fontSize="7" fill={C.dim} textAnchor="middle">
        SOLDER
      </text>
      <rect
        x="20"
        y="108"
        width="56"
        height="46"
        rx="3"
        fill={C.svgPanel2}
        stroke={C.border2}
        strokeWidth="1"
      />
      <rect
        x="26"
        y="114"
        width="44"
        height="24"
        rx="2"
        fill="#0a2010"
        stroke={C.border}
        strokeWidth="1"
      />
      <text x="48" y="130" {...mf} fontSize="9" fill={C.green} textAnchor="middle">
        Ω
      </text>
      <circle cx="36" cy="146" r="4" fill={C.border} stroke={C.dgray} />
      <circle cx="60" cy="146" r="4" fill={C.border} stroke={C.dgray} />
      <text x="48" y="152" {...mf} fontSize="6" fill={C.dim} textAnchor="middle">
        MULTIMETER
      </text>
      <line x1="36" y1="150" x2="30" y2="165" stroke={C.red} strokeWidth="1.5" />
      <line x1="60" y1="150" x2="66" y2="165" stroke={C.gray} strokeWidth="1.5" />
      <rect
        x="100"
        y="108"
        width="14"
        height="46"
        rx="4"
        fill="#1e2a3a"
        stroke={C.border2}
        strokeWidth="1"
      />
      <rect x="100" y="146" width="14" height="8" rx="2" fill={C.amber} opacity="0.6" />
      <text x="107" y="126" {...mf} fontSize="6" fill={C.dim} textAnchor="middle" writingMode="tb">
        FLUX
      </text>
      <rect
        x="128"
        y="108"
        width="152"
        height="46"
        rx="3"
        fill={C.greenBg}
        stroke="#1e3a20"
        strokeWidth="1"
      />
      <text x="204" y="124" {...mf} fontSize="7.5" fill={C.green} textAnchor="middle">
        PRE-TIN LUGS
      </text>
      <text x="204" y="137" {...mf} fontSize="7" fill={C.dim} textAnchor="middle">
        Apply small amount of
      </text>
      <text x="204" y="148" {...mf} fontSize="7" fill={C.dim} textAnchor="middle">
        solder to each lug
      </text>
      <text x="204" y="159" {...mf} fontSize="7" fill={C.dim} textAnchor="middle">
        before attaching wire
      </text>
    </svg>
  );
}
