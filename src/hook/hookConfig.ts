import {ASSETS} from '../assets';

export const HOOK_DURATION = 450;

export const HOOK_CUTS = {
  techStart: 0,
  handsStart: 52,
  humanStart: 107,
  competitionStart: 162,
  achievementStart: 218,
  venueStart: 275,
  heroTechStart: 341,
  brandStart: 404,
  end: 450,
} as const;

export const HOOK_SOURCES = {
  tech: ASSETS.motion,
  learning: ASSETS.learning,
  group: ASSETS.hero,
  competition: 'hook/video_20260912_092254.mp4',
  achievement: 'hook/video_20260913_154316.mp4',
  venue: 'hook/DJI_20260912091037_0058_D.MP4',
} as const;
