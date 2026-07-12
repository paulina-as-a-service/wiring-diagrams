import { useState } from 'react';
import { C, mono } from '../../tokens.js';
import { wireColor, wireMap4way, wireMap3way, junctionMap } from './wires.js';

const mf = { fontFamily: mono };

function compStyle(id, activeComp) {
  if (!activeComp)
    return {
      cursor: 'pointer',
      transition:
        'transform 0.22s cubic-bezier(0.34,1.56,0.64,1), filter 0.18s ease, opacity 0.18s ease',
    };
  if (id === activeComp)
    return {
      cursor: 'pointer',
      transform: 'scale(1.08)',
      transformBox: 'fill-box',
      transformOrigin: 'center',
      filter: 'brightness(1.55) drop-shadow(0 0 10px rgba(255,255,255,0.12))',
      transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1), filter 0.18s ease',
    };
  return {
    cursor: 'pointer',
    opacity: 0.55,
    filter: 'brightness(0.55)',
    transition: 'opacity 0.18s ease, filter 0.18s ease',
  };
}

function wireStyle(wireId, activeComp, wireMap) {
  if (!activeComp) return { transition: 'opacity 0.18s ease, filter 0.18s ease' };
  const litWires = wireMap[activeComp] || [];
  if (litWires.includes(wireId)) {
    const color = wireColor[wireId] || '#ffffff';
    return {
      opacity: 1,
      strokeWidth: 3.2,
      filter: `drop-shadow(0 0 4px ${color}) drop-shadow(0 0 10px ${color}80)`,
      transition: 'stroke-width 0.18s ease, opacity 0.18s ease, filter 0.18s ease',
    };
  }
  return { opacity: 0.1, transition: 'opacity 0.18s ease' };
}

function juncStyle(juncId, activeComp, wireMap) {
  if (!activeComp) return {};
  const litWires = wireMap[activeComp] || [];
  const juncWires = junctionMap[juncId] || [];
  const isLit = juncWires.some((w) => litWires.includes(w));
  return { opacity: isLit ? 1 : 0.1, transition: 'opacity 0.18s ease' };
}

function textStyle(compId, activeComp) {
  return {
    fontWeight: activeComp === compId ? 700 : 400,
    pointerEvents: 'none',
  };
}

// ── Shared pickup group ──────────────────────────────────────────────────────
function BridgePU({ activeComp, onEnter, onLeave, onTap }) {
  return (
    <g
      id="comp-bridge"
      style={compStyle('comp-bridge', activeComp)}
      onPointerEnter={(e) => e.pointerType !== 'touch' && onEnter('comp-bridge')}
      onPointerLeave={(e) => e.pointerType !== 'touch' && onLeave()}
      onClick={(e) => onTap('comp-bridge', e)}
    >
      <rect
        x="30"
        y="100"
        width="165"
        height="90"
        rx="3"
        fill={C.svgPanel2}
        stroke={C.border}
        strokeWidth="1"
      />
      <text
        x="112"
        y="122"
        {...mf}
        fontSize="12.6"
        fill={C.accent}
        textAnchor="middle"
        letterSpacing="1"
        style={textStyle('comp-bridge', activeComp)}
      >
        BRIDGE PU
      </text>
      <text
        x="112"
        y="136"
        {...mf}
        fontSize="11.2"
        fill={C.dim}
        textAnchor="middle"
        style={textStyle('comp-bridge', activeComp)}
      >
        Texas Special
      </text>
      <path
        d="M68,155 q8,-11 16,0 q8,-11 16,0 q8,-11 16,0 q8,-11 16,0"
        stroke={C.accent}
        strokeWidth="1.2"
        fill="none"
      />
      <text
        x="50"
        y="172"
        {...mf}
        fontSize="10.5"
        fill={C.red}
        style={textStyle('comp-bridge', activeComp)}
      >
        HOT
      </text>
      <text
        x="50"
        y="184"
        {...mf}
        fontSize="10.5"
        fill={C.orange}
        style={textStyle('comp-bridge', activeComp)}
      >
        GND
      </text>
      <circle cx="195" cy="124" r="3" fill={C.red} />
      <circle cx="195" cy="164" r="3" fill={C.orange} />
    </g>
  );
}

