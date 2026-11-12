// RootMap's botanical illustrations: vines, leaves, sprouts, buds and the occasional flower.
//
// Every drawing is described the same way, so they all share one hand:
//   stems  curved lines. `pts` is a start point followed by one or more cubic curves (x y, then c1 c2 end, …).
//          A stem with `at: [stem, t]` is a twig: it starts on another stem and its `pts` are offsets from there.
//   parts  what grows on a stem: a leaf, bud, berry or flower, placed by `on` (which stem) and `t` (how far along:
//          0 is the start, 1 the end of the first curve, 2 the end of the second, …). `side` picks the side of the
//          stem (0 grows straight on from it, for tips).
// Sizes and angles are nudged a little for each part, so no two leaves are quite alike.
//
// To change a drawing, edit its entry. To use your own artwork instead, save it as an SVG under
// public/images/botanical/ and give the entry a `file`, for example file: '/images/botanical/hero-vine.svg';
// the rest of the entry is then ignored (keep width and height, they set the shape of the space).
// To add a drawing, add an entry and use it with <Botanical name="yourName" />.

export type Tone = 'a' | 'b' | 'c' | 'line';
export type Accent = 'terra' | 'gold';
export type Stem = { pts: number[]; w?: number; at?: [number, number] };
export type Part = {
  on: number;
  t: number;
  kind?: 'leaf' | 'bud' | 'berry' | 'flower';
  side?: -1 | 0 | 1;
  size?: number;
  tone?: Tone;
  accent?: Accent;
};
export type Illustration = { width: number; height: number; stems: Stem[]; parts: Part[]; file?: string };

const leaf = (on: number, t: number, side: -1 | 0 | 1, size: number, tone: Tone = 'a'): Part => ({ on, t, side, size, tone });

