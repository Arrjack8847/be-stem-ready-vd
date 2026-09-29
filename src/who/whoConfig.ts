import {whoIsBSRAssets} from '../data/who-is-bsr-assets';

export const WHO_DURATION = 630;
export const WHO_TRANSITION_FRAMES = 6;

export const WHO_SCENES = {
  identity: {from: 0, duration: 81},
  handsOn: {from: 81, duration: 90},
  history: {from: 171, duration: 201},
  growth: {from: 372, duration: 93},
  experience: {from: 465, duration: 81},
  purpose: {from: 546, duration: 84},
} as const;

export const WHO_SOURCES = {
  identity: 'media/who/01-identity/20240430_IMG_4457.mp4',
  enjoyAI: 'media/who/02-enjoy-ai/20240702_ENJOY-AI-2024.mp4',
  history2022: 'bsr-assets/20220403_PHOTO-2022-04-03-18-53-28 2.jpg',
  history2023a: 'bsr-assets/20230115_PHOTO-2023-01-15-10-05-51.jpg',
  history2023b: 'bsr-assets/20230115_PHOTO-2023-01-15-10-07-47 2.jpg',
  growth: 'media/who/_proxy/20240429_IMG_4384-proxy.mp4',
  growthCourse: 'media/who/_proxy/20240429_IMG_4388-proxy.mp4',
} as const;

// All trims are inside Stage-1 approved candidate ranges.
// ENJOY AI scene-change times are used where available so cuts land on real action changes.
export const WHO_TRIMS = {
  identity: Math.round(79 * 30),
  handsRobot: Math.round(31.6667 * 30),
  handsCoding: Math.round(48.0333 * 30),
  handsDrone: Math.round(50.6333 * 30),
  growth: Math.round(12.2 * 30),
  growthCourse: Math.round(14.6 * 30),
  growthRobotics: Math.round(63 * 30),
  growthGroup: Math.round(156 * 30),
  experience: Math.round(38.5667 * 30),
  purpose: Math.round(126.1 * 30),
} as const;

export const WHO_SOURCE_RANGES = {
  identity: {start: 79.0, end: 81.7, source: whoIsBSRAssets.video4457.source},
  handsRobot: {start: 31.6667, end: 32.8334, source: whoIsBSRAssets.enjoyAI2024.source},
  handsCoding: {start: 48.0333, end: 48.8667, source: whoIsBSRAssets.enjoyAI2024.source},
  handsDrone: {start: 50.6333, end: 51.6333, source: whoIsBSRAssets.enjoyAI2024.source},
  history2022: {source: whoIsBSRAssets.photo2022.source},
  history2023a: {source: whoIsBSRAssets.photo2023a.source},
  history2023b: {source: whoIsBSRAssets.photo2023b.source},
  growth: {start: 12.2, end: 15.2, source: whoIsBSRAssets.video4384.source},
  growthCourse: {start: 14.6, end: 17.1, source: whoIsBSRAssets.video4388.source},
  growthRobotics: {start: 63.0, end: 76.9, source: whoIsBSRAssets.enjoyAI2024.source},
  growthGroup: {start: 156.0, end: 160.5, source: whoIsBSRAssets.enjoyAI2024.source},
  experience: {start: 38.5667, end: 41.2667, source: whoIsBSRAssets.enjoyAI2024.source},
  purpose: {start: 126.1, end: 128.9, source: whoIsBSRAssets.enjoyAI2024.source},
} as const;

export const WHO_SFX = {
  entrance: 'who/sfx/entrance-whoosh.wav',
  technology: 'who/sfx/technology-texture.wav',
  yearTick: 'who/sfx/year-tick.wav',
  photoRise: 'who/sfx/photo-rise.wav',
  keywordHit: 'who/sfx/keyword-hit.wav',
} as const;