function NeckPU({ activeComp, onEnter, onLeave, onTap }) {
  return (
    <g
      id="comp-neck"
      style={compStyle('comp-neck', activeComp)}
      onPointerEnter={(e) => e.pointerType !== 'touch' && onEnter('comp-neck')}
      onPointerLeave={(e) => e.pointerType !== 'touch' && onLeave()}
      onClick={(e) => onTap('comp-neck', e)}
    >
      <rect
        x="30"
        y="488"
        width="165"
        height="92"
        rx="3"
        fill={C.svgPanel2}
        stroke={C.border}
        strokeWidth="1"
      />
      <text
        x="112"
        y="510"
        {...mf}
        fontSize="12.6"
        fill={C.accent}
        textAnchor="middle"
        letterSpacing="1"
        style={textStyle('comp-neck', activeComp)}
      >
        NECK PU
      </text>
      <text
        x="112"
        y="524"
        {...mf}
        fontSize="11.2"
        fill={C.dim}
        textAnchor="middle"
        style={textStyle('comp-neck', activeComp)}
      >
        Texas Special (RWRP)
      </text>
      <path
        d="M68,543 q8,-11 16,0 q8,-11 16,0 q8,-11 16,0 q8,-11 16,0"
        stroke={C.blue}
        strokeWidth="1.2"
        fill="none"
      />
      <text
        x="50"
        y="562"
        {...mf}
        fontSize="10.5"
        fill={C.blue}
        style={textStyle('comp-neck', activeComp)}
      >
        HOT
      </text>
      <text
        x="50"
        y="574"
        {...mf}
        fontSize="10.5"
        fill={C.lblue}
        style={textStyle('comp-neck', activeComp)}
      >
        GND
      </text>
      <circle cx="195" cy="512" r="3" fill={C.blue} />
      <circle cx="195" cy="552" r="3" fill={C.lblue} />
    </g>
  );
}

function VolPot({ activeComp, onEnter, onLeave, onTap }) {
  return (
    <g
      id="comp-vol"
      style={compStyle('comp-vol', activeComp)}
      onPointerEnter={(e) => e.pointerType !== 'touch' && onEnter('comp-vol')}
      onPointerLeave={(e) => e.pointerType !== 'touch' && onLeave()}
      onClick={(e) => onTap('comp-vol', e)}
    >
      <circle cx="612" cy="260" r="54" fill={C.svgPanel} stroke={C.border2} strokeWidth="1.5" />
      <circle cx="612" cy="260" r="32" fill="none" stroke={C.border} strokeWidth="1" />
      <text
        x="612"
        y="257"
        {...mf}
        fontSize="11.2"
        fill={C.amber}
        textAnchor="middle"
        style={textStyle('comp-vol', activeComp)}
      >
        VOL
      </text>
      <text
        x="612"
        y="269"
        {...mf}
        fontSize="11.2"
        fill={C.darker}
        textAnchor="middle"
        style={textStyle('comp-vol', activeComp)}
      >
        CTS 250k
      </text>
      <text
        x="540"
        y="264"
        {...mf}
        fontSize="9.8"
        fill={C.darker}
        textAnchor="middle"
        style={textStyle('comp-vol', activeComp)}
      >
        L3
      </text>
      <text
        x="612"
        y="198"
        {...mf}
        fontSize="9.8"
        fill={C.darker}
        textAnchor="middle"
        style={textStyle('comp-vol', activeComp)}
      >
        L2
      </text>
      <text
        x="612"
        y="328"
        {...mf}
        fontSize="9.8"
        fill={C.darker}
        textAnchor="middle"
        style={textStyle('comp-vol', activeComp)}
      >
        L1
      </text>
      <circle cx="558" cy="260" r="3" fill={C.green} />
      <circle cx="612" cy="206" r="3" fill={C.green} />
      <circle cx="612" cy="314" r="3" fill={C.gray} />
    </g>
  );
}

