import {whoAssets} from '../data/who-assets';

export const WHO_DURATION=630;
export const WHO_SCENES={
  identity:{from:0,duration:90},
  handsOn:{from:90,duration:90},
  history:{from:180,duration:216},
  growth:{from:390,duration:90},
  experience:{from:480,duration:75},
  keywords:{from:555,duration:75},
} as const;
export const WHO_SOURCES={
  identity:whoAssets.identity.workingPath,
  handsOn:whoAssets.handsOn.workingPath,
  history2022:whoAssets.history2022.source,
  history2023a:whoAssets.history2023a.source,
  history2023b:whoAssets.history2023b.source,
  growth:whoAssets.growth2024.proxyPath,
  experience:whoAssets.experience.proxyPath,
  finalHuman:whoAssets.finalHuman.workingPath,
} as const;
export const WHO_TRIMS={
  identity:Math.round(whoAssets.identity.candidateRange.startSeconds*30),
  handsOn:Math.round(whoAssets.handsOn.candidateRange.startSeconds*30),
  growth:Math.round(whoAssets.growth2024.candidateRange.startSeconds*30),
  experience:Math.round(whoAssets.experience.candidateRange.startSeconds*30),
  finalHuman:Math.round(whoAssets.finalHuman.candidateRange.startSeconds*30),
} as const;
export const WHO_SFX={
  entrance:'who/sfx/entrance-whoosh.wav',
  technology:'who/sfx/technology-texture.wav',
  yearTick:'who/sfx/year-tick.wav',
  photoRise:'who/sfx/photo-rise.wav',
  keywordHit:'who/sfx/keyword-hit.wav',
} as const;
