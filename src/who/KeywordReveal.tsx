import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const words = [
  {text: 'INNOVATORS.', delay: 0},
  {text: 'CREATORS.', delay: 21},
  {text: 'PROBLEM-SOLVERS.', delay: 42},
] as const;

export const KeywordReveal: React.FC<{duration: number; exitStart?: number}> = ({
  duration,
  exitStart = 71,
}) => {
  const frame = useCurrentFrame();
  const exit = interpolate(frame, [exitStart, duration - 2], [1, 0], clamp);
  const exitY = interpolate(frame, [exitStart, duration - 2], [0, -8], clamp);

  return (
    <div
      style={{
        position: 'absolute',
        left: 116,
        bottom: 116,
        width: 920,
        opacity: exit,
        transform: `translateY(${exitY}px)`,
      }}
    >
      {words.map((word, index) => {
        const opacity = interpolate(frame, [word.delay, word.delay + 8], [0, 1], clamp);
        const y = interpolate(frame, [word.delay, word.delay + 12], [12, 0], {
          ...clamp,
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        const tracking = interpolate(frame, [word.delay, word.delay + 12], [0.8, -1.1], clamp);

        return (
          <div
            key={word.text}
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: index === 2 ? 62 : 66,
              fontWeight: 650,
              letterSpacing: tracking,
              lineHeight: 1.08,
              color: index === 2 ? '#87e6f4' : '#f5f8ff',
              opacity,
              transform: `translateY(${y}px)`,
              marginTop: index === 0 ? 0 : 8,
              textShadow: '0 3px 22px rgba(0,0,0,.24)',
            }}
          >
            {word.text}
          </div>
        );
      })}
    </div>
  );
};