function TonePot({ activeComp, onEnter, onLeave, onTap }) {
  return (
    <g
      id="comp-tone"
      style={compStyle('comp-tone', activeComp)}
      onPointerEnter={(e) => e.pointerType !== 'touch' && onEnter('comp-tone')}
      onPointerLeave={(e) => e.pointerType !== 'touch' && onLeave()}
      onClick={(e) => onTap('comp-tone', e)}
    >
      <circle cx="778" cy="260" r="54" fill={C.svgPanel} stroke={C.border2} strokeWidth="1.5" />
      <circle cx="778" cy="260" r="32" fill="none" stroke={C.border} strokeWidth="1" />
      <text
        x="778"
        y="257"
        {...mf}
        fontSize="11.2"
        fill={C.amber}
        textAnchor="middle"
        style={textStyle('comp-tone', activeComp)}
      >
        TONE
      </text>
      <text
        x="778"
        y="269"
        {...mf}
        fontSize="11.2"
        fill={C.darker}
        textAnchor="middle"
        style={textStyle('comp-tone', activeComp)}
      >
        CTS 250k
      </text>
      <text
        x="720"
        y="264"
        {...mf}
        fontSize="9.8"
        fill={C.darker}
        textAnchor="middle"
        style={textStyle('comp-tone', activeComp)}
      >
        L3
      </text>
      <text
        x="778"
        y="198"
        {...mf}
        fontSize="9.8"
        fill={C.darker}
        textAnchor="middle"
        style={textStyle('comp-tone', activeComp)}
      >
        L2
      </text>
      <text
        x="778"
        y="328"
        {...mf}
        fontSize="9.8"
        fill={C.darker}
        textAnchor="middle"
        style={textStyle('comp-tone', activeComp)}
      >
        L1
      </text>
      <circle cx="724" cy="260" r="3" fill={C.green} />
      <circle cx="778" cy="206" r="3" fill={C.pink} />
      <circle cx="778" cy="314" r="3" fill={C.gray} />
      {/* Cap symbol lives inside tone group */}
      <line x1="758" y1="148" x2="798" y2="148" stroke={C.pink} strokeWidth="2" />
      <line x1="758" y1="134" x2="798" y2="134" stroke={C.pink} strokeWidth="2" />
      <text
        x="806"
        y="144"
        {...mf}
        fontSize="11.2"
        fill={C.pink}
        style={textStyle('comp-tone', activeComp)}
      >
        0.047µF
      </text>
    </g>
  );
}

function OutputJack({ activeComp, onEnter, onLeave, onTap }) {
  return (
    <g
      id="comp-jack"
      style={compStyle('comp-jack', activeComp)}
      onPointerEnter={(e) => e.pointerType !== 'touch' && onEnter('comp-jack')}
      onPointerLeave={(e) => e.pointerType !== 'touch' && onLeave()}
      onClick={(e) => onTap('comp-jack', e)}
    >
      <rect
        x="880"
        y="208"
        width="96"
        height="100"
        rx="3"
        fill={C.svgPanel}
        stroke={C.border2}
        strokeWidth="1.5"
      />
      <text
        x="928"
        y="228"
        {...mf}
        fontSize="11.2"
        fill={C.amber}
        textAnchor="middle"
        style={textStyle('comp-jack', activeComp)}
      >
        OUTPUT
      </text>
      <text
        x="928"
        y="240"
        {...mf}
        fontSize="11.2"
        fill={C.darker}
        textAnchor="middle"
        style={textStyle('comp-jack', activeComp)}
      >
        JACK
      </text>
      <circle cx="928" cy="272" r="18" fill={C.svgBg} stroke={C.dgray} strokeWidth="1" />
      <circle cx="928" cy="272" r="8" fill={C.border} />
      <circle cx="880" cy="258" r="3" fill={C.green} />
      <circle cx="880" cy="284" r="3" fill={C.gray} />
      <text
        x="868"
        y="256"
        {...mf}
        fontSize="9.8"
        fill={C.darker}
        textAnchor="end"
        style={textStyle('comp-jack', activeComp)}
      >
        TIP
      </text>
      <text
        x="868"
        y="282"
        {...mf}
        fontSize="9.8"
        fill={C.darker}
        textAnchor="end"
        style={textStyle('comp-jack', activeComp)}
      >
        SLV
      </text>
    </g>
  );
}

