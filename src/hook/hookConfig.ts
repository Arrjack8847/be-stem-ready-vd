import {hookAssets} from '../data/hook-assets';

export const HOOK_DURATION = 450;

// Refined trailer rhythm at 30 fps:
// 0.00 / 1.47 / 3.07 / 4.70 / 6.37 / 8.20 / 10.57 / 12.77 / 15.00
export const HOOK_CUTS = {
  techStart: 0,
  buildStart: 44,
  humanStart: 92,
  competitionStart: 141,
  achievementStart: 191,
  scaleStart: 246,
  heroStart: 317,
  brandStart: 383,
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

// trimBefore is timeline-frame based at the 30 fps composition rate.
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
  mechanical: 'hook/sfx/mechanical-detail.wav',
  achievementHit: 'hook/sfx/achievement-hit.wav',
  scaleRiser: 'hook/sfx/scale-riser.wav',
  scaleWhoosh: 'hook/sfx/scale-whoosh.wav',
  brandHit: 'hook/sfx/brand-hit.wav',
} as const;