const defs = {
  // Hero, desktop: a vine that climbs the left edge of the photograph and curls over its shoulder.
  heroVine: {
    width: 260,
    height: 620,
    stems: [
      { pts: [70, 620, 40, 540, 110, 480, 80, 400, 55, 330, 10, 300, 40, 220, 62, 160, 120, 150, 130, 90, 136, 50, 180, 20, 240, 30], w: 3 },
      { pts: [-20, -20, -50, -15, -66, -40], at: [0, 1], w: 1.6 },
      { pts: [30, -5, 50, -30, 56, -50], at: [0, 2], w: 1.6 },
      { pts: [-20, -20, -30, -40, -22, -62], at: [0, 3], w: 1.5 },
    ],
    parts: [
      leaf(0, 0.28, -1, 30, 'c'),
      leaf(0, 0.55, 1, 36, 'a'),
      leaf(0, 0.85, -1, 28, 'b'),
      leaf(0, 1.3, 1, 38, 'a'),
      leaf(0, 1.62, -1, 30, 'line'),
      leaf(0, 2.2, -1, 34, 'c'),
      leaf(0, 2.5, 1, 30, 'b'),
      leaf(0, 2.82, -1, 26, 'a'),
      leaf(0, 3.3, 1, 30, 'a'),
      leaf(0, 3.62, -1, 24, 'line'),
      leaf(0, 4, 0, 26, 'c'),
      leaf(1, 0.5, 1, 20, 'b'),
      leaf(1, 1, 0, 22, 'a'),
      leaf(2, 0.5, -1, 18, 'a'),
      { on: 2, t: 1, kind: 'bud', side: 0, size: 12, accent: 'terra' },
      leaf(3, 0.45, 1, 16, 'b'),
      { on: 3, t: 1, kind: 'flower', size: 13, accent: 'terra' },
    ],
  },
  // Hero, phones: a slimmer vine drawn for the narrow margin beside the photograph.
  heroVineSmall: {
    width: 90,
    height: 300,
    stems: [
      { pts: [60, 300, 30, 250, 80, 210, 50, 160, 28, 120, 70, 90, 46, 40], w: 2.4 },
      { pts: [-16, -6, -28, -20, -30, -36], at: [0, 1], w: 1.3 },
    ],
    parts: [
      leaf(0, 0.3, -1, 20, 'a'),
      leaf(0, 0.62, 1, 22, 'c'),
      leaf(0, 1.3, 1, 22, 'a'),
      leaf(0, 1.62, -1, 18, 'line'),
      leaf(0, 2, 0, 20, 'a'),
      leaf(1, 0.5, 1, 13, 'b'),
      { on: 1, t: 1, kind: 'bud', side: 0, size: 9, accent: 'terra' },
    ],
  },
  // A small sprig that sits beside section labels.
  sprig: {
    width: 30,
    height: 22,
    stems: [{ pts: [2, 19, 10, 17, 17, 12, 23, 5], w: 1.5 }],
    parts: [leaf(0, 0.35, 1, 9, 'a'), leaf(0, 0.62, -1, 9, 'b'), leaf(0, 1, 0, 9, 'a')],
  },

  // Four stages of one plant: curiosity, exploration, independence, growth. They share a ground line at the bottom.
  stageSeed: {
    width: 120,
    height: 170,
    stems: [{ pts: [60, 170, 60, 152, 56, 140, 60, 126], w: 2.4 }],
    parts: [leaf(0, 1, -1, 22, 'a'), leaf(0, 1, 1, 20, 'b')],
  },
  stageSprout: {
    width: 120,
    height: 170,
    stems: [
      { pts: [60, 170, 66, 142, 50, 116, 58, 86], w: 2.6 },
      { pts: [4, -18, 24, -22, 26, -8, 27, 2, 16, 2, 16, -6], at: [0, 1], w: 1.3 },
    ],
    parts: [leaf(0, 0.36, 1, 24, 'a'), leaf(0, 0.62, -1, 26, 'c'), leaf(0, 0.9, 1, 20, 'b'), leaf(0, 1, -1, 18, 'line')],
  },
  stageBranch: {
    width: 120,
    height: 170,
    stems: [
      { pts: [60, 170, 56, 150, 64, 128, 60, 108, 56, 88, 64, 68, 58, 46], w: 3 },
      { pts: [12, -8, 26, -14, 32, -32], at: [0, 0.9], w: 1.6 },
      { pts: [-12, -6, -24, -14, -28, -30], at: [0, 1.4], w: 1.6 },
    ],
    parts: [
      leaf(0, 0.35, -1, 24, 'c'),
      leaf(0, 0.6, 1, 22, 'a'),
      leaf(0, 1.7, 1, 22, 'a'),
      leaf(0, 2, 0, 24, 'c'),
      leaf(0, 2, -1, 18, 'b'),
      leaf(1, 0.5, 1, 18, 'b'),
      leaf(1, 1, 0, 22, 'a'),
      leaf(2, 0.5, -1, 18, 'line'),
      leaf(2, 1, 0, 20, 'a'),
    ],
  },
  stageBloom: {
    width: 120,
    height: 170,
    stems: [
      { pts: [60, 170, 64, 150, 54, 125, 58, 102, 62, 78, 56, 56, 60, 38], w: 3 },
      { pts: [14, -4, 26, -14, 30, -30], at: [0, 0.7], w: 1.6 },
      { pts: [-14, -4, -26, -12, -32, -26], at: [0, 1.3], w: 1.6 },
    ],
    parts: [
      leaf(0, 0.3, -1, 26, 'a'),
      leaf(0, 0.55, 1, 22, 'c'),
      leaf(0, 1.1, 1, 22, 'b'),
      leaf(0, 1.6, -1, 20, 'a'),
      leaf(0, 1.8, 1, 18, 'c'),
      { on: 0, t: 2, kind: 'flower', size: 16, accent: 'terra' },
      leaf(1, 0.5, 1, 16, 'a'),
      { on: 1, t: 1, kind: 'bud', side: 0, size: 11, accent: 'gold' },
      leaf(2, 0.5, -1, 16, 'line'),
      leaf(2, 1, 0, 20, 'a'),
    ],
  },

  // The product section: a faint vine hanging in from the top corner.
  edgeVine: {
    width: 220,
    height: 260,
    stems: [
      { pts: [200, 0, 190, 50, 150, 60, 140, 110, 132, 150, 90, 150, 70, 200, 62, 222, 40, 236, 20, 240], w: 2.6 },
      { pts: [-18, 6, -34, 2, -44, -12], at: [0, 1], w: 1.4 },
    ],
    parts: [
      leaf(0, 0.3, 1, 30, 'a'),
      leaf(0, 0.6, -1, 26, 'b'),
      leaf(0, 1.3, -1, 30, 'a'),
      leaf(0, 1.65, 1, 26, 'c'),
      leaf(0, 2.3, 1, 24, 'b'),
      leaf(0, 2.65, -1, 22, 'a'),
      leaf(0, 3, 0, 22, 'a'),
      leaf(1, 0.5, -1, 16, 'b'),
      { on: 1, t: 1, kind: 'bud', side: 0, size: 10, accent: 'terra' },
    ],
  },

  // Community: two plants from separate roots that lean in, cross and grow on together.
  together: {
    width: 260,
    height: 300,
    stems: [
      { pts: [70, 300, 60, 240, 120, 220, 110, 160, 104, 120, 150, 100, 140, 50], w: 3 },
      { pts: [190, 300, 200, 240, 130, 225, 150, 165, 162, 125, 108, 105, 120, 55], w: 3 },
      { pts: [-18, -8, -34, -22, -36, -42], at: [0, 0.6], w: 1.5 },
      { pts: [18, -8, 36, -20, 40, -40], at: [1, 0.6], w: 1.5 },
    ],
    parts: [
      leaf(0, 0.25, -1, 28, 'a'),
      leaf(0, 0.85, -1, 24, 'c'),
      leaf(0, 1.3, -1, 24, 'a'),
      leaf(0, 1.7, 1, 20, 'b'),
      { on: 0, t: 2, kind: 'flower', size: 15, accent: 'terra' },
      leaf(1, 0.25, 1, 28, 'c'),
      leaf(1, 0.85, 1, 24, 'a'),
      leaf(1, 1.3, 1, 24, 'b'),
      leaf(1, 1.7, -1, 20, 'a'),
      { on: 1, t: 2, kind: 'flower', size: 13, accent: 'gold' },
      leaf(2, 0.5, -1, 18, 'b'),
      leaf(2, 1, 0, 20, 'a'),
      leaf(3, 0.5, 1, 18, 'line'),
      leaf(3, 1, 0, 20, 'a'),
    ],
  },

  // Small drawings for the six resource categories.
  catSeedling: {
    width: 64,
    height: 64,
    stems: [{ pts: [32, 58, 32, 46, 30, 38, 32, 30], w: 2 }],
    parts: [leaf(0, 1, -1, 16, 'a'), leaf(0, 1, 1, 15, 'b')],
  },
  catTwig: {
    width: 64,
    height: 64,
    stems: [{ pts: [14, 56, 26, 48, 38, 34, 48, 14], w: 2 }],
    parts: [leaf(0, 0.25, 1, 13, 'a'), leaf(0, 0.5, -1, 14, 'c'), leaf(0, 0.75, 1, 12, 'b'), leaf(0, 1, 0, 13, 'a')],
  },
  catBud: {
    width: 64,
    height: 64,
    stems: [{ pts: [32, 58, 28, 46, 36, 36, 32, 24], w: 2 }],
    parts: [leaf(0, 0.35, 1, 14, 'a'), leaf(0, 0.6, -1, 13, 'b'), { on: 0, t: 1, kind: 'bud', side: 0, size: 12, accent: 'terra' }],
  },
  catBerries: {
    width: 64,
    height: 64,
    stems: [{ pts: [10, 18, 24, 14, 40, 22, 52, 38], w: 2 }],
    parts: [
      leaf(0, 0.2, -1, 14, 'a'),
      { on: 0, t: 0.45, kind: 'berry', side: 1, size: 10, accent: 'gold' },
      { on: 0, t: 0.75, kind: 'berry', side: 1, size: 11, accent: 'terra' },
      leaf(0, 0.6, -1, 12, 'b'),
      { on: 0, t: 1, kind: 'berry', side: 0, size: 10, accent: 'gold' },
    ],
  },
  catFern: {
    width: 64,
    height: 64,
    stems: [{ pts: [30, 60, 30, 44, 28, 28, 36, 8], w: 1.8 }],
    parts: [
      leaf(0, 0.18, 1, 12, 'a'),
      leaf(0, 0.26, -1, 12, 'c'),
      leaf(0, 0.4, 1, 11, 'b'),
      leaf(0, 0.48, -1, 11, 'a'),
      leaf(0, 0.62, 1, 9, 'a'),
      leaf(0, 0.7, -1, 9, 'b'),
      leaf(0, 0.84, 1, 7, 'c'),
      leaf(0, 0.9, -1, 7, 'a'),
      leaf(0, 1, 0, 7, 'a'),
    ],
  },
  catFlower: {
    width: 64,
    height: 64,
    stems: [{ pts: [32, 60, 36, 48, 28, 40, 32, 28], w: 2 }],
    parts: [leaf(0, 0.35, -1, 14, 'a'), leaf(0, 0.55, 1, 12, 'b'), { on: 0, t: 1, kind: 'flower', size: 10, accent: 'terra' }],
  },
} satisfies Record<string, Illustration>;

