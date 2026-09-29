import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export const BrandReveal: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();

  // Settle quickly, then stop. The final ~1.3 seconds remain a true poster hold.
  const shade = interpolate(frame, [0, 10], [0.12, 0.44], clamp);
  const titleOpacity = interpolate(frame, [4, 14], [0, 1], clamp);
  const titleY = interpolate(frame, [4, 18], [22, 0], clamp);
  const titleMask = interpolate(frame, [4, 18], [100, 0], clamp);
  const tracking = interpolate(frame, [4, 18], [4.5, -1.0], clamp);
  const subOpacity = interpolate(frame, [13, 27], [0, 1], clamp);
  const subY = interpolate(frame, [13, 27], [9, 0], clamp);
  const accentWidth = interpolate(frame, [5, 14], [0, 54], clamp);
  const accentOpacity = interpolate(frame, [5, 10], [0, 1], clamp);

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
        }}
      >
        <div
          style={{
            width: accentWidth,
            height: 3,
            background: '#72e4f5',
            marginBottom: 18,
            opacity: accentOpacity,
            boxShadow: '0 0 12px rgba(114,228,245,.12)',
          }}
        />

        <div style={{overflow: 'hidden'}}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 0.98,
              fontWeight: 700,
              letterSpacing: tracking,
              textShadow: '0 2px 18px rgba(0,0,0,.20)',
              transform: `translateY(${titleY}px)`,
              opacity: titleOpacity,
              clipPath: `inset(${titleMask}% 0 0 0)`,
            }}
          >
            BE STEM READY
          </div>
        </div>

        <div
          style={{
            marginTop: 15,
            fontFamily: 'Inter',
            fontSize: 23,
            fontWeight: 500,
            letterSpacing: 3.0,
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
          }}
        >
          STEM EDUCATION CANNOT WAIT.
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: 68,
          bottom: 54,
          fontFamily: 'Inter',
          fontSize: 10,
          letterSpacing: 3,
          color: '#f5f8ff',
          opacity: interpolate(frame, [16, 27], [0, 0.34], clamp),
        }}
      >
        STEM / EDUCATION / FUTURE
      </div>
    </AbsoluteFill>
  );
};
