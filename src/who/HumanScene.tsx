import React from 'react';
import {AbsoluteFill} from 'remotion';
import {CinematicVideo} from './CinematicVideo';
import {WHO_SOURCES, WHO_TRIMS} from './whoConfig';

export const HumanScene: React.FC<{duration: number}> = ({duration}) => (
  <AbsoluteFill style={{background: '#050c19'}}>
    <CinematicVideo
      src={WHO_SOURCES.enjoyAI}
      duration={duration}
      trimBefore={WHO_TRIMS.experience}
      scaleFrom={1.01}
      scaleTo={1.028}
      xFrom={2}
      xTo={-2}
      objectPosition="50% 50%"
      filter="contrast(1.035) saturate(1.01) brightness(1.01)"
      overlay="linear-gradient(0deg, rgba(3,10,22,.06), transparent 66%)"
    />
  </AbsoluteFill>
);
