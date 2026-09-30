import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {ChallengeVideo} from './ChallengeVideo';
import {CHALLENGE_SOURCES, CHALLENGE_TRIMS} from './challengeConfig';
import {MicroLabel, SoftGradient, SubtleGrid, TechnicalLine} from './ChallengeGraphics';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export const ChallengeIntro: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [2, 13], [0, 1], clamp);
  const y = interpolate(frame, [2, 15], [16, 0], clamp);
  const tracking = interpolate(frame, [2, 15], [4, -2.2], clamp);

  return (
    <AbsoluteFill style={{background: '#050c19'}}>
      <ChallengeVideo
        src={CHALLENGE_SOURCES.drone}
        duration={duration}
        trimBefore={CHALLENGE_TRIMS.intro}
        scaleFrom={1.01}
        scaleTo={1.035}
        xFrom={2}
        xTo={-4}
        objectPosition="50% 54%"
        filter="contrast(1.07) saturate(.82) brightness(.82)"
        overlay="linear-gradient(90deg, rgba(3,10,22,.66), rgba(3,10,22,.13) 53%, rgba(3,10,22,.07)), linear-gradient(0deg, rgba(3,10,22,.18), transparent 50%)"
      />

      <SoftGradient />
      <SubtleGrid />

      <div style={{position: 'absolute', left: 116, bottom: 124, width: 880}}>
        <TechnicalLine delay={4} width={58} />
        <div style={{marginTop: 15}}>
          <MicroLabel delay={4} opacity={0.74}>Access to quality STEM education</MicroLabel>
        </div>
        <div
          style={{
            marginTop: 13,
            fontFamily: 'Inter',
            fontSize: 24,
            fontWeight: 650,
            letterSpacing: 5.2,
            color: '#f5f8ff',
            opacity,
            transform: `translateY(${y}px)`,
          }}
        >
          THE
        </div>
        <div
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: 112,
            lineHeight: 0.9,
            fontWeight: 680,
            letterSpacing: tracking,
            color: '#f5f8ff',
            opacity,
            transform: `translateY(${y}px)`,
            textShadow: '0 4px 28px rgba(0,0,0,.24)',
          }}
        >
          CHALLENGE
        </div>
      </div>
    </AbsoluteFill>
  );
};
