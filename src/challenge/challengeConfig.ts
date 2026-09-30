import {challengeAssets} from '../data/the-challenge-assets';

export const CHALLENGE_DURATION = 540;

// Story regions are intentionally offset from whole-second boundaries so the
// visual cuts land on approved source actions rather than on the timing chart.
export const CHALLENGE_CUTS = {
  intro: 0,
  institution: 94,
  educator: 207,
  affordability: 331,
  bridge: 477,
  end: 540,
} as const;

export const CHALLENGE_SOURCES = {
  drone: 'media/the-challenge/opener/drone-obstacle.mp4',
  educator: 'media/the-challenge/educator/educator-session.mp4',
  enjoyAi: 'media/the-challenge/affordability/enjoy-ai-2019.mp4',
} as const;

// trimBefore is expressed at the 30 fps composition timebase.
export const CHALLENGE_TRIMS = {
  intro: Math.round(35.8 * 30),
  institution: Math.round(60.4 * 30),
  educator: Math.round(64.8 * 30),
  affordabilityRobotics: Math.round(45.0 * 30),
  affordabilityControl: Math.round(46.2 * 30),
  affordabilityHardware: Math.round(49.0 * 30),
  affordabilityMaker: Math.round(50.0 * 30),
  bridge: Math.round(51.8 * 30),
} as const;

export const CHALLENGE_SFX = {
  introImpact: 'challenge/sfx/impact-low.wav',
  tick: 'challenge/sfx/tick.wav',
  problem03Impact: 'challenge/sfx/impact-03.wav',
  mechanical: 'challenge/sfx/mechanical.wav',
  solutionRise: 'challenge/sfx/solution-rise.wav',
} as const;

export const CHALLENGE_STAGE1 = challengeAssets;
