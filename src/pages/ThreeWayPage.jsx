import { C, mono, sans } from '../tokens.js';
import SectionLabel from '../components/shared/SectionLabel.jsx';
import NavDropdown from '../components/shared/NavDropdown.jsx';
import SwitchPositionsTable from '../components/shared/SwitchPositionsTable.jsx';
import KitSpecsTable from '../components/shared/KitSpecsTable.jsx';
import Schematic from '../components/schematic/Schematic.jsx';
import Step from '../components/steps/Step.jsx';
import WarnBox from '../components/shared/WarnBox.jsx';
import NoteBox from '../components/shared/NoteBox.jsx';
import Code from '../components/shared/Code.jsx';
import VisPrep from '../components/steps/visuals/VisPrep.jsx';
import VisBridgeGnd from '../components/steps/visuals/VisBridgeGnd.jsx';
import VisVolPot from '../components/steps/visuals/VisVolPot.jsx';
import VisTonePot from '../components/steps/visuals/VisTonePot.jsx';
import VisYSplit from '../components/steps/visuals/VisYSplit.jsx';
import VisSwitch3way from '../components/steps/visuals/VisSwitch3way.jsx';
import VisJack from '../components/steps/visuals/VisJack.jsx';
import VisGndAudit3way from '../components/steps/visuals/VisGndAudit3way.jsx';
import VisTest3way from '../components/steps/visuals/VisTest3way.jsx';

const switchPositions = [
  {
    pos: '1',
    label: 'Bridge Only',
    mode: 'Single coil',
    tone: 'Bright / twangy',
    level: 'Normal',
    highlight: false,
    series: false,
  },
  {
    pos: '2',
    label: 'Neck + Bridge',
    mode: 'Parallel',
    tone: 'Balanced / quack',
    level: 'Slightly lower',
    highlight: true,
    series: false,
  },
  {
    pos: '3',
    label: 'Neck Only',
    mode: 'Single coil',
    tone: 'Warm / full',
    level: 'Normal',
    highlight: false,
    series: false,
  },
];

const kitSpecs = [
  {
    component: 'Potentiometers',
    brand: 'TAOT Custom CTS',
    spec: '250K · Audio taper · 10% tolerance',
    notes:
      'Solid shaft · USA-made · Includes mounting hardware · Not compatible with metric import guitars',
    highlight: false,
  },
  {
    component: '3-Way Switch',
    brand: 'CRL USA-made',
    spec: '3-position blade',
    notes: 'Top hat knob included · USA-made · Drop-in for standard Tele control plate',
    highlight: true,
  },
  {
    component: 'Capacitor',
    brand: 'Orange Drop',
    spec: '0.047µF · 400V',
    notes: 'Warm vintage voicing · Matches 250k pot value',
    highlight: false,
  },
  {
    component: 'Output Jack',
    brand: 'Switchcraft J11',
    spec: '1/4" mono',
    notes: 'Fits standard Tele control plate hole',
    highlight: true,
  },
  {
    component: 'Wire',
    brand: 'Vintage-correct tinned cloth',
    spec: '22AWG · 2 ft white + 2 ft black',
    notes: '4 ft total · Push-back cloth insulation',
    highlight: false,
  },
  {
    component: 'Compatibility',
    brand: '—',
    spec: 'USA / American-spec only',
    notes: 'Not compatible with import (metric) guitars · Sized for USA Fenders',
    highlight: true,
  },
];

const legendItems = [
  { color: '#ef4444', label: 'Bridge HOT' },
  { color: '#f97316', label: 'Bridge GND→Bus' },
  { color: '#60a5fa', label: 'Neck HOT' },
  { color: '#93c5fd', label: 'Neck GND→Bus' },
  { color: '#22c55e', label: 'Signal Path' },
  { color: '#f472b6', label: 'Tone Cap Path', dashed: true },
  { color: '#6b7280', label: 'Ground' },
  { color: '#374151', label: 'Bridge Plate GND', dashed: true },
];

