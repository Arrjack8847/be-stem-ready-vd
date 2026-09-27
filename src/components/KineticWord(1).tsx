import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {MaskedTitle} from './MaskedTitle';

export const KineticWord: React.FC<{word: string; size?: number}> = ({word, size = 126}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return <div>
    <div style={{
      width: interpolate(spring({frame, fps, durationInFrames: 12, config: {damping: 200, overshootClamping: true}}), [0, 1], [0, 76]),
      height: 5, background: '#2075ff', marginBottom: 28,
    }} />
    <MaskedTitle name={word} duration={8} size={size} tracking={-4}>{word}</MaskedTitle>
  </div>;
};
