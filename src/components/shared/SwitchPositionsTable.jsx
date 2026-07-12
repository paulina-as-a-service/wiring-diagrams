import { C, mono } from '../../tokens.js';

// rows: [{ pos, label, mode, tone, level, series, highlight }]
export default function SwitchPositionsTable({ rows, note }) {
  return (
    <>
      <div className="overflow-x-auto mt-3">
        <table className="w-full max-w-2xl border-collapse text-sm" style={{ fontFamily: mono }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${C.accent}` }}>
              {['POS', 'LABEL', 'CIRCUIT MODE', 'TONE CHARACTER', 'OUTPUT LEVEL'].map((h) => (
                <th
                  key={h}
                  className="text-left px-3.5 py-2 text-xs tracking-widest font-normal"
                  style={{ color: C.accent }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const fg = row.series ? C.green : C.text;
              return (
                <tr
                  key={row.pos}
                  style={{
                    background: row.highlight ? '#111620' : 'transparent',
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  <td
                    className="px-3.5 py-2.5 font-semibold"
                    style={{ color: row.series ? C.green : C.amber }}
                  >
                    {row.pos}
                  </td>
                  <td className="px-3.5 py-2.5" style={{ color: fg }}>
                    {row.label}
                  </td>
                  <td className="px-3.5 py-2.5" style={{ color: fg }}>
                    {row.mode}
                  </td>
                  <td className="px-3.5 py-2.5" style={{ color: fg }}>
                    {row.tone}
                  </td>
                  <td className="px-3.5 py-2.5" style={{ color: fg }}>
                    {row.level}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {note && (
        <p className="mt-2 text-xs" style={{ fontFamily: mono, color: C.dim }}>
          {note}
        </p>
      )}
    </>
  );
}
