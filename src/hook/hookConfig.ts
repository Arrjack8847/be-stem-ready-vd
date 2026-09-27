import {ASSETS} from '../assets';

export const HOOK_DURATION = 450;

// Cut points stay close to the requested pacing, with slightly longer breaths
// reserved for the scale, achievement and technology-hero beats.
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

export const HOOK_SOURCES = {
  activity: ASSETS.motion,
  learning: ASSETS.learning,
  group: ASSETS.hero,
  robot: 'hook/video_20260912_092254.mp4',
  achievement: 'hook/video_20260913_154316.mp4',
  venue: 'hook/DJI_20260912091037_0058_D.MP4',
} as const;

// Source in-points expressed in 30 fps timeline frames.
// These avoid dead time and start inside useful physical action.
export const HOOK_TRIMS = {
  tech: 194, // 06.47s — robot already moving / camera following
  human: 138, // 04.60s — participant is settled and focused
  competition: 369, // 12.30s — wider live challenge action
  achievement: 567, // 18.90s — certificates up, moving into thumbs-up
  venue: 45, // 01.50s — avoid a frame-zero start on the venue reveal
  heroTech: 126, // 04.20s — clean robot hero window before the faster pan
} as const;

export const HOOK_SFX = {
  impact: 'hook-sfx/impact.wav',
  scaleWhoosh: 'hook-sfx/scale-whoosh.wav',
  achievementHit: 'hook-sfx/achievement-hit.wav',
} as const;