// ── Switch groups (variant-specific) ─────────────────────────────────────────
function Switch4way({ activeComp, onEnter, onLeave, onTap }) {
  return (
    <g
      id="comp-switch"
      style={compStyle('comp-switch', activeComp)}
      onPointerEnter={(e) => e.pointerType !== 'touch' && onEnter('comp-switch')}
      onPointerLeave={(e) => e.pointerType !== 'touch' && onLeave()}
      onClick={(e) => onTap('comp-switch', e)}
    >
      <rect
        x="282"
        y="160"
        width="198"
        height="330"
        rx="3"
        fill={C.svgPanel}
        stroke={C.border2}
        strokeWidth="1.5"
      />
      <text
        x="381"
        y="183"
        {...mf}
        fontSize="12.6"
        fill={C.amber}
        textAnchor="middle"
        letterSpacing="1"
        style={textStyle('comp-switch', activeComp)}
      >
        4-WAY SWITCH
      </text>
      <text
        x="381"
        y="197"
        {...mf}
        fontSize="10.5"
        fill={C.darker}
        textAnchor="middle"
        style={textStyle('comp-switch', activeComp)}
      >
        Oak Grigsby style
      </text>
      <line
        x1="381"
        y1="210"
        x2="381"
        y2="478"
        stroke={C.border}
        strokeWidth="1"
        strokeDasharray="4,4"
      />
      <text
        x="290"
        y="323"
        {...mf}
        fontSize="10.5"
        fill={C.red}
        style={textStyle('comp-switch', activeComp)}
      >
        B.HOT
      </text>
      <text
        x="290"
        y="355"
        {...mf}
        fontSize="10.5"
        fill={C.orange}
        style={textStyle('comp-switch', activeComp)}
      >
        B.GND
      </text>
      <text
        x="290"
        y="403"
        {...mf}
        fontSize="10.5"
        fill={C.blue}
        style={textStyle('comp-switch', activeComp)}
      >
        N.HOT
      </text>
      <text
        x="290"
        y="437"
        {...mf}
        fontSize="10.5"
        fill={C.lblue}
        style={textStyle('comp-switch', activeComp)}
      >
        N.GND
      </text>
      <circle cx="282" cy="326" r="3.5" fill={C.border} stroke={C.red} strokeWidth="1.2" />
      <circle cx="282" cy="358" r="3.5" fill={C.border} stroke={C.orange} strokeWidth="1.2" />
      <circle cx="282" cy="406" r="3.5" fill={C.border} stroke={C.blue} strokeWidth="1.2" />
      <circle cx="282" cy="440" r="3.5" fill={C.border} stroke={C.lblue} strokeWidth="1.2" />
      <text
        x="390"
        y="323"
        {...mf}
        fontSize="10.5"
        fill={C.green}
        style={textStyle('comp-switch', activeComp)}
      >
        SIG.OUT
      </text>
      <text
        x="390"
        y="363"
        {...mf}
        fontSize="10.5"
        fill={C.gray}
        style={textStyle('comp-switch', activeComp)}
      >
        GND.OUT
      </text>
      <circle cx="480" cy="326" r="3.5" fill={C.border} stroke={C.green} strokeWidth="1.2" />
      <circle cx="480" cy="366" r="3.5" fill={C.border} stroke={C.gray} strokeWidth="1.2" />
      <text
        x="310"
        y="464"
        {...mf}
        fontSize="9.8"
        fill={C.amber}
        style={textStyle('comp-switch', activeComp)}
      >
        ↑ series jumper
      </text>
      <text
        x="310"
        y="475"
        {...mf}
        fontSize="9.8"
        fill={C.darker}
        style={textStyle('comp-switch', activeComp)}
      >
        per switch diagram
      </text>
    </g>
  );
}

