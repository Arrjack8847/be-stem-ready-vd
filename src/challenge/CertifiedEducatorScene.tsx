import React from 'react';
import {AbsoluteFill} from 'remotion';
import {ChallengeVideo} from './ChallengeVideo';
import {CHALLENGE_SOURCES, CHALLENGE_TRIMS} from './challengeConfig';
import {ProblemGraphic, SoftGradient, SubtleGrid} from './ChallengeGraphics';

export const CertifiedEducatorScene: React.FC<{duration: number}> = ({duration}) => (
  <AbsoluteFill style={{background: '#050c19'}}>
    <ChallengeVideo
      src={CHALLENGE_SOURCES.educator}
      duration={duration}
      trimBefore={CHALLENGE_TRIMS.educator}
      scaleFrom={1.02}
      scaleTo={1.04}
      xFrom={2}
      xTo={-3}
      objectPosition="51% 50%"
      filter="contrast(1.05) saturate(.88) brightness(.88)"
      overlay="linear-gradient(90deg, rgba(3,10,22,.72), rgba(3,10,22,.23) 43%, rgba(3,10,22,.035) 72%), linear-gradient(0deg, rgba(3,10,22,.14), transparent 45%)"
    />
    <SoftGradient />
    <SubtleGrid />
    <ProblemGraphic
      number="02"
      title={['CERTIFIED', 'STEM EDUCATOR']}
      variant="rise"
      support="Instruction / demonstration / human interaction"
    />
  </AbsoluteFill>
);
