import React from 'react';
import {Audio} from '@remotion/media';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {ASSETS} from '../assets';
import {Fonts} from '../Fonts';
import {BrandReveal} from './BrandReveal';
import {HookShot} from './HookShot';
import {HOOK_CUTS, HOOK_DURATION, HOOK_SOURCES} from './hookConfig';

export {HOOK_DURATION} from './hookConfig';

const durationBetween = (start: number, end: number) => end - start;

const TechMarker: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [4, 12, duration - 10, duration - 1], [0, 0.52, 0.52, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{opacity, pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          right: 152,
          top: 188,
          width: 146,
          height: 92,
          borderTop: '1px solid rgba(114,228,245,.85)',
          borderRight: '1px solid rgba(114,228,245,.85)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 151,
          top: 294,
          fontFamily: 'Inter',
          fontSize: 15,
          letterSpacing: 2.6,
          color: '#72e4f5',
        }}
      >
        STEM / ROBOTICS
      </div>
    </AbsoluteFill>
  );
};

export const CinematicHook: React.FC<{withMusic?: boolean}> = ({withMusic = false}) => (
  <AbsoluteFill
    style={{
      background: '#050c19',
      color: '#f5f8ff',
      overflow: 'hidden',
      fontFamily: 'Space Grotesk',
    }}
  >
    <Fonts />

    <Sequence
      name="01 · Technology impact"
      from={HOOK_CUTS.techStart}
      durationInFrames={durationBetween(HOOK_CUTS.techStart, HOOK_CUTS.handsStart)}
    >
      <HookShot
        src={HOOK_SOURCES.tech}
        type="video"
        duration={durationBetween(HOOK_CUTS.techStart, HOOK_CUTS.handsStart)}
        trimBefore={353}
        ramp={{atFrame: 31, rateA: 1.2, rateB: 0.88}}
        scaleFrom={1.03}
        scaleTo={1.065}
        filter="contrast(1.10) saturate(1.03) brightness(.88)"
      />
    </Sequence>

    <Sequence
      name="02 · Hands / building"
      from={HOOK_CUTS.handsStart}
      durationInFrames={durationBetween(HOOK_CUTS.handsStart, HOOK_CUTS.humanStart)}
    >
      <HookShot
        src={HOOK_SOURCES.learning}
        type="image"
        duration={durationBetween(HOOK_CUTS.handsStart, HOOK_CUTS.humanStart)}
        scaleFrom={1.08}
        scaleTo={1.13}
        translateXFrom={-8}
        translateXTo={6}
        objectPosition="52% 62%"
        filter="contrast(1.08) saturate(1.04) brightness(.93)"
      />
    </Sequence>

    <Sequence
      name="03 · Human concentration"
      from={HOOK_CUTS.humanStart}
      durationInFrames={durationBetween(HOOK_CUTS.humanStart, HOOK_CUTS.competitionStart)}
    >
      <HookShot
        src={HOOK_SOURCES.learning}
        type="image"
        duration={durationBetween(HOOK_CUTS.humanStart, HOOK_CUTS.competitionStart)}
        scaleFrom={1.02}
        scaleTo={1.055}
        translateYFrom={4}
        translateYTo={-5}
        objectPosition="48% 34%"
        filter="contrast(1.05) saturate(1.00) brightness(.94)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.20), rgba(3,10,22,.03) 60%)"
      />
    </Sequence>

    <Sequence
      name="04 · Competition floor"
      from={HOOK_CUTS.competitionStart}
      durationInFrames={durationBetween(HOOK_CUTS.competitionStart, HOOK_CUTS.achievementStart)}
    >
      <HookShot
        src={HOOK_SOURCES.competition}
        type="video"
        duration={durationBetween(HOOK_CUTS.competitionStart, HOOK_CUTS.achievementStart)}
        playbackRate={1.04}
        scaleFrom={1.01}
        scaleTo={1.055}
        translateXFrom={-12}
        translateXTo={10}
        filter="contrast(1.09) saturate(1.05) brightness(.91)"
      />
    </Sequence>

    <Sequence
      name="05 · Achievement"
      from={HOOK_CUTS.achievementStart}
      durationInFrames={durationBetween(HOOK_CUTS.achievementStart, HOOK_CUTS.venueStart)}
    >
      <HookShot
        src={HOOK_SOURCES.achievement}
        type="video"
        duration={durationBetween(HOOK_CUTS.achievementStart, HOOK_CUTS.venueStart)}
        ramp={{atFrame: 31, rateA: 1.0, rateB: 0.78}}
        scaleFrom={1.015}
        scaleTo={1.055}
        filter="contrast(1.08) saturate(1.06) brightness(.94)"
      />
    </Sequence>

    <Sequence
      name="06 · Venue scale reveal"
      from={HOOK_CUTS.venueStart}
      durationInFrames={durationBetween(HOOK_CUTS.venueStart, HOOK_CUTS.heroTechStart)}
    >
      <HookShot
        src={HOOK_SOURCES.venue}
        type="video"
        duration={durationBetween(HOOK_CUTS.venueStart, HOOK_CUTS.heroTechStart)}
        playbackRate={0.92}
        scaleFrom={1}
        scaleTo={1.025}
        filter="contrast(1.12) saturate(1.06) brightness(.92)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.16), transparent 58%, rgba(3,10,22,.06))"
      />
    </Sequence>

    <Sequence
      name="07 · Technology hero"
      from={HOOK_CUTS.heroTechStart}
      durationInFrames={durationBetween(HOOK_CUTS.heroTechStart, HOOK_CUTS.brandStart)}
    >
      <HookShot
        src={HOOK_SOURCES.tech}
        type="video"
        duration={durationBetween(HOOK_CUTS.heroTechStart, HOOK_CUTS.brandStart)}
        trimBefore={390}
        ramp={{atFrame: 38, rateA: 1.12, rateB: 0.90}}
        scaleFrom={1.04}
        scaleTo={1.105}
        translateXFrom={6}
        translateXTo={-7}
        filter="contrast(1.12) saturate(1.02) brightness(.87)"
      />
      <TechMarker duration={durationBetween(HOOK_CUTS.heroTechStart, HOOK_CUTS.brandStart)} />
    </Sequence>

    <Sequence
      name="08 · Brand reveal"
      from={HOOK_CUTS.brandStart}
      durationInFrames={durationBetween(HOOK_CUTS.brandStart, HOOK_CUTS.end)}
    >
      <HookShot
        src={HOOK_SOURCES.group}
        type="image"
        duration={durationBetween(HOOK_CUTS.brandStart, HOOK_CUTS.end)}
        scaleFrom={1.025}
        scaleTo={1.055}
        objectPosition="50% 47%"
        filter="contrast(1.08) saturate(1.00) brightness(.82)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.26), rgba(3,10,22,.02) 62%)"
      />
      <BrandReveal duration={durationBetween(HOOK_CUTS.brandStart, HOOK_CUTS.end)} />
    </Sequence>

    <AbsoluteFill
      style={{
        pointerEvents: 'none',
        background:
          'radial-gradient(circle at 50% 48%, transparent 48%, rgba(2,7,16,.13) 100%)',
      }}
    />

    {withMusic ? (
      <Audio
        name="Music · hook 00:00–00:15"
        src={staticFile(ASSETS.music)}
        durationInFrames={HOOK_DURATION}
        volume={0.76}
      />
    ) : null}
  </AbsoluteFill>
);
