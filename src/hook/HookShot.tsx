import React from 'react';
import {Video} from '@remotion/media';
import {
  AbsoluteFill,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';

type HookShotProps = {
  src: string;
  duration: number;
  trimBefore?: number;
  playbackRate?: number;
  rotation?: 0 | 90 | -90;
  scaleFrom?: number;
  scaleTo?: number;
  translateXFrom?: number;
  translateXTo?: number;
  translateYFrom?: number;
  translateYTo?: number;
  objectPosition?: string;
  filter?: string;
  overlay?: string;
  entryMotionFrames?: number;
  entryTranslateX?: number;
  entryBlurPx?: number;
  entryScaleOffset?: number;
  exitMotionFrames?: number;
  exitTranslateX?: number;
  exitBlurPx?: number;
  exitScaleBoost?: number;
};

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export const HookShot: React.FC<HookShotProps> = ({
  src,
  duration,
  trimBefore = 0,
  playbackRate = 1,
  rotation = 0,
  scaleFrom = 1,
  scaleTo = 1,
  translateXFrom = 0,
  translateXTo = 0,
  translateYFrom = 0,
  translateYTo = 0,
  objectPosition = '50% 50%',
  filter = 'contrast(1.05) saturate(1.01) brightness(.98)',
  overlay = 'linear-gradient(0deg, rgba(3,10,22,.07), transparent 70%)',
  entryMotionFrames = 0,
  entryTranslateX = 0,
  entryBlurPx = 0,
  entryScaleOffset = 0,
  exitMotionFrames = 0,
  exitTranslateX = 0,
  exitBlurPx = 0,
  exitScaleBoost = 0,
}) => {
  const frame = useCurrentFrame();
  const lastFrame = Math.max(1, duration - 1);

  const baseScale = interpolate(frame, [0, lastFrame], [scaleFrom, scaleTo], clamp);
  const baseX = interpolate(frame, [0, lastFrame], [translateXFrom, translateXTo], clamp);
  const y = interpolate(frame, [0, lastFrame], [translateYFrom, translateYTo], clamp);

  const entryWeight =
    entryMotionFrames > 0
      ? interpolate(frame, [0, entryMotionFrames], [1, 0], clamp)
      : 0;
  const exitWeight =
    exitMotionFrames > 0
      ? interpolate(
          frame,
          [Math.max(0, lastFrame - exitMotionFrames), lastFrame],
          [0, 1],
          clamp,
        )
      : 0;

  const scale =
    baseScale + entryScaleOffset * entryWeight + exitScaleBoost * exitWeight;
  const x =
    baseX + entryTranslateX * entryWeight + exitTranslateX * exitWeight;
  const motionBlur = entryBlurPx * entryWeight + exitBlurPx * exitWeight;
  const mediaFilter =
    motionBlur > 0.01 ? `${filter} blur(${motionBlur.toFixed(2)}px)` : filter;

  const mediaStyle: React.CSSProperties =
    rotation === 0
      ? {
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition,
          filter: mediaFilter,
        }
      : {
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 1080,
          height: 1920,
          objectFit: 'cover',
          objectPosition,
          filter: mediaFilter,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          transformOrigin: '50% 50%',
        };

  return (
    <AbsoluteFill style={{background: '#050c19', overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
          transformOrigin: '50% 50%',
          willChange: 'transform',
        }}
      >
        <Video
          src={staticFile(src)}
          trimBefore={trimBefore}
          playbackRate={playbackRate}
          muted
          durationInFrames={duration}
          style={mediaStyle}
        />
      </AbsoluteFill>

      <AbsoluteFill style={{background: overlay, pointerEvents: 'none'}} />
    </AbsoluteFill>
  );
};
