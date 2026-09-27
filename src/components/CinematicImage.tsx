import React from 'react';
import {AbsoluteFill, CanvasImage, Easing, interpolate, staticFile, useCurrentFrame} from 'remotion';

export type Camera = {
  scale: readonly [number, number];
  x: readonly [number, number];
  y: readonly [number, number];
};

export type CinematicImageProps = {
  src: string;
  name: string;
  duration: number;
  // Explicit source ratio preserves the original photograph without stretching.
  ratio?: number;
  width?: number;
  left?: number;
  top?: number;
  camera?: Camera;
  brightness?: number;
};

const DEFAULT_CAMERA: Camera = {scale: [1.025, 1.065], x: [0, -14], y: [0, 6]};

export const CinematicImage: React.FC<CinematicImageProps> = ({
  src, name, duration, ratio = 4 / 3, width = 1920, left = 0, top = -165,
  camera = DEFAULT_CAMERA, brightness = 0.94,
}) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{overflow: 'hidden'}}>
      <div style={{
        position: 'absolute', width, height: width / ratio, left, top,
        scale: interpolate(frame, [0, duration - 1], [...camera.scale], {
          easing: Easing.inOut(Easing.sin), extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
        }),
        translate: `${interpolate(frame, [0, duration - 1], [...camera.x], {easing: Easing.inOut(Easing.sin), extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}px ${interpolate(frame, [0, duration - 1], [...camera.y], {easing: Easing.inOut(Easing.sin), extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}px`,
        filter: `contrast(1.055) saturate(0.92) brightness(${brightness})`,
      }}>
        <CanvasImage
          name={name}
          src={staticFile(src)}
          width={width}
          height={width / ratio}
          fit="contain"
          style={{width: '100%', height: '100%'}}
          from={-15}
        />
      </div>
    </AbsoluteFill>
  );
};