function Switch3way({ activeComp, onEnter, onLeave, onTap }) {
  return (
    <g
      id="comp-switch"
      style={compStyle('comp-switch', activeComp)}
      onPointerEnter={(e) => e.pointerType !== 'touch' && onEnter('comp-switch')}
      onPointerLeave={(e) => e.pointerType !== 'touch' && onLeave()}
      onClick={(e) => onTap('comp-switch', e)}
    >
      <rect
        x="282"
        y="218"
        width="198"
        height="224"
        rx="3"
        fill={C.svgPanel}
        stroke={C.border2}
        strokeWidth="1.5"
      />
      <text
        x="381"
        y="241"
        {...mf}
        fontSize="12.6"
        fill={C.amber}
        textAnchor="middle"
        letterSpacing="1"
        style={textStyle('comp-switch', activeComp)}
      >
        3-WAY SWITCH
      </text>
      <text
        x="381"
        y="255"
        {...mf}
        fontSize="10.5"
        fill={C.darker}
        textAnchor="middle"
        style={textStyle('comp-switch', activeComp)}
      >
        CRL USA
      </text>
      <line
        x1="381"
        y1="266"
        x2="381"
        y2="434"
        stroke={C.border}
        strokeWidth="1"
        strokeDasharray="4,4"
      />
      <text
        x="290"
        y="297"
        {...mf}
        fontSize="10.5"
        fill={C.red}
        style={textStyle('comp-switch', activeComp)}
      >
        B.HOT
      </text>
      <text
        x="290"
        y="367"
        {...mf}
        fontSize="10.5"
        fill={C.blue}
        style={textStyle('comp-switch', activeComp)}
      >
        N.HOT
      </text>
      <circle cx="282" cy="300" r="3.5" fill={C.border} stroke={C.red} strokeWidth="1.2" />
      <circle cx="282" cy="370" r="3.5" fill={C.border} stroke={C.blue} strokeWidth="1.2" />
      <text
        x="390"
        y="332"
        {...mf}
        fontSize="10.5"
        fill={C.green}
        style={textStyle('comp-switch', activeComp)}
      >
        SIG.OUT
      </text>
      <circle cx="480" cy="335" r="3.5" fill={C.border} stroke={C.green} strokeWidth="1.2" />
      <text
        x="318"
        y="418"
        {...mf}
        fontSize="9.8"
        fill={C.amber}
        style={textStyle('comp-switch', activeComp)}
      >
        ↑ top hat knob
      </text>
      <text
        x="318"
        y="429"
        {...mf}
        fontSize="9.8"
        fill={C.darker}
        style={textStyle('comp-switch', activeComp)}
      >
        included in kit
      </text>
    </g>
  );
}