export type BotanicalName = keyof typeof defs;
export const BOTANICALS: Record<BotanicalName, Illustration> = defs;

const r = (n: number) => Math.round(n * 10) / 10;

// A point on a stem and the direction the stem is heading there (degrees).
function pointAt(pts: number[], t: number) {
  const count = (pts.length - 2) / 6;
  const i = Math.min(Math.max(Math.floor(t), 0), count - 1);
  const u = t - i;
  const [x0, y0, x1, y1, x2, y2, x3, y3] = pts.slice(i * 6, i * 6 + 8);
  const v = 1 - u;
  const x = v * v * v * x0 + 3 * v * v * u * x1 + 3 * v * u * u * x2 + u * u * u * x3;
  const y = v * v * v * y0 + 3 * v * v * u * y1 + 3 * v * u * u * y2 + u * u * u * y3;
  const dx = 3 * v * v * (x1 - x0) + 6 * v * u * (x2 - x1) + 3 * u * u * (x3 - x2);
  const dy = 3 * v * v * (y1 - y0) + 6 * v * u * (y2 - y1) + 3 * u * u * (y3 - y2);
  return { x, y, angle: (Math.atan2(dy, dx) * 180) / Math.PI };
}

// An almond shape lying along the x axis from 0 to `length`, a little fuller on one side than the other.
function almond(length: number, fat = 0.36) {
  const w = length * fat;
  return `M0 0C${r(length * 0.25)} ${r(-w * 1.15)} ${r(length * 0.7)} ${r(-w)} ${r(length)} 0C${r(length * 0.75)} ${r(w * 0.85)} ${r(length * 0.3)} ${r(w)} 0 0Z`;
}

