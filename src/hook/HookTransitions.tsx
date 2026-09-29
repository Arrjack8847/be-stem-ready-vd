import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {COLORS} from '../assets';
import {HOOK_CUTS} from './hookConfig';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const pulse = (frame: number, start: number, peak: number, end: number, max: number) =>
  frame < start || frame > end
    ? 0
    : frame <= peak
      ? interpolate(frame, [start, peak], [0, max], clamp)
      : interpolate(frame, [peak, end], [max, 0], clamp);

export const HookTransitions: React.FC = () => {
  const frame = useCurrentFrame();

  const techBuild = pulse(frame, HOOK_CUTS.buildStart - 3, HOOK_CUTS.buildStart, HOOK_CUTS.buildStart + 3, 1);
  const techBuildX = interpolate(
    frame,
    [HOOK_CUTS.buildStart - 3, HOOK_CUTS.buildStart + 3],
    [-420, 1980],
    clamp,
  );

  const competitionPulse = pulse(
    frame,
    HOOK_CUTS.competitionStart - 1,
    HOOK_CUTS.competitionStart + 1,
    HOOK_CUTS.competitionStart + 4,
    0.12,
  );

  const expansion = pulse(
    frame,
    HOOK_CUTS.scaleStart - 5,
    HOOK_CUTS.scaleStart,
    HOOK_CUTS.scaleStart + 3,
    1,
  );
  const expansionWidth = interpolate(
    frame,
    [HOOK_CUTS.scaleStart - 5, HOOK_CUTS.scaleStart + 2],
    [180, 1760],
    clamp,
  );

  const futureWipe = pulse(
    frame,
    HOOK_CUTS.heroStart - 4,
    HOOK_CUTS.heroStart,
    HOOK_CUTS.heroStart + 6,
    1,
  );
  const wipeX = interpolate(
    frame,
    [HOOK_CUTS.heroStart - 4, HOOK_CUTS.heroStart + 6],
    [-80, 2000],
    clamp,
  );

  const collapseProgress = interpolate(
    frame,
    [HOOK_CUTS.brandStart - 12, HOOK_CUTS.brandStart + 5],
    [0, 1],
    clamp,
  );
  const collapseActive =
    frame >= HOOK_CUTS.brandStart - 12 && frame <= HOOK_CUTS.brandStart + 7;
  const bridgeOpacity = collapseActive
    ? Math.min(
        interpolate(collapseProgress, [0, 0.24], [0, 0.82], clamp),
        interpolate(collapseProgress, [0.72, 1], [0.82, 0], clamp),
      )
    : 0;
  const bridgeX = interpolate(collapseProgress, [0, 1], [920, 118], clamp);
  const bridgeY = interpolate(collapseProgress, [0, 1], [532, 838], clamp);
  const bridgeWidth = interpolate(collapseProgress, [0, 0.58, 1], [310, 112, 54], clamp);

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          left: techBuildX,
          top: 0,
          width: 320,
          height: '100%',
          opacity: techBuild * 0.12,
          background:
            'linear-gradient(90deg, transparent, rgba(245,248,255,.32), rgba(114,228,245,.18), transparent)',
          transform: 'skewX(-10deg)',
        }}
      />

      <AbsoluteFill
        style={{
          opacity: competitionPulse,
          background:
            'radial-gradient(circle at 52% 48%, rgba(245,248,255,.26), rgba(114,228,245,.055) 34%, transparent 70%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 960 - expansionWidth / 2,
          top: 538,
          width: expansionWidth,
          height: 3,
          opacity: expansion * 0.32,
          background: `linear-gradient(90deg, transparent, ${COLORS.cyan}, rgba(245,248,255,.7), ${COLORS.cyan}, transparent)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 960 - expansionWidth * 0.42,
          top: 550,
          width: expansionWidth * 0.84,
          height: 1,
          opacity: expansion * 0.18,
          background: COLORS.white,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: wipeX,
          top: 0,
          width: 3,
          height: '100%',
          opacity: futureWipe * 0.78,
          background: COLORS.cyan,
          boxShadow: '0 0 18px rgba(114,228,245,.18)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: wipeX - 130,
          top: 0,
          width: 132,
          height: '100%',
          opacity: futureWipe * 0.07,
          background: 'linear-gradient(90deg, transparent, rgba(114,228,245,.7))',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: bridgeX,
          top: bridgeY,
          width: bridgeWidth,
          height: 3,
          opacity: bridgeOpacity,
          background: COLORS.cyan,
          boxShadow: '0 0 16px rgba(114,228,245,.14)',
        }}
      />
    </AbsoluteFill>
  );
};