const steps = [
  {
    num: '01',
    title: 'PREP & TOOLS',
    visual: <VisPrep />,
    caption: 'TOOLS + PRE-TINNING',
    body: (
      <>
        <ul className="list-disc pl-4 mt-1 flex flex-col gap-1">
          <li>Iron: 700–750°F (370–400°C)</li>
          <li>Solder: 60/40 or 63/37 rosin-core, 0.6–0.8mm</li>
          <li>Flux pen (optional but recommended on pot lugs)</li>
          <li>Multimeter for continuity and resistance checks</li>
        </ul>
        <NoteBox>
          Pre-tin all pot lugs and switch terminals before wiring. Clean with isopropyl between
          joints.
        </NoteBox>
      </>
    ),
  },
  {
    num: '02',
    title: 'BRIDGE PLATE GROUND',
    visual: <VisBridgeGnd />,
    caption: 'BRIDGE CLAW → VOL POT CASING',
    body: (
      <>
        <p>
          Run a ground wire from the bridge claw (under bridge plate) through the body cavity to the
          Vol pot casing. Solder directly to the back of the vol pot housing, not a lug.
        </p>
        <NoteBox>Route before mounting pots — easier access to the body channel.</NoteBox>
      </>
    ),
  },
  {
    num: '03',
    title: 'VOLUME POT',
    visual: <VisVolPot />,
    caption: 'VOLUME POT LUG WIRING',
    body: (
      <>
        <ul className="list-disc pl-4 mt-1 flex flex-col gap-1">
          <li>
            <Code>L1</Code> → solder to pot casing (ground)
          </li>
          <li>
            <Code>L2</Code> (wiper) → signal wire splitting to Tone <Code>L3</Code> and Jack Tip
          </li>
          <li>
            <Code>L3</Code> → receives wire from switch SIG.OUT
          </li>
        </ul>
        <NoteBox>
          L1 and casing can be bridged with a short piece of bare wire before installing.
        </NoteBox>
      </>
    ),
  },
  {
    num: '04',
    title: 'TONE POT + CAP',
    visual: <VisTonePot />,
    caption: 'TONE POT + 0.047µF CAP WIRING',
    body: (
      <>
        <ul className="list-disc pl-4 mt-1 flex flex-col gap-1">
          <li>
            <Code>L1</Code> → ground (pot casing or gnd bus)
          </li>
          <li>
            <Code>L2</Code> (wiper) → one leg of 0.047µF cap; other cap leg → ground
          </li>
          <li>
            <Code>L3</Code> → receives tap from Vol <Code>L2</Code>
          </li>
        </ul>
        <NoteBox>
          Standard Fender post-volume tone wiring: tone taps off Vol L2, after the volume control.
        </NoteBox>
      </>
    ),
  },
  {
    num: '05',
    title: 'VOL L2 Y-SPLIT',
    visual: <VisYSplit />,
    caption: 'Y-SPLIT AT VOL L2 — TWO WIRES, ONE LUG',
    body: (
      <>
        <p>
          Vol <Code>L2</Code> (wiper) carries the output signal. Solder both the wire to Tone{' '}
          <Code>L3</Code> and the wire to Jack Tip at the same lug.
        </p>
        <WarnBox>
          ⚠ The junction must be at Vol L2. Do not attempt the split at the jack or tone pot.
        </WarnBox>
      </>
    ),
  },
  {
    num: '06',
    title: '3-WAY SWITCH',
    visual: <VisSwitch3way />,
    caption: '3-WAY SWITCH — GNDS TO BUS, NOT SWITCH',
    body: (
      <>
        <ol className="list-decimal pl-4 mt-1 flex flex-col gap-1">
          <li>Attach top hat knob to switch before mounting (included in kit)</li>
          <li>
            <strong>B.HOT</strong> — hot wire from bridge pickup
          </li>
          <li>
            <strong>N.HOT</strong> — hot wire from neck pickup
          </li>
          <li>
            <strong>SIG.OUT</strong> → Vol <Code>L3</Code>
          </li>
          <li>Bridge GND → ground bus directly</li>
          <li>Neck GND → ground bus directly</li>
        </ol>
        <NoteBox>
          Unlike the 4-way, pickup grounds route straight to the GND bus — not through the switch.
          The switch only carries hot signals.
        </NoteBox>
      </>
    ),
  },
  {
    num: '07',
    title: 'OUTPUT JACK',
    visual: <VisJack />,
    caption: 'OUTPUT JACK — TIP (SIGNAL) / SLEEVE (GND)',
    body: (
      <>
        <ul className="list-disc pl-4 mt-1 flex flex-col gap-1">
          <li>
            <strong>Tip</strong> (longer lug on Switchcraft) → signal from Vol <Code>L2</Code>
          </li>
          <li>
            <strong>Sleeve</strong> → ground bus
          </li>
        </ul>
        <NoteBox>Switchcraft J11 mono jack — fits standard Tele control plate hole.</NoteBox>
      </>
    ),
  },
  {
    num: '08',
    title: 'GROUND BUS AUDIT',
    visual: <VisGndAudit3way />,
    caption: 'ALL GROUND POINTS → ONE BUS (INCLUDES BOTH PU GNDS)',
    body: (
      <>
        <p>Confirm every ground point is connected:</p>
        <ul className="list-disc pl-4 mt-1 flex flex-col gap-1">
          <li>
            Vol <Code>L1</Code> + Vol casing
          </li>
          <li>
            Tone <Code>L1</Code> + Tone casing
          </li>
          <li>Cap second leg</li>
          <li>Bridge pickup GND wire</li>
          <li>Neck pickup GND wire</li>
          <li>Bridge plate claw wire</li>
          <li>Jack sleeve</li>
        </ul>
        <NoteBox>
          Vol and Tone casings must be bonded. Note that in 3-way wiring, both pickup grounds go
          directly to the bus — there is no ground routed through the switch.
        </NoteBox>
      </>
    ),
  },
  {
    num: '09',
    title: 'CONTINUITY + FUNCTION TEST',
    visual: <VisTest3way />,
    caption: 'CONTINUITY CHECK + OUTPUT LEVEL BY POSITION',
    body: (
      <>
        <ol className="list-decimal pl-4 mt-1 flex flex-col gap-1">
          <li>
            Multimeter continuity mode: probe all ground points to jack sleeve — all should beep
          </li>
          <li>Tap test: plug in, tap each pickup in each switch position, confirm signal</li>
          <li>Pos 1 (bridge) and Pos 3 (neck) should have similar output levels</li>
          <li>Pos 2 (parallel) will be slightly lower output than either single-coil position</li>
          <li>Tone sweep: turning tone pot to 0 should darken the signal significantly</li>
          <li>Volume sweep: clean taper from full to zero with no dropout</li>
        </ol>
      </>
    ),
  },
];

