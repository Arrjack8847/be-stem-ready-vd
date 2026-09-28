import {ASSETS} from '../assets';

export const HOOK_DURATION = 450;

export const HOOK_CUTS = {
  techStart: 0,
  handsStart: 50,
  humanStart: 101,
  competitionStart: 158,
  achievementStart: 215,
  venueStart: 277,
  heroTechStart: 338,
  brandStart: 400,
  end: 450,
} as const;

// The first 15 seconds are intentionally image-only.
// No video source is referenced by the hook.
export const HOOK_SOURCES = {
  tech: ASSETS.history2022,
  learning: ASSETS.learning,
  human: ASSETS.history2023,
  competition: ASSETS.growth2023,
  achievement: ASSETS.growth2024a,
  venue: ASSETS.growth2024b,
  heroTech: ASSETS.history2022,
  group: ASSETS.hero,
} as const;

export const HOOK_SFX = {
  impact: 'hook/sfx/impact.wav',
  scaleWhoosh: 'hook/sfx/scale-whoosh.wav',
  achievementHit: 'hook/sfx/achievement-hit.wav',
} as const;
