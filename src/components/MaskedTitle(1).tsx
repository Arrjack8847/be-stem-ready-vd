import React from 'react';
import {Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

export const MaskedTitle: React.FC<{
  children: React.ReactNode;
  name: string;
  delay?: number;
  duration?: number;
  size?: number;
  weight?: number;
  color?: string;
  tracking?: number;
  font?: string;
  lineHeight?: number;
}> = ({children, name, delay = 0, duration = 14, size = 100, weight = 700,
  color = '#f5f8ff', tracking = -3, font = 'Space Grotesk', lineHeight = 1.09}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{overflow: 'hidden', paddingBottom: 9}}>
      <Interactive.Div name={name} style={{
        fontFamily: font, fontSize: size, fontWeight: weight, color,
        letterSpacing: tracking, lineHeight, whiteSpace: 'pre-line',
        translate: `0px ${interpolate(frame, [delay, delay + duration], [size * 0.92, 0], {easing: Easing.bezier(0.16, 1, 0.3, 1), extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}px`,
        opacity: interpolate(frame, [delay, delay + 6], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
      }}>{children}</Interactive.Div>
    </div>
  );
};
