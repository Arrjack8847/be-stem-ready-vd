import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export const BrandReveal: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();

  // Brand begins settling immediately, finishes animating by ~13.65s,
  // and holds as a stable poster frame for the remainder of the hook.
  const shade = interpolate(frame, [0, 10, duration - 1], [0.12, 0.38, 0.46], clamp);
  const titleOpacity = interpolate(frame, [4, 18], [0, 1], clamp);
  const titleY = interpolate(frame, [4, 18], [18, 0], clamp);
  const tracking = interpolate(frame, [4, 18], [0.6, -1.6], clamp);
  const subOpacity = interpolate(frame, [13, 27], [0, 1], clamp);
  const accentOpacity = interpolate(frame, [5, 14], [0, 1], clamp);

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          background: `linear-gradient(0deg, rgba(3,10,22,${shade}), rgba(3,10,22,.14) 55%, rgba(3,10,22,.035))`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 116,
          bottom: 112,
          color: '#f5f8ff',
          fontFamily: 'Space Grotesk',
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            width: 54,
            height: 3,
            background: '#72e4f5',
            marginBottom: 18,
            opacity: accentOpacity,
          }}
        />

        <div
          style={{
            fontSize: 78,
            lineHeight: 0.98,
            fontWeight: 700,
            letterSpacing: tracking,
            textShadow: '0 2px 18px rgba(0,0,0,.20)',
          }}
        >
          BE STEM READY
        </div>

        <div
          style={{
            marginTop: 15,
            fontFamily: 'Inter',
            fontSize: 23,
            fontWeight: 500,
            letterSpacing: 3.0,
            opacity: subOpacity,
          }}
        >
          STEM EDUCATION CANNOT WAIT.
        </div>
      </div>
    </AbsoluteFill>
  );
};
