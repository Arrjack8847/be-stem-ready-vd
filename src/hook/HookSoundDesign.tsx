import React from 'react';
import {Audio} from '@remotion/media';
import {Sequence, interpolate, staticFile} from 'remotion';
import {HOOK_CUTS, HOOK_SFX, HOOK_SOURCES, HOOK_TRIMS} from './hookConfig';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const envelope = (
  frame: number,
  attackEnd: number,
  sustainEnd: number,
  releaseEnd: number,
  max: number,
) =>
  interpolate(
    frame,
    [0, attackEnd, sustainEnd, releaseEnd],
    [0, max, max, 0],
    clamp,
  );

const dip = (frame: number, center: number, radius: number, minimum: number) => {
  const distance = Math.abs(frame - center);
  if (distance >= radius) {
    return 1;
  }

  return interpolate(distance, [0, radius], [minimum, 1], clamp);
};

// Used by both the standalone hook and FullFilm master music.
// Frames >= 450 return the normal film level so 00:15 onward is unchanged.
export const hookMusicVolume = (frame: number) => {
  const base = 0.76;

  if (frame >= HOOK_CUTS.end) {
    return base;
  }

  const opening = dip(frame, 1, 8, 0.82);
  const competition = dip(frame, HOOK_CUTS.competitionStart + 3, 10, 0.88);
  const achievement = dip(frame, HOOK_CUTS.achievementStart + 5, 10, 0.88);
  const scale = dip(frame, HOOK_CUTS.scaleStart, 14, 0.80);
  const brand = dip(frame, HOOK_CUTS.brandStart + 6, 12, 0.82);

  let level = base * Math.min(opening, competition, achievement, scale, brand);

  // Let the completed identity breathe, then restore the normal film level
  // before the 00:15 identity chapter begins.
  if (frame >= HOOK_CUTS.brandStart + 27 && frame < 440) {
    level = Math.min(level, 0.66);
  }

  if (frame >= 440) {
    level = interpolate(frame, [440, 449], [0.66, base], clamp);
  }

  return level;
};

export const HookSoundDesign: React.FC = () => (
  <>
    <Sequence name="SFX · opening transient" from={0} durationInFrames={10}>
      <Audio src={staticFile(HOOK_SFX.impact)} volume={0.16} />
    </Sequence>

    <Sequence name="SFX · mechanical detail" from={1} durationInFrames={18}>
      <Audio
        src={staticFile(HOOK_SFX.mechanical)}
        volume={(frame) => envelope(frame, 3, 10, 17, 0.07)}
      />
    </Sequence>

    <Sequence
      name="Natural detail · build"
      from={HOOK_CUTS.buildStart}
      durationInFrames={HOOK_CUTS.humanStart - HOOK_CUTS.buildStart}
    >
      <Audio
        src={staticFile(HOOK_SOURCES.build)}
        trimBefore={HOOK_TRIMS.build}
        volume={(frame) => envelope(frame, 5, 24, 40, 0.025)}
      />
    </Sequence>

    <Sequence
      name="Natural ambience · competition"
      from={HOOK_CUTS.competitionStart}
      durationInFrames={36}
    >
      <Audio
        src={staticFile(HOOK_SOURCES.competition)}
        trimBefore={HOOK_TRIMS.competition}
        volume={(frame) => envelope(frame, 4, 22, 35, 0.075)}
      />
    </Sequence>

    <Sequence
      name="Natural ambience · achievement"
      from={HOOK_CUTS.achievementStart}
      durationInFrames={34}
    >
      <Audio
        src={staticFile(HOOK_SOURCES.achievement)}
        trimBefore={HOOK_TRIMS.achievement}
        volume={(frame) => envelope(frame, 4, 21, 33, 0.042)}
      />
    </Sequence>

    <Sequence
      name="SFX · achievement warmth"
      from={HOOK_CUTS.achievementStart + 4}
      durationInFrames={12}
    >
      <Audio src={staticFile(HOOK_SFX.achievementHit)} volume={0.095} />
    </Sequence>

    <Sequence
      name="SFX · scale riser"
      from={HOOK_CUTS.scaleStart - 13}
      durationInFrames={20}
    >
      <Audio src={staticFile(HOOK_SFX.scaleRiser)} volume={0.10} />
    </Sequence>

    <Sequence
      name="SFX · scale whoosh"
      from={HOOK_CUTS.scaleStart - 3}
      durationInFrames={18}
    >
      <Audio src={staticFile(HOOK_SFX.scaleWhoosh)} volume={0.11} />
    </Sequence>

    <Sequence
      name="SFX · scale low hit"
      from={HOOK_CUTS.scaleStart}
      durationInFrames={10}
    >
      <Audio src={staticFile(HOOK_SFX.impact)} volume={0.075} />
    </Sequence>

    <Sequence
      name="SFX · brand resolve"
      from={HOOK_CUTS.brandStart + 5}
      durationInFrames={12}
    >
      <Audio src={staticFile(HOOK_SFX.brandHit)} volume={0.105} />
    </Sequence>
  </>
);
