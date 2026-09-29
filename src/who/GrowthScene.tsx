import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CinematicVideo} from './CinematicVideo';
import {WHO_SOURCES, WHO_TRANSITION_FRAMES, WHO_TRIMS} from './whoConfig';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const GrowthScene: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const labelOpacity = Math.min(
    interpolate(frame, [WHO_TRANSITION_FRAMES + 2, WHO_TRANSITION_FRAMES + 10], [0, 1], clamp),
    interpolate(frame, [WHO_TRANSITION_FRAMES + 34, WHO_TRANSITION_FRAMES + 48], [1, 0], clamp),
  );
  const labelY = interpolate(
    frame,
    [WHO_TRANSITION_FRAMES + 2, WHO_TRANSITION_FRAMES + 14],
    [10, 0],
    clamp,
  );

  return (
    <AbsoluteFill style={{background: '#050c19'}}>
      <CinematicVideo
        src={WHO_SOURCES.growth}
        duration={duration}
        trimBefore={WHO_TRIMS.growth}
        scaleFrom={1.008}
        scaleTo={1.024}
        xFrom={2}
        xTo={-2}
        filter="contrast(1.035) saturate(.99) brightness(1.015)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.10), transparent 58%)"
        fadeInFrames={WHO_TRANSITION_FRAMES}
      />
      <div
        style={{
          position: 'absolute',
          left: 116,
          top: 92,
          fontFamily: 'Space Grotesk',
          fontSize: 54,
          fontWeight: 650,
          letterSpacing: -1,
          color: '#f5f8ff',
          opacity: labelOpacity,
          transform: `translateY(${labelY}px)`,
        }}
      >
        2024
      </div>
    </AbsoluteFill>
  );
};
