import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {ChallengeVideo} from './ChallengeVideo';
import {
  CHALLENGE_SOURCES,
  CHALLENGE_TRIMS,
} from './challengeConfig';
import {
  MicroLabel,
  ProblemGraphic,
  SoftGradient,
  SubtleGrid,
} from './ChallengeGraphics';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const trimForInternalSequence = (sourceStartFrame: number, sequenceFrom: number) =>
  sourceStartFrame - sequenceFrom;

const EvidenceLabel: React.FC<{
  from: number;
  to: number;
  children: React.ReactNode;
}> = ({from, to, children}) => {
  const frame = useCurrentFrame();
  const opacity = Math.min(
    interpolate(frame, [from, from + 5], [0, 0.82], clamp),
    interpolate(frame, [to - 6, to], [0.82, 0], clamp),
  );
  const y = interpolate(frame, [from, from + 8], [7, 0], clamp);

  return (
    <div
      style={{
        position: 'absolute',
        right: 116,
        top: 106,
        opacity,
        transform: `translateY(${y}px)`,
        textAlign: 'right',
      }}
    >
      <div
        style={{
          fontFamily: 'Inter',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 3.1,
          color: '#72e4f5',
          marginBottom: 6,
        }}
      >
        RESOURCE AREA
      </div>
      <div
        style={{
          fontFamily: 'Inter',
          fontSize: 18,
          fontWeight: 650,
          letterSpacing: 3.4,
          color: '#f5f8ff',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const AffordabilityScene: React.FC<{duration: number}> = ({duration}) => (
  <AbsoluteFill style={{background: '#050c19'}}>
    <Sequence from={0} durationInFrames={39}>
      <ChallengeVideo
        src={CHALLENGE_SOURCES.enjoyAi}
        duration={39}
        trimBefore={trimForInternalSequence(CHALLENGE_TRIMS.affordabilityRobotics, 0)}
        scaleFrom={1.015}
        scaleTo={1.04}
        objectPosition="50% 50%"
        filter="contrast(1.065) saturate(.89) brightness(.86)"
        overlay="linear-gradient(90deg, rgba(3,10,22,.68), rgba(3,10,22,.17) 48%, rgba(3,10,22,.04)), linear-gradient(0deg, rgba(3,10,22,.15), transparent 44%)"
      />
    </Sequence>

    <Sequence from={39} durationInFrames={33}>
      <ChallengeVideo
        src={CHALLENGE_SOURCES.enjoyAi}
        duration={33}
        trimBefore={trimForInternalSequence(CHALLENGE_TRIMS.affordabilityControl, 39)}
        scaleFrom={1.01}
        scaleTo={1.035}
        objectPosition="52% 50%"
        filter="contrast(1.065) saturate(.88) brightness(.86)"
        overlay="linear-gradient(90deg, rgba(3,10,22,.66), rgba(3,10,22,.15) 48%, rgba(3,10,22,.03)), linear-gradient(0deg, rgba(3,10,22,.14), transparent 44%)"
      />
    </Sequence>

    <Sequence from={72} durationInFrames={37}>
      <ChallengeVideo
        src={CHALLENGE_SOURCES.enjoyAi}
        duration={37}
        trimBefore={trimForInternalSequence(CHALLENGE_TRIMS.affordabilityHardware, 72)}
        scaleFrom={1.02}
        scaleTo={1.045}
        objectPosition="50% 51%"
        filter="contrast(1.07) saturate(.9) brightness(.86)"
        overlay="linear-gradient(90deg, rgba(3,10,22,.66), rgba(3,10,22,.14) 48%, rgba(3,10,22,.03)), linear-gradient(0deg, rgba(3,10,22,.14), transparent 44%)"
      />
    </Sequence>

    <Sequence from={109} durationInFrames={Math.max(1, duration - 109)}>
      <ChallengeVideo
        src={CHALLENGE_SOURCES.enjoyAi}
        duration={Math.max(1, duration - 109)}
        trimBefore={trimForInternalSequence(CHALLENGE_TRIMS.affordabilityMaker, 109)}
        scaleFrom={1.018}
        scaleTo={1.04}
        objectPosition="50% 50%"
        filter="contrast(1.065) saturate(.91) brightness(.87)"
        overlay="linear-gradient(90deg, rgba(3,10,22,.65), rgba(3,10,22,.14) 48%, rgba(3,10,22,.03)), linear-gradient(0deg, rgba(3,10,22,.13), transparent 44%)"
      />
    </Sequence>

    <SoftGradient />
    <SubtleGrid />

    <ProblemGraphic
      number="03"
      title={['NOT AFFORDABLE', 'FOR STEM']}
      support="Specialist equipment / resources / teaching"
    />

    <EvidenceLabel from={0} to={39}>ROBOTICS</EvidenceLabel>
    <EvidenceLabel from={39} to={72}>CODING</EvidenceLabel>
    <EvidenceLabel from={72} to={109}>SCIENCE EXPERIMENTS</EvidenceLabel>
    <EvidenceLabel from={109} to={duration}>ARDUINO MAKER CLASSES</EvidenceLabel>

    <div style={{position: 'absolute', right: 116, bottom: 104}}>
      <MicroLabel delay={18} align="right" opacity={0.5}>
        Illustrative equipment context
      </MicroLabel>
    </div>
  </AbsoluteFill>
);