export default function ThreeWayPage() {
  return (
    <div
      className="min-h-screen pb-16"
      style={{ background: C.bg, color: C.text, fontFamily: sans, fontWeight: 300 }}
    >
      {/* Header */}
      <header
        className="flex items-center gap-4 px-10 pt-6 pb-5 border-b flex-wrap"
        style={{ borderColor: C.border }}
      >
        <h1 className="text-lg tracking-wider" style={{ fontFamily: mono, color: C.accent }}>
          TELE / 3-WAY SWITCH
        </h1>
        <span className="text-sm tracking-wide" style={{ color: C.dim }}>
          Fender Texas Special · CTS 250k · 0.047µF
        </span>
        <NavDropdown />
        <span
          className="ml-auto text-xs px-2.5 py-1 border tracking-widest"
          style={{ fontFamily: mono, background: '#1a2235', borderColor: C.border, color: C.dim }}
        >
          WIRING REF v1.0
        </span>
      </header>

      {/* 01 — Wiring Schematic */}
      <SectionLabel>01 — WIRING SCHEMATIC</SectionLabel>
      <div className="px-10 pt-6 overflow-x-auto">
        <Schematic variant="3way" />
      </div>
      <div
        className="flex flex-wrap gap-x-7 gap-y-3.5 px-10 pt-3.5"
        style={{ fontFamily: mono, fontSize: '0.7rem' }}
      >
        {legendItems.map(({ color, label, dashed }) => (
          <div key={label} className="flex items-center gap-2" style={{ color: C.dim }}>
            <span
              className="inline-block flex-shrink-0"
              style={{
                width: 26,
                height: 2,
                background: dashed
                  ? `repeating-linear-gradient(90deg,${color} 0 5px,transparent 5px 9px)`
                  : color,
              }}
            />
            {label}
          </div>
        ))}
      </div>
      <p className="px-10 mt-2 text-xs" style={{ fontFamily: mono, color: C.dim }}>
        Key difference from 4-way: pickup grounds route directly to GND bus, not through the switch.
      </p>

      {/* 02 — Switch Positions */}
      <SectionLabel style={{ marginTop: 28 }}>02 — SWITCH POSITIONS</SectionLabel>
      <div className="px-10">
        <SwitchPositionsTable
          rows={switchPositions}
          note="Standard 3-way Telecaster wiring. For series neck+bridge (pos 4), see the 4-way wiring kit."
        />
      </div>

      {/* 03 — Wiring Kit Specs */}
      <SectionLabel style={{ marginTop: 28 }}>03 — WIRING KIT SPECS</SectionLabel>
      <div className="px-10">
        <KitSpecsTable
          rows={kitSpecs}
          preamble={
            <>
              TAOT Deluxe Telecaster Wiring Kit (3-way) —{' '}
              <a
                href="https://theartoftone.com/products/deluxe-wiring-kit-for-fender-telecaster-tele"
                target="_blank"
                rel="noreferrer"
                style={{ color: C.accent, textDecoration: 'none' }}
              >
                theartoftone.com
              </a>{' '}
              · USA sizing only — not compatible with import (metric) guitars
            </>
          }
          footnote="Qty: 2× pots, 1× switch + top hat knob, 1× cap, 1× jack, 4 ft wire."
        />
      </div>

      {/* 04 — Soldering Guide */}
      <SectionLabel style={{ marginTop: 28 }}>04 — SOLDERING GUIDE</SectionLabel>
      <div className="px-10 mt-4 max-w-5xl">
        {steps.map((s) => (
          <Step key={s.num} {...s} />
        ))}
      </div>
    </div>
  );
}
