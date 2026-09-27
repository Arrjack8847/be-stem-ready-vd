import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export const BrandReveal: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();

  const shade = interpolate(frame, [0, 12, duration - 1], [0.10, 0.42, 0.58], clamp);
  const opacity = interpolate(frame, [8, 18], [0, 1], clamp);
  const y = interpolate(frame, [8, 20], [18, 0], clamp);
  const subOpacity = interpolate(frame, [15, 27], [0, 1], clamp);

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          background: `linear-gradient(0deg, rgba(3,10,22,${shade}), rgba(3,10,22,.10) 62%, rgba(3,10,22,.06))`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 116,
          bottom: 114,
          color: '#f5f8ff',
          fontFamily: 'Space Grotesk',
          transform: `translateY(${y}px)`,
          opacity,
        }}
      >
        <div
          style={{
            width: 54,
            height: 4,
            background: '#72e4f5',
            marginBottom: 18,
          }}
        />
        <div
          style={{
            fontSize: 76,
            lineHeight: 0.98,
            fontWeight: 700,
            letterSpacing: -2.2,
          }}
        >
          BE STEM READY
        </div>
        <div
          style={{
            marginTop: 15,
            fontFamily: 'Inter',
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: 3.6,
            opacity: subOpacity,
          }}
        >
          BUILDING FUTURE-READY MINDS
        </div>
      </div>
    </AbsoluteFill>
  );
};
