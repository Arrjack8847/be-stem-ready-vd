import React from 'react';
import {Video} from '@remotion/media';
import {
  AbsoluteFill,
  OffthreadVideo,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';

type SpeedCurve = {
  from: number;
  to: number;
};

type HookShotProps = {
  src: string;
  duration: number;
  trimBefore?: number;
  playbackRate?: number;
  speedCurve?: SpeedCurve;
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
};

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const SpeedMappedVideo: React.FC<{
  src: string;
  trimBefore: number;
  duration: number;
  speedCurve: SpeedCurve;
  style: React.CSSProperties;
}> = ({src, trimBefore, duration, speedCurve, style}) => {
  const frame = useCurrentFrame();
  const lastFrame = Math.max(1, duration - 1);

  const speedAt = (f: number) =>
    interpolate(f, [0, lastFrame], [speedCurve.from, speedCurve.to], clamp);

  let sourceAdvance = 0;
  for (let i = 0; i < frame; i++) {
    sourceAdvance += speedAt(i);
  }

  const remappedFrame = trimBefore + sourceAdvance;

  return (
    <Sequence from={frame}>
      <OffthreadVideo
        src={`${staticFile(src)}#disable`}
        trimBefore={Math.round(remappedFrame)}
        playbackRate={speedAt(frame)}
        muted
        style={style}
      />
    </Sequence>
  );
};

export const HookShot: React.FC<HookShotProps> = ({
  src,
  duration,
  trimBefore = 0,
  playbackRate = 1,
  speedCurve,
  rotation = 0,
  scaleFrom = 1,
  scaleTo = 1,
  translateXFrom = 0,
  translateXTo = 0,
  translateYFrom = 0,
  translateYTo = 0,
  objectPosition = '50% 50%',
  filter = 'contrast(1.06) saturate(1.02) brightness(.94)',
  overlay = 'linear-gradient(0deg, rgba(3,10,22,.18), rgba(3,10,22,.015) 60%, rgba(3,10,22,.05))',
}) => {
  const frame = useCurrentFrame();
  const lastFrame = Math.max(1, duration - 1);

  const scale = interpolate(frame, [0, lastFrame], [scaleFrom, scaleTo], clamp);
  const x = interpolate(frame, [0, lastFrame], [translateXFrom, translateXTo], clamp);
  const y = interpolate(frame, [0, lastFrame], [translateYFrom, translateYTo], clamp);

  const mediaStyle: React.CSSProperties =
    rotation === 0
      ? {
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition,
          filter,
        }
      : {
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 1080,
          height: 1920,
          objectFit: 'cover',
          objectPosition,
          filter,
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
        {speedCurve ? (
          <SpeedMappedVideo
            src={src}
            trimBefore={trimBefore}
            duration={duration}
            speedCurve={speedCurve}
            style={mediaStyle}
          />
        ) : (
          <Video
            src={staticFile(src)}
            trimBefore={trimBefore}
            playbackRate={playbackRate}
            muted
            durationInFrames={duration}
            style={mediaStyle}
          />
        )}
      </AbsoluteFill>

      <AbsoluteFill style={{background: overlay, pointerEvents: 'none'}} />
    </AbsoluteFill>
  );
};
