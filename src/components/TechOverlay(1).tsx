import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const TechOverlay: React.FC<{quiet?: boolean}> = ({quiet = false}) => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{pointerEvents: 'none'}}>
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{position: 'absolute', opacity: quiet ? 0.055 : 0.075}}>
      <defs>
        <pattern id="tech-grid" width="120" height="120" patternUnits="userSpaceOnUse"><path d="M 120 0 H 0 V 120" fill="none" stroke="#a2d9ff" strokeWidth="1" /></pattern>
        <radialGradient id="grid-edge"><stop offset="55%" stopColor="black" /><stop offset="100%" stopColor="white" /></radialGradient>
        <mask id="grid-mask"><rect width="1920" height="1080" fill="url(#grid-edge)" /></mask>
      </defs>
      <rect width="1920" height="1080" fill="url(#tech-grid)" mask="url(#grid-mask)" />
    </svg>
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{position: 'absolute', opacity: quiet ? 0.13 : 0.24}}>
      <g fill="none" stroke="#72e4f5" strokeWidth="1.1">
        <path d="M 77 155 V 77 H 155 M 1765 77 H 1843 V 155 M 77 925 V 1003 H 155 M 1765 1003 H 1843 V 925" />
        <path d="M 1787 485 H 1803 M 1795 477 V 493" />
        <path d="M 117 956 H 271" opacity=".55" />
      </g>
      <circle r="2.8" cy="956" cx={interpolate(frame % 120, [0, 119], [117, 271])} fill="#72e4f5" opacity=".7" />
    </svg>
  </AbsoluteFill>;
};
