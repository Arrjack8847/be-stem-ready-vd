import React from 'react';
import {Audio} from '@remotion/media';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {ASSETS} from '../assets';
import {FilmFinish} from '../components/FilmFinish';
import {Fonts} from '../Fonts';
import {AffordabilityScene} from './AffordabilityScene';
import {CertifiedEducatorScene} from './CertifiedEducatorScene';
import {ChallengeIntro} from './ChallengeIntro';
import {
  CHALLENGE_CUTS,
  CHALLENGE_DURATION,
} from './challengeConfig';
import {
  ChallengeSoundDesign,
  challengeMusicVolumeLocal,
} from './ChallengeSoundDesign';
import {LicensedInstitutionScene} from './LicensedInstitutionScene';
import {SolutionBridge} from './SolutionBridge';

export {CHALLENGE_DURATION} from './challengeConfig';

export type ChallengeSectionProps = {
  withMusic?: boolean;
  withSfx?: boolean;
  musicOffsetInFrames?: number;
};

const between = (start: number, end: number) => end - start;

export const ChallengeSection: React.FC<ChallengeSectionProps> = ({
  withMusic = true,
  withSfx = true,
  musicOffsetInFrames = 1080,
}) => (
  <AbsoluteFill
    style={{
      background: '#050c19',
      color: '#f5f8ff',
      overflow: 'hidden',
      fontFamily: 'Space Grotesk',
    }}
  >
    <Fonts />

    <Sequence
      name="00:36.00–00:39.13 · The Challenge"
      from={CHALLENGE_CUTS.intro}
      durationInFrames={between(CHALLENGE_CUTS.intro, CHALLENGE_CUTS.institution)}
    >
      <ChallengeIntro
        duration={between(CHALLENGE_CUTS.intro, CHALLENGE_CUTS.institution)}
      />
    </Sequence>

    <Sequence
      name="00:39.13–00:42.90 · 01 Licensed Institution"
      from={CHALLENGE_CUTS.institution}
      durationInFrames={between(CHALLENGE_CUTS.institution, CHALLENGE_CUTS.educator)}
    >
      <LicensedInstitutionScene
        duration={between(CHALLENGE_CUTS.institution, CHALLENGE_CUTS.educator)}
      />
    </Sequence>

    <Sequence
      name="00:42.90–00:47.03 · 02 Certified STEM Educator"
      from={CHALLENGE_CUTS.educator}
      durationInFrames={between(CHALLENGE_CUTS.educator, CHALLENGE_CUTS.affordability)}
    >
      <CertifiedEducatorScene
        duration={between(CHALLENGE_CUTS.educator, CHALLENGE_CUTS.affordability)}
      />
    </Sequence>

    <Sequence
      name="00:47.03–00:51.90 · 03 Not Affordable for STEM"
      from={CHALLENGE_CUTS.affordability}
      durationInFrames={between(CHALLENGE_CUTS.affordability, CHALLENGE_CUTS.bridge)}
    >
      <AffordabilityScene
        duration={between(CHALLENGE_CUTS.affordability, CHALLENGE_CUTS.bridge)}
      />
    </Sequence>

    <Sequence
      name="00:51.90–00:54.00 · Make STEM accessible"
      from={CHALLENGE_CUTS.bridge}
      durationInFrames={between(CHALLENGE_CUTS.bridge, CHALLENGE_CUTS.end)}
    >
      <SolutionBridge duration={between(CHALLENGE_CUTS.bridge, CHALLENGE_CUTS.end)} />
    </Sequence>

    {withSfx ? <ChallengeSoundDesign /> : null}
    <FilmFinish />

    {withMusic ? (
      <Audio
        name="Music · global 00:36–00:54"
        src={staticFile(ASSETS.music)}
        trimBefore={musicOffsetInFrames}
        durationInFrames={CHALLENGE_DURATION}
        volume={challengeMusicVolumeLocal}
      />
    ) : null}
  </AbsoluteFill>
);
