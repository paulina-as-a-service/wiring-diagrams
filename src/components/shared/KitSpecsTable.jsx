import { C, mono } from '../../tokens.js';

// rows: [{ component, brand, spec, notes, highlight, noteContent (optional JSX) }]
export default function KitSpecsTable({ rows, preamble, footnote }) {
  return (
    <>
      {preamble && (
        <p className="pt-2 pb-0 text-xs" style={{ fontFamily: mono, color: C.dim }}>
          {preamble}
        </p>
      )}
      <div className="overflow-x-auto mt-2.5">
        <table className="w-full max-w-4xl border-collapse text-sm" style={{ fontFamily: mono }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${C.accent}` }}>
              {['COMPONENT', 'BRAND / MODEL', 'SPEC', 'NOTES'].map((h) => (
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
            {rows.map((row) => (
              <tr
                key={row.component}
                style={{
                  background: row.highlight ? '#111620' : 'transparent',
                  borderBottom: `1px solid ${C.border}`,
                }}
              >
                <td className="px-3.5 py-2.5 font-semibold" style={{ color: C.amber }}>
                  {row.component}
                </td>
                <td className="px-3.5 py-2.5" style={{ color: C.text }}>
                  {row.brand}
                </td>
                <td className="px-3.5 py-2.5" style={{ color: C.text }}>
                  {row.spec}
                </td>
                <td className="px-3.5 py-2.5" style={{ color: C.dim }}>
                  {row.noteContent || row.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote && (
        <p className="mt-2 text-xs" style={{ fontFamily: mono, color: C.dim }}>
          {footnote}
        </p>
      )}
    </>
  );
}