// ── Wire layers ───────────────────────────────────────────────────────────────
function Wires4way({ activeComp }) {
  const ws = (id) => wireStyle(id, activeComp, wireMap4way);
  return (
    <>
      <polyline
        id="wire-bridge-plate"
        points="195,164 214,164 214,645"
        stroke={C.dgray}
        strokeWidth="1.5"
        strokeDasharray="5,4"
        fill="none"
        style={ws('wire-bridge-plate')}
      />
      <circle cx="214" cy="645" r="2.5" fill={C.dgray} />
      <polyline
        id="wire-bridge-hot"
        points="195,124 238,124 238,326 282,326"
        stroke={C.red}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-bridge-hot')}
      />
      <polyline
        id="wire-bridge-gnd"
        points="195,164 254,164 254,358 282,358"
        stroke={C.orange}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-bridge-gnd')}
      />
      <polyline
        id="wire-neck-hot"
        points="195,512 264,512 264,406 282,406"
        stroke={C.blue}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-neck-hot')}
      />
      <polyline
        id="wire-neck-gnd"
        points="195,552 274,552 274,440 282,440"
        stroke={C.lblue}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-neck-gnd')}
      />
      <polyline
        id="wire-switch-sig"
        points="480,326 524,326 524,260 558,260"
        stroke={C.green}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-switch-sig')}
      />
      <polyline
        id="wire-switch-gnd"
        points="480,366 500,366 500,645"
        stroke={C.gray}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-switch-gnd')}
      />
      <circle cx="500" cy="645" r="3" fill={C.gray} />
      <polyline
        id="wire-signal-rail"
        points="612,206 612,96 880,96 880,258"
        stroke={C.green}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-signal-rail')}
      />
      <polyline
        id="wire-tone-tap"
        points="724,96 724,260"
        stroke={C.green}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-tone-tap')}
      />
      <polyline
        id="wire-vol-l1"
        points="612,314 612,645"
        stroke={C.gray}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-vol-l1')}
      />
      <circle cx="612" cy="645" r="3" fill={C.gray} />
      <polyline
        id="wire-tone-cap-a"
        points="778,206 778,148"
        stroke={C.pink}
        strokeWidth="1.5"
        strokeDasharray="5,3"
        fill="none"
        style={ws('wire-tone-cap-a')}
      />
      <polyline
        id="wire-tone-cap-b"
        points="778,134 778,112 810,112 810,645"
        stroke={C.pink}
        strokeWidth="1.5"
        strokeDasharray="5,3"
        fill="none"
        style={ws('wire-tone-cap-b')}
      />
      <circle cx="810" cy="645" r="3" fill={C.pink} />
      <polyline
        id="wire-tone-l1"
        points="778,314 778,645"
        stroke={C.gray}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-tone-l1')}
      />
      <circle cx="778" cy="645" r="3" fill={C.gray} />
      <polyline
        id="wire-jack-sleeve"
        points="880,284 853,284 853,645"
        stroke={C.gray}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-jack-sleeve')}
      />
      <circle cx="853" cy="645" r="3" fill={C.gray} />
    </>
  );
}

function Wires3way({ activeComp }) {
  const ws = (id) => wireStyle(id, activeComp, wireMap3way);
  return (
    <>
      <polyline
        id="wire-bridge-plate"
        points="195,164 215,164 215,645"
        stroke={C.dgray}
        strokeWidth="1.5"
        strokeDasharray="5,4"
        fill="none"
        style={ws('wire-bridge-plate')}
      />
      <circle cx="215" cy="645" r="2.5" fill={C.dgray} />
      <polyline
        id="wire-bridge-hot"
        points="195,124 242,124 242,300 282,300"
        stroke={C.red}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-bridge-hot')}
      />
      <polyline
        id="wire-bridge-gnd"
        points="195,164 228,164 228,645"
        stroke={C.orange}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-bridge-gnd')}
      />
      <circle cx="228" cy="645" r="3" fill={C.orange} />
      <polyline
        id="wire-neck-hot"
        points="195,512 262,512 262,370 282,370"
        stroke={C.blue}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-neck-hot')}
      />
      <polyline
        id="wire-neck-gnd"
        points="195,552 272,552 272,645"
        stroke={C.lblue}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-neck-gnd')}
      />
      <circle cx="272" cy="645" r="3" fill={C.lblue} />
      <polyline
        id="wire-switch-sig"
        points="480,335 524,335 524,260 558,260"
        stroke={C.green}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-switch-sig')}
      />
      <polyline
        id="wire-signal-rail"
        points="612,206 612,96 880,96 880,258"
        stroke={C.green}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-signal-rail')}
      />
      <polyline
        id="wire-tone-tap"
        points="724,96 724,260"
        stroke={C.green}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-tone-tap')}
      />
      <polyline
        id="wire-vol-l1"
        points="612,314 612,645"
        stroke={C.gray}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-vol-l1')}
      />
      <circle cx="612" cy="645" r="3" fill={C.gray} />
      <polyline
        id="wire-tone-cap-a"
        points="778,206 778,148"
        stroke={C.pink}
        strokeWidth="1.5"
        strokeDasharray="5,3"
        fill="none"
        style={ws('wire-tone-cap-a')}
      />
      <polyline
        id="wire-tone-cap-b"
        points="778,134 778,112 810,112 810,645"
        stroke={C.pink}
        strokeWidth="1.5"
        strokeDasharray="5,3"
        fill="none"
        style={ws('wire-tone-cap-b')}
      />
      <circle cx="810" cy="645" r="3" fill={C.pink} />
      <polyline
        id="wire-tone-l1"
        points="778,314 778,645"
        stroke={C.gray}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-tone-l1')}
      />
      <circle cx="778" cy="645" r="3" fill={C.gray} />
      <polyline
        id="wire-jack-sleeve"
        points="880,284 853,284 853,645"
        stroke={C.gray}
        strokeWidth="1.8"
        fill="none"
        style={ws('wire-jack-sleeve')}
      />
      <circle cx="853" cy="645" r="3" fill={C.gray} />
    </>
  );
}