// The inside of the <svg> for an illustration. Stems thin towards their tips; `--d` on each piece is the moment it
// appears when the drawing is asked to grow (see Botanical.astro).
export function renderBotanical(art: Illustration): string {
  const STEP = 0.42;
  const stems: number[][] = [];
  const starts: number[] = [];
  let out = '';

  for (const stem of art.stems) {
    let pts = stem.pts;
    let start = 0;
    if (stem.at) {
      const origin = pointAt(stems[stem.at[0]], stem.at[1]);
      pts = [origin.x, origin.y, ...stem.pts.map((value, i) => value + (i % 2 === 0 ? origin.x : origin.y))];
      start = starts[stem.at[0]] + stem.at[1] * STEP + 0.2;
    }
    stems.push(pts);
    starts.push(start);
    const count = (pts.length - 2) / 6;
    const width = stem.w ?? 2.2;
    for (let i = 0; i < count; i++) {
      const o = i * 6;
      const d = `M${r(pts[o])} ${r(pts[o + 1])}C${pts.slice(o + 2, o + 8).map(r).join(' ')}`;
      out += `<path class="bot-stem" pathLength="1" style="--d:${r(start + i * STEP)}s" stroke-width="${r(width * (1 - (0.45 * i) / count))}" d="${d}"/>`;
    }
  }

  art.parts.forEach((part, k) => {
    const at = pointAt(stems[part.on], part.t);
    const side = part.side ?? 1;
    const size = (part.size ?? 20) * (1 + 0.12 * Math.sin(k * 2.4 + 1));
    const angle = at.angle + side * (50 + 9 * Math.sin(k * 1.7));
    const delay = r(starts[part.on] + part.t * STEP + 0.3);
    const kind = part.kind ?? 'leaf';
    const accent = `bot-accent--${part.accent ?? 'terra'}`;
    let body = '';
    if (kind === 'leaf') {
      const tone = part.tone ?? 'a';
      body = `<path class="bot-leaf bot-leaf--${tone}" d="${almond(size)}"/>`;
      if (tone === 'line') body += `<path class="bot-vein" d="M0 0L${r(size * 0.78)} 0"/>`;
    } else if (kind === 'bud') {
      const stalk = size * 0.9;
      body = `<path class="bot-vein" d="M0 0L${r(stalk)} 0"/><path class="${accent}" transform="translate(${r(stalk)} 0)" d="${almond(size, 0.5)}"/>`;
    } else if (kind === 'berry') {
      const stalk = size * 0.8;
      body = `<path class="bot-vein" d="M0 0L${r(stalk)} 0"/><circle class="${accent}" cx="${r(stalk + size * 0.36)}" cy="0" r="${r(size * 0.4)}"/>`;
    } else {
      for (let p = 0; p < 5; p++) {
        body += `<path class="${accent}" opacity="${p % 2 ? 0.82 : 1}" transform="rotate(${r(p * 72 + 6 * Math.sin(p * 2.1))})" d="${almond(size * (1 + 0.08 * Math.sin(p * 3)), 0.46)}"/>`;
      }
      body += `<circle class="bot-accent--${part.accent === 'gold' ? 'terra' : 'gold'}" r="${r(size * 0.28)}"/>`;
    }
    out += `<g class="bot-part" style="--d:${delay}s" transform="translate(${r(at.x)} ${r(at.y)}) rotate(${r(angle)})">${body}</g>`;
  });

  return out;
}
