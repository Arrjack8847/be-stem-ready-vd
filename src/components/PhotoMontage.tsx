import React from 'react';
import {AbsoluteFill, Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {CinematicImage, type Camera} from './CinematicImage';
import {TimelineYear} from './TimelineYear';

export type MontageShot = {
  from: number; duration: number; src: string; name: string; year: string;
  top: number; camera: Camera; progress: readonly [number, number];
  width?: number; left?: number; featherLeft?: boolean;
  transition: 'cut' | 'wipe-left' | 'wipe-right' | 'lift';
};

const SHOT_HANDLE = 8;

const WipedImage: React.FC<{shot: MontageShot; duration: number}> = ({shot, duration}) => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [0, SHOT_HANDLE], [0, 100], {easing: Easing.bezier(0.65, 0, 0.2, 1), extrapolateRight: 'clamp'});
  const clip = shot.transition === 'cut' ? undefined : shot.transition === 'wipe-left'
    ? `inset(0 ${100 - reveal}% 0 0)` : shot.transition === 'wipe-right'
      ? `inset(0 0 0 ${100 - reveal}%)` : `inset(${100 - reveal}% 0 0 0)`;
  return <AbsoluteFill style={{clipPath: clip, background: '#050c19'}}>
    <AbsoluteFill style={{filter: shot.transition === 'cut' ? undefined : `blur(${interpolate(frame, [0, SHOT_HANDLE], [7, 0], {extrapolateRight: 'clamp'})}px)`}}>
      <CinematicImage src={shot.src} name={shot.name} duration={duration} top={shot.top} width={shot.width} left={shot.left} camera={shot.camera} />
    </AbsoluteFill>
    {shot.featherLeft ? <AbsoluteFill style={{background: 'linear-gradient(90deg, #050c19 0%, #050c19 21%, rgba(5,12,25,.85) 27%, transparent 46%)'}} /> : null}
  </AbsoluteFill>;
};

export const PhotoMontage: React.FC<{shots: MontageShot[]; duration: number}> = ({shots, duration}) => <AbsoluteFill style={{background: '#050c19'}}>
  {shots.map((shot, index) => <Sequence key={shot.src} name={shot.name} from={shot.from} durationInFrames={Math.min(shot.duration + (index < shots.length - 1 ? SHOT_HANDLE : 0), duration - shot.from)}>
    <WipedImage shot={shot} duration={shot.duration + SHOT_HANDLE} />
  </Sequence>)}
  <AbsoluteFill style={{background: 'linear-gradient(0deg, rgba(2,9,22,.93) 0%, rgba(2,9,22,.56) 16%, transparent 43%)'}} />
  {shots.map((shot) => <Sequence key={shot.src} name={`${shot.year} / year marker`} from={shot.from} durationInFrames={shot.duration}>
    <TimelineYear year={shot.year} startProgress={shot.progress[0]} endProgress={shot.progress[1]} duration={shot.duration} />
  </Sequence>)}
</AbsoluteFill>;
