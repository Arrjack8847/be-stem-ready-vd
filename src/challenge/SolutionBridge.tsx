import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from 'remotion';
import {ChallengeVideo} from './ChallengeVideo';
import {CHALLENGE_SOURCES, CHALLENGE_TRIMS} from './challengeConfig';
import {SoftGradient, TechnicalLine} from './ChallengeGraphics';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export const SolutionBridge: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const brightnessLift = interpolate(frame, [0, duration - 1], [0, 1], clamp);
  const questionOpacity = interpolate(frame, [4, 14], [0, 1], clamp);
  const y = interpolate(frame, [4, 16], [14, 0], clamp);
  const solutionOpacity = interpolate(
    frame,
    [Math.max(0, duration - 15), duration - 1],
    [0, 0.42],
    clamp,
  );
  const solutionX = interpolate(
    frame,
    [Math.max(0, duration - 15), duration - 1],
    [18, 0],
    clamp,
  );

  return (
    <AbsoluteFill style={{background: '#050c19'}}>
      <ChallengeVideo
        src={CHALLENGE_SOURCES.enjoyAi}
        duration={duration}
        trimBefore={CHALLENGE_TRIMS.bridge}
        scaleFrom={1.01}
        scaleTo={1.025}
        xFrom={1}
        xTo={-2}
        objectPosition="50% 50%"
        filter={`contrast(1.055) saturate(${0.94 + brightnessLift * 0.07}) brightness(${0.9 + brightnessLift * 0.11})`}
        overlay={`linear-gradient(90deg, rgba(3,10,22,${0.58 - brightnessLift * 0.2}), rgba(3,10,22,${0.18 - brightnessLift * 0.08}) 48%, transparent 74%), linear-gradient(0deg, rgba(3,10,22,${0.11 - brightnessLift * 0.04}), transparent 52%)`}
      />

      <SoftGradient lighter />

      <div style={{position: 'absolute', left: 116, bottom: 122, width: 1080}}>
        <TechnicalLine delay={3} width={64} />
        <div
          style={{
            marginTop: 16,
            fontFamily: 'Inter',
            fontSize: 20,
            fontWeight: 650,
            letterSpacing: 4.2,
            color: '#f5f8ff',
            opacity: questionOpacity,
            transform: `translateY(${y}px)`,
          }}
        >
          HOW DO WE
        </div>
        <div
          style={{
            marginTop: 6,
            fontFamily: 'Space Grotesk',
            fontSize: 82,
            lineHeight: 0.98,
            fontWeight: 660,
            letterSpacing: -2.1,
            color: '#f5f8ff',
            opacity: questionOpacity,
            transform: `translateY(${y}px)`,
            textShadow: '0 3px 24px rgba(0,0,0,.2)',
          }}
        >
          MAKE STEM ACCESSIBLE
          <br />
          TO ALL?
        </div>

        <div
          style={{
            marginTop: 20,
            fontFamily: 'Inter',
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 4.8,
            color: '#72e4f5',
            opacity: solutionOpacity,
            transform: `translateX(${solutionX}px)`,
          }}
        >
          OUR SOLUTION
        </div>
      </div>
    </AbsoluteFill>
  );
};
