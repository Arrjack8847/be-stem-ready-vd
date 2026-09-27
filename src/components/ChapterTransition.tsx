import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

// A foreground smear across a hard cut; only used at selected chapter changes.
export const ChapterTransition: React.FC<{duration: number; direction?: 1 | -1}> = ({duration, direction = 1}) => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{pointerEvents: 'none', overflow: 'hidden'}}>
    <div style={{position: 'absolute', top: -80, bottom: -80, width: 800,
      left: interpolate(frame, [0, duration - 1], direction === 1 ? [-850, 2200] : [2150, -900], {easing: Easing.bezier(0.35, 0, 0.3, 1)}),
      rotate: '-10deg', filter: 'blur(34px)',
      background: 'linear-gradient(90deg, transparent 0%, rgba(2,9,24,.35) 20%, rgba(2,9,24,.93) 62%, rgba(84,178,219,.16) 80%, transparent)',
    }} />
  </AbsoluteFill>;
};
