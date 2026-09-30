import React from 'react';
import {Video} from '@remotion/media';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

type ChallengeVideoProps = {
  src: string;
  duration: number;
  trimBefore: number;
  playbackRate?: number;
  scaleFrom?: number;
  scaleTo?: number;
  xFrom?: number;
  xTo?: number;
  yFrom?: number;
  yTo?: number;
  objectPosition?: string;
  filter?: string;
  overlay?: string;
  fadeInFrames?: number;
  fadeOutFrames?: number;
};

export const ChallengeVideo: React.FC<ChallengeVideoProps> = ({
  src,
  duration,
  trimBefore,
  playbackRate = 1,
  scaleFrom = 1,
  scaleTo = 1.02,
  xFrom = 0,
  xTo = 0,
  yFrom = 0,
  yTo = 0,
  objectPosition = '50% 50%',
  filter = 'contrast(1.055) saturate(.88) brightness(.88)',
  overlay = 'linear-gradient(90deg, rgba(3,10,22,.46), rgba(3,10,22,.04) 58%), linear-gradient(0deg, rgba(3,10,22,.15), transparent 44%)',
  fadeInFrames = 0,
  fadeOutFrames = 0,
}) => {
  const frame = useCurrentFrame();
  const last = Math.max(1, duration - 1);

  const scale = interpolate(frame, [0, last], [scaleFrom, scaleTo], {
    ...clamp,
    easing: Easing.inOut(Easing.sin),
  });
  const x = interpolate(frame, [0, last], [xFrom, xTo], {
    ...clamp,
    easing: Easing.inOut(Easing.sin),
  });
  const y = interpolate(frame, [0, last], [yFrom, yTo], {
    ...clamp,
    easing: Easing.inOut(Easing.sin),
  });

  const fadeIn =
    fadeInFrames > 0 ? interpolate(frame, [0, fadeInFrames], [0, 1], clamp) : 1;
  const fadeOut =
    fadeOutFrames > 0
      ? interpolate(frame, [last - fadeOutFrames, last], [1, 0], clamp)
      : 1;

  return (
    <AbsoluteFill
      style={{
        background: '#050c19',
        opacity: Math.min(fadeIn, fadeOut),
        overflow: 'hidden',
      }}
    >
      <AbsoluteFill
        style={{
          transform: `translate3d(${x}px,${y}px,0) scale(${scale})`,
          transformOrigin: '50% 50%',
        }}
      >
        <Video
          src={staticFile(src)}
          trimBefore={trimBefore}
          playbackRate={playbackRate}
          muted
          durationInFrames={duration}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition,
            filter,
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill style={{background: overlay, pointerEvents: 'none'}} />
    </AbsoluteFill>
  );
};
