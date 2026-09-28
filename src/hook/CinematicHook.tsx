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
import {HookSoundDesign} from './HookSoundDesign';
import {
  HOOK_CUTS,
  HOOK_DURATION,
  HOOK_SOURCES,
} from './hookConfig';

export {HOOK_DURATION} from './hookConfig';

const durationBetween = (start: number, end: number) => end - start;

const TechMarker: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [5, 13, duration - 10, duration - 1],
    [0, 0.42, 0.42, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    },
  );

  return (
    <AbsoluteFill style={{opacity, pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          right: 154,
          top: 194,
          width: 126,
          height: 76,
          borderTop: '1px solid rgba(114,228,245,.78)',
          borderRight: '1px solid rgba(114,228,245,.78)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 153,
          top: 283,
          fontFamily: 'Inter',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 2.4,
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
        type="image"
        duration={durationBetween(HOOK_CUTS.techStart, HOOK_CUTS.handsStart)}
        scaleFrom={1.04}
        scaleTo={1.09}
        translateXFrom={-10}
        translateXTo={4}
        objectPosition="50% 48%"
        filter="contrast(1.13) saturate(1.04) brightness(.91)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.22), rgba(3,10,22,.015) 58%, rgba(3,10,22,.07))"
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
        scaleFrom={1.115}
        scaleTo={1.16}
        translateXFrom={-7}
        translateXTo={4}
        objectPosition="52% 62%"
        filter="contrast(1.08) saturate(1.02) brightness(.95)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.18), rgba(3,10,22,.01) 64%, rgba(3,10,22,.05))"
      />
    </Sequence>

    <Sequence
      name="03 · Human concentration"
      from={HOOK_CUTS.humanStart}
      durationInFrames={durationBetween(HOOK_CUTS.humanStart, HOOK_CUTS.competitionStart)}
    >
      <HookShot
        src={HOOK_SOURCES.human}
        type="image"
        duration={durationBetween(HOOK_CUTS.humanStart, HOOK_CUTS.competitionStart)}
        scaleFrom={1.06}
        scaleTo={1.085}
        translateXFrom={18}
        translateXTo={4}
        objectPosition="48% 43%"
        filter="contrast(1.07) saturate(.99) brightness(.94)"
        overlay="linear-gradient(90deg, rgba(3,10,22,.03), transparent 50%, rgba(3,10,22,.09)), linear-gradient(0deg, rgba(3,10,22,.16), transparent 58%)"
      />
    </Sequence>

    <Sequence
      name="04 · Competition scale"
      from={HOOK_CUTS.competitionStart}
      durationInFrames={durationBetween(HOOK_CUTS.competitionStart, HOOK_CUTS.achievementStart)}
    >
      <HookShot
        src={HOOK_SOURCES.competition}
        type="image"
        duration={durationBetween(HOOK_CUTS.competitionStart, HOOK_CUTS.achievementStart)}
        scaleFrom={1.01}
        scaleTo={1.045}
        translateXFrom={8}
        translateXTo={-8}
        objectPosition="50% 48%"
        filter="contrast(1.10) saturate(1.02) brightness(.95)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.14), transparent 62%, rgba(3,10,22,.045))"
      />
    </Sequence>

    <Sequence
      name="05 · Achievement"
      from={HOOK_CUTS.achievementStart}
      durationInFrames={durationBetween(HOOK_CUTS.achievementStart, HOOK_CUTS.venueStart)}
    >
      <HookShot
        src={HOOK_SOURCES.achievement}
        type="image"
        duration={durationBetween(HOOK_CUTS.achievementStart, HOOK_CUTS.venueStart)}
        scaleFrom={1.02}
        scaleTo={1.06}
        translateYFrom={4}
        translateYTo={-5}
        objectPosition="51% 48%"
        filter="contrast(1.09) saturate(1.04) brightness(.94)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.16), transparent 64%, rgba(3,10,22,.035))"
      />
    </Sequence>

    <Sequence
      name="06 · Scale reveal"
      from={HOOK_CUTS.venueStart}
      durationInFrames={durationBetween(HOOK_CUTS.venueStart, HOOK_CUTS.heroTechStart)}
    >
      <HookShot
        src={HOOK_SOURCES.venue}
        type="image"
        duration={durationBetween(HOOK_CUTS.venueStart, HOOK_CUTS.heroTechStart)}
        scaleFrom={1.0}
        scaleTo={1.03}
        translateXFrom={-5}
        translateXTo={5}
        objectPosition="50% 50%"
        filter="contrast(1.11) saturate(1.025) brightness(.92)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.15), transparent 62%, rgba(3,10,22,.05))"
      />
    </Sequence>

    <Sequence
      name="07 · Technology hero"
      from={HOOK_CUTS.heroTechStart}
      durationInFrames={durationBetween(HOOK_CUTS.heroTechStart, HOOK_CUTS.brandStart)}
    >
      <HookShot
        src={HOOK_SOURCES.heroTech}
        type="image"
        duration={durationBetween(HOOK_CUTS.heroTechStart, HOOK_CUTS.brandStart)}
        scaleFrom={1.045}
        scaleTo={1.095}
        translateXFrom={5}
        translateXTo={-5}
        objectPosition="50% 48%"
        filter="contrast(1.16) saturate(1.055) brightness(.89)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.22), rgba(3,10,22,.015) 58%, rgba(3,10,22,.07))"
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
        scaleFrom={1.018}
        scaleTo={1.045}
        objectPosition="50% 47%"
        filter="contrast(1.08) saturate(1.00) brightness(.83)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.28), rgba(3,10,22,.02) 62%)"
      />
      <BrandReveal duration={durationBetween(HOOK_CUTS.brandStart, HOOK_CUTS.end)} />
    </Sequence>

    <AbsoluteFill
      style={{
        pointerEvents: 'none',
        background:
          'radial-gradient(circle at 50% 48%, transparent 50%, rgba(2,7,16,.11) 100%)',
      }}
    />

    <HookSoundDesign />

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
