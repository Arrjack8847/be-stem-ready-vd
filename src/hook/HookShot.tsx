import React from 'react';
import {Video} from '@remotion/media';
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';

type Ramp = {
  atFrame: number;
  rateA: number;
  rateB: number;
};

type HookShotProps = {
  src: string;
  type: 'video' | 'image';
  duration: number;
  trimBefore?: number;
  playbackRate?: number;
  ramp?: Ramp;
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

export const HookShot: React.FC<HookShotProps> = ({
  src,
  type,
  duration,
  trimBefore = 0,
  playbackRate = 1,
  ramp,
  scaleFrom = 1,
  scaleTo = 1.04,
  translateXFrom = 0,
  translateXTo = 0,
  translateYFrom = 0,
  translateYTo = 0,
  objectPosition = '50% 50%',
  filter = 'contrast(1.06) saturate(1.04) brightness(.92)',
  overlay = 'linear-gradient(0deg, rgba(3,10,22,.30), rgba(3,10,22,.04) 55%, rgba(3,10,22,.12))',
}) => {
  const frame = useCurrentFrame();
  const lastFrame = Math.max(1, duration - 1);

  const scale = interpolate(frame, [0, lastFrame], [scaleFrom, scaleTo], clamp);
  const x = interpolate(frame, [0, lastFrame], [translateXFrom, translateXTo], clamp);
  const y = interpolate(frame, [0, lastFrame], [translateYFrom, translateYTo], clamp);

  const mediaStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition,
    filter,
  };

  const renderVideo = () => {
    if (!ramp) {
      return (
        <Video
          src={staticFile(src)}
          trimBefore={trimBefore}
          playbackRate={playbackRate}
          muted
          durationInFrames={duration}
          style={mediaStyle}
        />
      );
    }

    const firstDuration = Math.max(1, Math.min(duration - 1, ramp.atFrame));
    const secondDuration = Math.max(1, duration - firstDuration);
    const secondTrim = trimBefore + Math.round(firstDuration * ramp.rateA);

    return (
      <>
        <Sequence from={0} durationInFrames={firstDuration}>
          <Video
            src={staticFile(src)}
            trimBefore={trimBefore}
            playbackRate={ramp.rateA}
            muted
            durationInFrames={firstDuration}
            style={mediaStyle}
          />
        </Sequence>
        <Sequence from={firstDuration} durationInFrames={secondDuration}>
          <Video
            src={staticFile(src)}
            trimBefore={secondTrim}
            playbackRate={ramp.rateB}
            muted
            durationInFrames={secondDuration}
            style={mediaStyle}
          />
        </Sequence>
      </>
    );
  };

  return (
    <AbsoluteFill style={{background: '#050c19', overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
          transformOrigin: '50% 50%',
        }}
      >
        {type === 'video' ? (
          renderVideo()
        ) : (
          <Img src={staticFile(src)} style={mediaStyle} />
        )}
      </AbsoluteFill>
      <AbsoluteFill style={{background: overlay}} />
    </AbsoluteFill>
  );
};
