import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';

export const TimelineYear: React.FC<{year: string; startProgress: number; endProgress: number; duration: number}> = ({year, startProgress, endProgress, duration}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [0, duration - 1], [startProgress, endProgress], {extrapolateRight: 'clamp'});
  return <div style={{position: 'absolute', left: 116, bottom: 103, color: '#f5f8ff'}}>
    <div style={{display: 'flex', alignItems: 'baseline', gap: 27, marginBottom: 20}}>
      <div style={{fontFamily: 'Space Grotesk', fontSize: 90, fontWeight: 400, letterSpacing: -4,
        opacity: interpolate(frame, [0, 5], [0.72, 1], {extrapolateRight: 'clamp'}),
        translate: `0px ${interpolate(frame, [0, 9], [8, 0], {easing: Easing.out(Easing.cubic), extrapolateRight: 'clamp'})}px`,
      }}>{year}</div>
      <div style={{fontFamily: 'Inter', fontSize: 20, fontWeight: 500, letterSpacing: 3, color: '#c5d7e8'}}>LEARNING IN ACTION</div>
    </div>
    <div style={{height: 1, width: 590, background: 'rgba(209,225,245,0.3)'}}>
      <div style={{height: 2, width: 590 * p, background: '#72e4f5'}} />
      <div style={{position: 'absolute', bottom: -3, left: 590 * p - 3, width: 7, height: 7, background: '#72e4f5'}} />
    </div>
  </div>;
};
