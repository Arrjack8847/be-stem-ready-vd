import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

type CinematicTextProps = {
  children: React.ReactNode;
  delay?: number;
  enterFrames?: number;
  size: number;
  weight?: number;
  color?: string;
  trackingFrom?: number;
  trackingTo?: number;
  yFrom?: number;
  fontFamily?: string;
  lineHeight?: number;
  style?: React.CSSProperties;
};

export const CinematicText: React.FC<CinematicTextProps> = ({
  children,
  delay = 0,
  enterFrames = 12,
  size,
  weight = 600,
  color = '#f5f8ff',
  trackingFrom = 2.4,
  trackingTo = 0,
  yFrom = 14,
  fontFamily = 'Space Grotesk',
  lineHeight = 1.04,
  style,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + Math.min(8, enterFrames)], [0, 1], clamp);
  const y = interpolate(frame, [delay, delay + enterFrames], [yFrom, 0], {
    ...clamp,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const tracking = interpolate(
    frame,
    [delay, delay + enterFrames],
    [trackingFrom, trackingTo],
    clamp,
  );

  return (
    <div
      style={{
        fontFamily,
        fontSize: size,
        fontWeight: weight,
        color,
        lineHeight,
        letterSpacing: tracking,
        opacity,
        transform: `translateY(${y}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
