import { C, mono } from '../../../tokens.js';
const mf = { fontFamily: mono };

const pts = [
  { x: 22, label1: 'Vol', label2: 'L1', color: '#6b7280', dashed: false },
  { x: 58, label1: 'Vol', label2: 'case', color: '#6b7280', dashed: false },
  { x: 94, label1: 'Tone', label2: 'L1', color: '#6b7280', dashed: false },
  { x: 130, label1: 'cap', label2: 'leg', color: '#f472b6', dashed: true },
  { x: 166, label1: 'brg', label2: 'GND', color: '#f97316', dashed: false },
  { x: 202, label1: 'nck', label2: 'GND', color: '#93c5fd', dashed: false },
  { x: 238, label1: 'jack', label2: 'slv', color: '#6b7280', dashed: false },
];

export default function VisGndAudit3way() {
  return (
    <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" className="block w-full">
      <line
        x1="10"
        y1="145"
        x2="290"
        y2="145"
        stroke={C.gray}
        strokeWidth="2.5"
        strokeDasharray="6,3"
      />
      <text x="150" y="160" {...mf} fontSize="7.5" fill={C.darker} textAnchor="middle">
        GND BUS (INCL. BOTH PU GNDS)
      </text>
      {pts.map(({ x, label1, label2, color, dashed }) => (
        <g key={x}>
          <line
            x1={x}
            y1="60"
            x2={x}
            y2="144"
            stroke={color}
            strokeWidth="1.5"
            strokeDasharray={dashed ? '4,3' : undefined}
          />
          <circle cx={x} cy="60" r="5" fill={C.svgPanel2} stroke={color} strokeWidth="1.2" />
          <text x={x} y="55" {...mf} fontSize="6" fill={color} textAnchor="middle">
            {label1}
          </text>
          <text x={x} y="46" {...mf} fontSize="6" fill={color} textAnchor="middle">
            {label2}
          </text>
          <circle cx={x} cy="145" r="3" fill={color} />
        </g>
      ))}
      <line x1="290" y1="145" x2="290" y2="155" stroke={C.gray} strokeWidth="2" />
      <line x1="283" y1="155" x2="297" y2="155" stroke={C.gray} strokeWidth="2" />
      <line x1="286" y1="159" x2="294" y2="159" stroke={C.gray} strokeWidth="1.5" />
      <line x1="289" y1="163" x2="291" y2="163" stroke={C.gray} strokeWidth="1" />
    </svg>
  );
}
