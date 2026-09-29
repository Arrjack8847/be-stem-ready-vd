import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CinematicVideo} from './CinematicVideo';
import {KeywordReveal} from './KeywordReveal';
import {WHO_SOURCES, WHO_TRIMS} from './whoConfig';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const transitionStart = 71;

export const PurposeScene: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const tonalShift = interpolate(frame, [transitionStart, duration - 1], [0, 0.28], clamp);
  const lineWidth = interpolate(frame, [0, 10, transitionStart, duration - 1], [0, 74, 74, 0], clamp);
  const lineOpacity = interpolate(frame, [0, 8, transitionStart, duration - 1], [0, 0.72, 0.72, 0], clamp);

  return (
    <AbsoluteFill style={{background: '#050c19'}}>
      <CinematicVideo
        src={WHO_SOURCES.enjoyAI}
        duration={duration}
        trimBefore={WHO_TRIMS.purpose}
        scaleFrom={1.015}
        scaleTo={1.035}
        xFrom={-2}
        xTo={2}
        objectPosition="50% 50%"
        filter="contrast(1.035) saturate(1.015) brightness(1.01)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.58) 0%, rgba(3,10,22,.12) 42%, transparent 70%)"
      />

      <AbsoluteFill
        style={{
          background: `rgba(3,10,22,${tonalShift})`,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 116,
          bottom: 383,
          width: lineWidth,
          height: 2,
          background: '#72e4f5',
          opacity: lineOpacity,
        }}
      />

      <KeywordReveal duration={duration} exitStart={transitionStart} />
    </AbsoluteFill>
  );
};