// ── Junction dots ─────────────────────────────────────────────────────────────
function Junctions({ activeComp, wireMap }) {
  const js = (id) => juncStyle(id, activeComp, wireMap);
  return (
    <>
      <circle
        id="junc-vol-rail"
        cx="612"
        cy="96"
        r="3.5"
        fill={C.green}
        style={js('junc-vol-rail')}
      />
      <circle
        id="junc-tone-tap"
        cx="724"
        cy="96"
        r="3.5"
        fill={C.green}
        style={js('junc-tone-tap')}
      />
      <circle
        id="junc-jack-tip"
        cx="880"
        cy="258"
        r="3.5"
        fill={C.green}
        style={js('junc-jack-tip')}
      />
    </>
  );
}

// ── Touch hint (shown only on coarse-pointer / touch devices) ─────────────────
function TouchHint({ activeComp }) {
  if (activeComp) return null;
  return (
    <text
      x="550"
      y="680"
      fontFamily={mono}
      fontSize="11"
      fill={C.dgray}
      textAnchor="middle"
      pointerEvents="none"
      className="touch-hint"
    >
      TAP A COMPONENT TO HIGHLIGHT ITS WIRES
    </text>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function Schematic({ variant = '4way' }) {
  const [activeComp, setActiveComp] = useState(null);
  const patternId = variant === '4way' ? 'dots-4way' : 'dots-3way';
  const wireMap = variant === '4way' ? wireMap4way : wireMap3way;

  const onEnter = (id) => setActiveComp(id);
  const onLeave = () => setActiveComp(null);

  const onTap = (id, e) => {
    if (e.pointerType === 'touch' || e.detail === 0) {
      e.stopPropagation();
      setActiveComp((prev) => (prev === id ? null : id));
    }
  };

  const onBgClick = (e) => {
    if (e.target === e.currentTarget || e.target.tagName === 'rect') {
      setActiveComp(null);
    }
  };

  const shared = { activeComp, onEnter, onLeave, onTap };

  return (
    <svg
      viewBox="0 0 1100 710"
      xmlns="http://www.w3.org/2000/svg"
      className="block w-full max-w-5xl border rounded-sm"
      style={{ background: C.svgBg, borderColor: C.border }}
      onClick={onBgClick}
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="0.8" fill="#1a2030" />
        </pattern>
      </defs>
      <rect width="1100" height="710" fill={C.svgBg} />
      <rect width="1100" height="710" fill={`url(#${patternId})`} />

      {/* Ground bus (static, below everything) */}
      <line
        x1="50"
        y1="645"
        x2="1050"
        y2="645"
        stroke={C.gray}
        strokeWidth="2.5"
        strokeDasharray="6,3"
      />
      <text x="56" y="638" {...mf} fontSize="12.6" fill={C.dgray} letterSpacing="2">
        GND BUS
      </text>

      {/* Wires rendered below components */}
      {variant === '4way' ? (
        <Wires4way activeComp={activeComp} />
      ) : (
        <Wires3way activeComp={activeComp} />
      )}

      {/* Junction dots */}
      <Junctions activeComp={activeComp} wireMap={wireMap} />

      {/* Component groups (rendered above wires) */}
      <BridgePU {...shared} />
      <NeckPU {...shared} />
      {variant === '4way' ? <Switch4way {...shared} /> : <Switch3way {...shared} />}
      <VolPot {...shared} />
      <TonePot {...shared} />
      <OutputJack {...shared} />

      {/* Touch affordance hint */}
      <TouchHint activeComp={activeComp} />
    </svg>
  );
}
