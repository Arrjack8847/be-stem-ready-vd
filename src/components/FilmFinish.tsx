import React from 'react';
import {AbsoluteFill} from 'remotion';

export const FilmFinish: React.FC = () => <AbsoluteFill style={{pointerEvents: 'none'}}>
  <AbsoluteFill style={{background: 'radial-gradient(ellipse at 53% 48%, transparent 40%, rgba(2,9,24,0.26) 100%)'}} />
  <svg width="100%" height="100%" style={{opacity: 0.025, mixBlendMode: 'soft-light'}}>
    <filter id="film-grain"><feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="2" seed="19" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#film-grain)" />
  </svg>
</AbsoluteFill>;
