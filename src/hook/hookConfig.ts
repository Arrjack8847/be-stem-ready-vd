import {hookAssets} from '../data/hook-assets';

export const HOOK_DURATION = 450;

// Editorial guide approved for the 15-second opening.
// Final beat-level nudges can still move individual cuts by a few frames after preview.
export const HOOK_CUTS = {
  techStart: 0,
  buildStart: 54,
  humanStart: 108,
  competitionStart: 159,
  achievementStart: 218,
  scaleStart: 278,
  heroStart: 339,
  brandStart: 401,
  end: 450,
} as const;

export const HOOK_SOURCES = {
  tech: hookAssets.tech.workingPath,
  build: hookAssets.build.workingPath,
  human: hookAssets.human.workingPath,
  competition: hookAssets.competition.proxyPublicPath,
  achievement: hookAssets.achievement.workingPath,
  scale: hookAssets.scale.workingPath,
  hero: hookAssets.hero.proxyPublicPath,
  brand: hookAssets.brand.workingPath,
} as const;

// Remotion trim values are expressed on the 30 fps composition timeline.
export const HOOK_TRIMS = {
  tech: Math.round(hookAssets.tech.candidateRange.startSeconds * 30),
  build: Math.round(hookAssets.build.candidateRange.startSeconds * 30),
  human: Math.round(hookAssets.human.candidateRange.startSeconds * 30),
  competition: Math.round(hookAssets.competition.candidateRange.startSeconds * 30),
  achievement: Math.round(hookAssets.achievement.candidateRange.startSeconds * 30),
  scale: Math.round(hookAssets.scale.candidateRange.startSeconds * 30),
  hero: Math.round(hookAssets.hero.candidateRange.startSeconds * 30),
  brand: Math.round(hookAssets.brand.candidateRange.startSeconds * 30),
} as const;

export const HOOK_SFX = {
  impact: 'hook/sfx/impact.wav',
  scaleWhoosh: 'hook/sfx/scale-whoosh.wav',
  achievementHit: 'hook/sfx/achievement-hit.wav',
} as const;
