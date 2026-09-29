import React from 'react';
import {Video} from '@remotion/media';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {COLORS} from '../assets';
import {HOOK_CUTS, HOOK_SOURCES, HOOK_TRIMS} from './hookConfig';

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

const ScaleToFutureReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 7], [0, 1], clamp);
  const boundaryX = interpolate(progress, [0, 1], [-10, 1930], clamp);
  const trailOpacity = interpolate(progress, [0, 0.12, 0.82, 1], [0, 0.10, 0.08, 0], clamp);

  return (
    <AbsoluteFill style={{pointerEvents: 'none', overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          clipPath: `inset(0 ${Math.max(0, 100 - progress * 100)}% 0 0)`,
          overflow: 'hidden',
        }}
      >
        <AbsoluteFill
          style={{
            transform: 'translate3d(10px, 0, 0) scale(1.10)',
            transformOrigin: '50% 50%',
          }}
        >
          <Video
            src={staticFile(HOOK_SOURCES.hero)}
            trimBefore={Math.max(0, HOOK_TRIMS.hero - 7)}
            playbackRate={1.04}
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '58% 55%',
              filter: 'contrast(1.12) saturate(1.025) brightness(.96)',
            }}
          />
        </AbsoluteFill>
      </AbsoluteFill>

      <div
        style={{
          position: 'absolute',
          left: boundaryX,
          top: 0,
          width: 2,
          height: '100%',
          background: COLORS.cyan,
          opacity: interpolate(progress, [0, 0.08, 0.86, 1], [0, 0.82, 0.78, 0], clamp),
          boxShadow: '0 0 16px rgba(114,228,245,.16)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: boundaryX - 110,
          top: 0,
          width: 110,
          height: '100%',
          opacity: trailOpacity,
          background: 'linear-gradient(90deg, transparent, rgba(114,228,245,.52))',
        }}
      />
    </AbsoluteFill>
  );
};

export const HookTransitions: React.FC = () => {
  const frame = useCurrentFrame();

  const techBuild = pulse(
    frame,
    HOOK_CUTS.buildStart - 3,
    HOOK_CUTS.buildStart,
    HOOK_CUTS.buildStart + 3,
    1,
  );
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
      {/* TECHNOLOGY -> BUILD: almost invisible directional carry. */}
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

      {/* HUMAN -> COMPETITION: controlled energy pulse, never a white flash. */}
      <AbsoluteFill
        style={{
          opacity: competitionPulse,
          background:
            'radial-gradient(circle at 52% 48%, rgba(245,248,255,.26), rgba(114,228,245,.055) 34%, transparent 70%)',
        }}
      />

      {/* ACHIEVEMENT -> SCALE: expansion is carried mostly by sound; aerial stays clean. */}
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

      {/* FUTURE -> BRAND: one cyan line survives the graphic collapse and resolves toward the lockup. */}
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

      {/* SCALE -> FUTURE: the cyan line is the masking boundary that actually reveals the hero shot. */}
      <Sequence
        from={HOOK_CUTS.heroStart - 7}
        durationInFrames={8}
        name="Transition · Scale to Future line reveal"
      >
        <ScaleToFutureReveal />
      </Sequence>
    </AbsoluteFill>
  );
};
