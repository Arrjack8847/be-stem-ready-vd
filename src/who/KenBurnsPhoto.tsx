import React from 'react';
import {
  AbsoluteFill,
  CanvasImage,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

type KenBurnsPhotoProps = {
  src: string;
  duration: number;
  scaleFrom?: number;
  scaleTo?: number;
  xFrom?: number;
  xTo?: number;
  yFrom?: number;
  yTo?: number;
  objectPosition?: string;
  fadeInFrames?: number;
  fadeOutFrames?: number;
};

export const KenBurnsPhoto: React.FC<KenBurnsPhotoProps> = ({
  src,
  duration,
  scaleFrom = 1.02,
  scaleTo = 1.07,
  xFrom = 0,
  xTo = 0,
  yFrom = 0,
  yTo = 0,
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
    fadeInFrames > 0
      ? interpolate(frame, [0, fadeInFrames], [0, 1], clamp)
      : 1;
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
        <CanvasImage
          name={`History / ${src}`}
          src={`${staticFile(src)}?history-v=2`}
          width={1920}
          height={1080}
          fit="cover"
          style={{
            width: '100%',
            height: '100%',
            filter: 'contrast(1.035) saturate(.96) brightness(.98)',
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          background:
            'linear-gradient(0deg, rgba(3,10,22,.14), transparent 38%)',
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};
