import React from 'react';
import {AbsoluteFill} from 'remotion';
import {ChallengeVideo} from './ChallengeVideo';
import {CHALLENGE_SOURCES, CHALLENGE_TRIMS} from './challengeConfig';
import {ProblemGraphic, SoftGradient, SubtleGrid} from './ChallengeGraphics';

export const LicensedInstitutionScene: React.FC<{duration: number}> = ({duration}) => (
  <AbsoluteFill style={{background: '#050c19'}}>
    <ChallengeVideo
      src={CHALLENGE_SOURCES.educator}
      duration={duration}
      trimBefore={CHALLENGE_TRIMS.institution}
      scaleFrom={1.015}
      scaleTo={1.035}
      xFrom={3}
      xTo={-2}
      objectPosition="50% 50%"
      filter="contrast(1.05) saturate(.84) brightness(.86)"
      overlay="linear-gradient(90deg, rgba(3,10,22,.73), rgba(3,10,22,.26) 42%, rgba(3,10,22,.04) 73%), linear-gradient(0deg, rgba(3,10,22,.16), transparent 46%)"
    />
    <SoftGradient />
    <SubtleGrid />
    <ProblemGraphic
      number="01"
      title={['LICENSED', 'INSTITUTION']}
      support="Structured learning / illustrative footage"
    />
  </AbsoluteFill>
);
