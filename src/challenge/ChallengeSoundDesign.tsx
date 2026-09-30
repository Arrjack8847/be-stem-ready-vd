import React from 'react';
import {Audio} from '@remotion/media';
import {Sequence, interpolate, staticFile} from 'remotion';
import {CHALLENGE_CUTS, CHALLENGE_SFX} from './challengeConfig';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export const challengeMusicVolumeLocal = (frame: number) => {
  if (frame < CHALLENGE_CUTS.bridge) {
    const base = 0.70;
    const introDuck = interpolate(frame, [0, 8, 24], [0.62, 0.66, base], clamp);
    return frame < 24 ? introDuck : base;
  }

  return interpolate(
    frame,
    [CHALLENGE_CUTS.bridge, CHALLENGE_CUTS.end - 1],
    [0.70, 0.80],
    clamp,
  );
};

export const ChallengeSoundDesign: React.FC = () => (
  <>
    <Sequence name="SFX · challenge low impact" from={0} durationInFrames={12}>
      <Audio src={staticFile(CHALLENGE_SFX.introImpact)} volume={0.085} />
    </Sequence>

    <Sequence
      name="SFX · problem 01 tick"
      from={CHALLENGE_CUTS.institution + 2}
      durationInFrames={8}
    >
      <Audio src={staticFile(CHALLENGE_SFX.tick)} volume={0.034} />
    </Sequence>

    <Sequence
      name="SFX · problem 02 tick"
      from={CHALLENGE_CUTS.educator + 2}
      durationInFrames={8}
    >
      <Audio src={staticFile(CHALLENGE_SFX.tick)} volume={0.034} />
    </Sequence>

    <Sequence
      name="SFX · problem 03 impact"
      from={CHALLENGE_CUTS.affordability}
      durationInFrames={12}
    >
      <Audio src={staticFile(CHALLENGE_SFX.problem03Impact)} volume={0.065} />
    </Sequence>

    {[12, 54, 88, 121].map((offset) => (
      <Sequence
        key={offset}
        name={`SFX · quiet mechanical texture ${offset}`}
        from={CHALLENGE_CUTS.affordability + offset}
        durationInFrames={20}
      >
        <Audio src={staticFile(CHALLENGE_SFX.mechanical)} volume={0.018} />
      </Sequence>
    ))}

    <Sequence
      name="SFX · possibility rise"
      from={CHALLENGE_CUTS.bridge}
      durationInFrames={22}
    >
      <Audio src={staticFile(CHALLENGE_SFX.solutionRise)} volume={0.045} />
    </Sequence>
  </>
);
