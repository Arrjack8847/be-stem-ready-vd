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
  HOOK_TRIMS,
} from './hookConfig';

export {HOOK_DURATION} from './hookConfig';

const durationBetween = (start: number, end: number) => end - start;

const TechMarker: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [18, 24, 36, 43],
    [0, 0.38, 0.38, 0],
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
          right: 150,
          top: 188,
          width: 112,
          height: 66,
          borderTop: '1px solid rgba(114,228,245,.74)',
          borderRight: '1px solid rgba(114,228,245,.74)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 149,
          top: 269,
          fontFamily: 'Inter',
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: 2.1,
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
      name="01 · Technology impact · macro"
      from={HOOK_CUTS.techStart}
      durationInFrames={durationBetween(HOOK_CUTS.techStart, HOOK_CUTS.buildStart)}
    >
      <HookShot
        src={HOOK_SOURCES.tech}
        duration={durationBetween(HOOK_CUTS.techStart, HOOK_CUTS.buildStart)}
        trimBefore={HOOK_TRIMS.tech}
        speedCurve={{from: 1.18, to: 0.88}}
        scaleFrom={1.11}
        scaleTo={1.17}
        translateXFrom={-12}
        translateXTo={4}
        objectPosition="52% 54%"
        filter="contrast(1.16) saturate(.98) brightness(.89)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.21), rgba(3,10,22,.01) 60%, rgba(3,10,22,.06))"
      />
    </Sequence>

    <Sequence
      name="02 · Student building · close"
      from={HOOK_CUTS.buildStart}
      durationInFrames={durationBetween(HOOK_CUTS.buildStart, HOOK_CUTS.humanStart)}
    >
      <HookShot
        src={HOOK_SOURCES.build}
        duration={durationBetween(HOOK_CUTS.buildStart, HOOK_CUTS.humanStart)}
        trimBefore={HOOK_TRIMS.build}
        rotation={-90}
        scaleFrom={1.025}
        scaleTo={1.065}
        translateXFrom={8}
        translateXTo={-4}
        objectPosition="50% 50%"
        filter="contrast(1.08) saturate(1.00) brightness(.95)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.13), transparent 68%, rgba(3,10,22,.025))"
      />
    </Sequence>

    <Sequence
      name="03 · Human connection · face"
      from={HOOK_CUTS.humanStart}
      durationInFrames={durationBetween(HOOK_CUTS.humanStart, HOOK_CUTS.competitionStart)}
    >
      <HookShot
        src={HOOK_SOURCES.human}
        duration={durationBetween(HOOK_CUTS.humanStart, HOOK_CUTS.competitionStart)}
        trimBefore={HOOK_TRIMS.human}
        rotation={-90}
        scaleFrom={1.16}
        scaleTo={1.165}
        translateXFrom={-38}
        translateXTo={-34}
        filter="contrast(1.04) saturate(.98) brightness(.97)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.10), transparent 68%)"
      />
    </Sequence>

    <Sequence
      name="04 · Competition energy · wide"
      from={HOOK_CUTS.competitionStart}
      durationInFrames={durationBetween(HOOK_CUTS.competitionStart, HOOK_CUTS.achievementStart)}
    >
      <HookShot
        src={HOOK_SOURCES.competition}
        duration={durationBetween(HOOK_CUTS.competitionStart, HOOK_CUTS.achievementStart)}
        trimBefore={HOOK_TRIMS.competition}
        scaleFrom={1.02}
        scaleTo={1.05}
        translateXFrom={0}
        translateXTo={-5}
        filter="contrast(1.08) saturate(1.01) brightness(.96)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.11), transparent 72%)"
      />
    </Sequence>

    <Sequence
      name="05 · Achievement · emotional medium"
      from={HOOK_CUTS.achievementStart}
      durationInFrames={durationBetween(HOOK_CUTS.achievementStart, HOOK_CUTS.scaleStart)}
    >
      <HookShot
        src={HOOK_SOURCES.achievement}
        duration={durationBetween(HOOK_CUTS.achievementStart, HOOK_CUTS.scaleStart)}
        trimBefore={HOOK_TRIMS.achievement}
        playbackRate={1}
        scaleFrom={1.04}
        scaleTo={1.07}
        translateYFrom={3}
        translateYTo={-3}
        filter="contrast(1.07) saturate(1.035) brightness(.98) sepia(.025)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.11), transparent 70%)"
      />
    </Sequence>

    <Sequence
      name="06 · Scale reveal · extreme wide"
      from={HOOK_CUTS.scaleStart}
      durationInFrames={durationBetween(HOOK_CUTS.scaleStart, HOOK_CUTS.heroStart)}
    >
      <HookShot
        src={HOOK_SOURCES.scale}
        duration={durationBetween(HOOK_CUTS.scaleStart, HOOK_CUTS.heroStart)}
        trimBefore={HOOK_TRIMS.scale}
        playbackRate={0.96}
        scaleFrom={1.0}
        scaleTo={1.012}
        filter="contrast(1.055) saturate(.98) brightness(.98)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.07), transparent 78%)"
      />
    </Sequence>

    <Sequence
      name="07 · Future technology · hero close"
      from={HOOK_CUTS.heroStart}
      durationInFrames={durationBetween(HOOK_CUTS.heroStart, HOOK_CUTS.brandStart)}
    >
      <HookShot
        src={HOOK_SOURCES.hero}
        duration={durationBetween(HOOK_CUTS.heroStart, HOOK_CUTS.brandStart)}
        trimBefore={HOOK_TRIMS.hero}
        speedCurve={{from: 1.07, to: 0.95}}
        scaleFrom={1.09}
        scaleTo={1.145}
        translateXFrom={8}
        translateXTo={-5}
        objectPosition="54% 54%"
        filter="contrast(1.14) saturate(1.03) brightness(.91)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.18), rgba(3,10,22,.01) 62%, rgba(3,10,22,.045))"
      />
      <TechMarker duration={durationBetween(HOOK_CUTS.heroStart, HOOK_CUTS.brandStart)} />
    </Sequence>

    <Sequence
      name="08 · Be STEM Ready · brand"
      from={HOOK_CUTS.brandStart}
      durationInFrames={durationBetween(HOOK_CUTS.brandStart, HOOK_CUTS.end)}
    >
      <HookShot
        src={HOOK_SOURCES.brand}
        duration={durationBetween(HOOK_CUTS.brandStart, HOOK_CUTS.end)}
        trimBefore={HOOK_TRIMS.brand}
        scaleFrom={1.018}
        scaleTo={1.025}
        objectPosition="50% 48%"
        filter="contrast(1.08) saturate(.99) brightness(.88)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.17), rgba(3,10,22,.015) 66%)"
      />
      <BrandReveal duration={durationBetween(HOOK_CUTS.brandStart, HOOK_CUTS.end)} />
    </Sequence>

    <AbsoluteFill
      style={{
        pointerEvents: 'none',
        background:
          'radial-gradient(circle at 50% 48%, transparent 53%, rgba(2,7,16,.09) 100%)',
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
