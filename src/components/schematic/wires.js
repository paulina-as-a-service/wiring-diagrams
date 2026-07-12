export const wireColor = {
  'wire-bridge-hot': '#ef4444',
  'wire-bridge-gnd': '#f97316',
  'wire-bridge-plate': '#374151',
  'wire-neck-hot': '#60a5fa',
  'wire-neck-gnd': '#93c5fd',
  'wire-switch-sig': '#22c55e',
  'wire-switch-gnd': '#6b7280',
  'wire-signal-rail': '#22c55e',
  'wire-tone-tap': '#22c55e',
  'wire-vol-l1': '#6b7280',
  'wire-tone-cap-a': '#f472b6',
  'wire-tone-cap-b': '#f472b6',
  'wire-tone-l1': '#6b7280',
  'wire-jack-sleeve': '#6b7280',
};

export const wireMap4way = {
  'comp-bridge': ['wire-bridge-hot', 'wire-bridge-gnd', 'wire-bridge-plate'],
  'comp-neck': ['wire-neck-hot', 'wire-neck-gnd'],
  'comp-switch': [
    'wire-bridge-hot',
    'wire-bridge-gnd',
    'wire-neck-hot',
    'wire-neck-gnd',
    'wire-switch-sig',
    'wire-switch-gnd',
  ],
  'comp-vol': ['wire-switch-sig', 'wire-signal-rail', 'wire-tone-tap', 'wire-vol-l1'],
  'comp-tone': ['wire-tone-tap', 'wire-tone-cap-a', 'wire-tone-cap-b', 'wire-tone-l1'],
  'comp-jack': ['wire-signal-rail', 'wire-jack-sleeve'],
};

export const wireMap3way = {
  'comp-bridge': ['wire-bridge-hot', 'wire-bridge-gnd', 'wire-bridge-plate'],
  'comp-neck': ['wire-neck-hot', 'wire-neck-gnd'],
  'comp-switch': ['wire-bridge-hot', 'wire-neck-hot', 'wire-switch-sig'],
  'comp-vol': ['wire-switch-sig', 'wire-signal-rail', 'wire-tone-tap', 'wire-vol-l1'],
  'comp-tone': ['wire-tone-tap', 'wire-tone-cap-a', 'wire-tone-cap-b', 'wire-tone-l1'],
  'comp-jack': ['wire-signal-rail', 'wire-jack-sleeve'],
};

export const junctionMap = {
  'junc-vol-rail': ['wire-signal-rail'],
  'junc-tone-tap': ['wire-signal-rail', 'wire-tone-tap'],
  'junc-jack-tip': ['wire-signal-rail'],
};
