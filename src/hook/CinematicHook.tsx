import React from 'react';
import {Audio} from '@remotion/media';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {ASSETS} from '../assets';
import {Fonts} from '../Fonts';
import {BrandReveal} from './BrandReveal';
import {
  AchievementOverlay,
  BuildOverlay,
  CompetitionOverlay,
  FutureOverlay,
  HumanOverlay,
  ScaleOverlay,
  TechOverlay,
} from './HookGraphics';
import {HookShot} from './HookShot';
import {HookSoundDesign, hookMusicVolume} from './HookSoundDesign';
import {HookTransitions} from './HookTransitions';
import {
  HOOK_CUTS,
  HOOK_DURATION,
  HOOK_SOURCES,
  HOOK_TRIMS,
} from './hookConfig';

export {HOOK_DURATION} from './hookConfig';

const durationBetween = (start: number, end: number) => end - start;

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
      durationInFrames={durationBetween(HOOK_CUTS.techStart, HOOK_CUTS.buildStart)}
    >
      <HookShot
        src={HOOK_SOURCES.tech}
        duration={durationBetween(HOOK_CUTS.techStart, HOOK_CUTS.buildStart)}
        trimBefore={HOOK_TRIMS.tech}
        playbackRate={1.08}
        scaleFrom={1.075}
        scaleTo={1.105}
        translateXFrom={-7}
        translateXTo={2}
        objectPosition="52% 54%"
        filter="contrast(1.13) saturate(.99) brightness(.95)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.11), transparent 72%)"
        exitMotionFrames={4}
        exitTranslateX={11}
        exitBlurPx={1.6}
        exitScaleBoost={0.006}
      />
      <TechOverlay duration={durationBetween(HOOK_CUTS.techStart, HOOK_CUTS.buildStart)} />
    </Sequence>

    <Sequence
      name="02 · Build / create"
      from={HOOK_CUTS.buildStart}
      durationInFrames={durationBetween(HOOK_CUTS.buildStart, HOOK_CUTS.humanStart)}
    >
      <HookShot
        src={HOOK_SOURCES.build}
        duration={durationBetween(HOOK_CUTS.buildStart, HOOK_CUTS.humanStart)}
        trimBefore={HOOK_TRIMS.build}
        rotation={-90}
        scaleFrom={1.025}
        scaleTo={1.06}
        translateXFrom={9}
        translateXTo={-3}
        objectPosition="50% 50%"
        filter="contrast(1.06) saturate(1.00) brightness(.99)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.055), transparent 76%)"
        entryMotionFrames={4}
        entryTranslateX={-10}
        entryBlurPx={1.25}
        entryScaleOffset={0.005}
      />
      <BuildOverlay duration={durationBetween(HOOK_CUTS.buildStart, HOOK_CUTS.humanStart)} />
    </Sequence>

    <Sequence
      name="03 · Human connection"
      from={HOOK_CUTS.humanStart}
      durationInFrames={durationBetween(HOOK_CUTS.humanStart, HOOK_CUTS.competitionStart)}
    >
      <HookShot
        src={HOOK_SOURCES.human}
        duration={durationBetween(HOOK_CUTS.humanStart, HOOK_CUTS.competitionStart)}
        trimBefore={HOOK_TRIMS.human}
        rotation={-90}
        playbackRate={1}
        scaleFrom={1.145}
        scaleTo={1.151}
        translateXFrom={-34}
        translateXTo={-32}
        filter="contrast(1.03) saturate(.99) brightness(1.01)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.04), transparent 78%)"
      />
      <HumanOverlay duration={durationBetween(HOOK_CUTS.humanStart, HOOK_CUTS.competitionStart)} />
    </Sequence>

    <Sequence
      name="04 · Competition energy"
      from={HOOK_CUTS.competitionStart}
      durationInFrames={durationBetween(HOOK_CUTS.competitionStart, HOOK_CUTS.achievementStart)}
    >
      <HookShot
        src={HOOK_SOURCES.competition}
        duration={durationBetween(HOOK_CUTS.competitionStart, HOOK_CUTS.achievementStart)}
        trimBefore={HOOK_TRIMS.competition}
        playbackRate={1.02}
        scaleFrom={1.002}
        scaleTo={1.018}
        translateXFrom={0}
        translateXTo={-3}
        filter="contrast(1.06) saturate(1.015) brightness(1.01)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.035), transparent 82%)"
      />
      <CompetitionOverlay duration={durationBetween(HOOK_CUTS.competitionStart, HOOK_CUTS.achievementStart)} />
    </Sequence>

    <Sequence
      name="05 · Achievement"
      from={HOOK_CUTS.achievementStart}
      durationInFrames={durationBetween(HOOK_CUTS.achievementStart, HOOK_CUTS.scaleStart)}
    >
      <HookShot
        src={HOOK_SOURCES.achievement}
        duration={durationBetween(HOOK_CUTS.achievementStart, HOOK_CUTS.scaleStart)}
        trimBefore={HOOK_TRIMS.achievement}
        playbackRate={1}
        scaleFrom={1.025}
        scaleTo={1.03}
        translateYFrom={2}
        translateYTo={-1}
        filter="contrast(1.055) saturate(1.025) brightness(1.01) sepia(.018)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.045), transparent 80%)"
        exitMotionFrames={6}
        exitTranslateX={9}
        exitBlurPx={1.9}
        exitScaleBoost={0.008}
      />
      <AchievementOverlay duration={durationBetween(HOOK_CUTS.achievementStart, HOOK_CUTS.scaleStart)} />
    </Sequence>

    <Sequence
      name="06 · Scale reveal"
      from={HOOK_CUTS.scaleStart}
      durationInFrames={durationBetween(HOOK_CUTS.scaleStart, HOOK_CUTS.heroStart)}
    >
      <HookShot
        src={HOOK_SOURCES.scale}
        duration={durationBetween(HOOK_CUTS.scaleStart, HOOK_CUTS.heroStart)}
        trimBefore={HOOK_TRIMS.scale}
        playbackRate={1}
        scaleFrom={1.0}
        scaleTo={1.003}
        filter="contrast(1.035) saturate(.99) brightness(1.01)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.02), transparent 88%)"
      />
      <ScaleOverlay duration={durationBetween(HOOK_CUTS.scaleStart, HOOK_CUTS.heroStart)} />
    </Sequence>

    <Sequence
      name="07 · Future technology hero"
      from={HOOK_CUTS.heroStart}
      durationInFrames={durationBetween(HOOK_CUTS.heroStart, HOOK_CUTS.brandStart)}
    >
      <HookShot
        src={HOOK_SOURCES.hero}
        duration={durationBetween(HOOK_CUTS.heroStart, HOOK_CUTS.brandStart)}
        trimBefore={HOOK_TRIMS.hero}
        playbackRate={1.04}
        scaleFrom={1.10}
        scaleTo={1.155}
        translateXFrom={10}
        translateXTo={-5}
        objectPosition="58% 55%"
        filter="contrast(1.12) saturate(1.025) brightness(.96)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.08), transparent 74%)"
      />
      <FutureOverlay duration={durationBetween(HOOK_CUTS.heroStart, HOOK_CUTS.brandStart)} />
    </Sequence>

    <Sequence
      name="08 · Be STEM Ready"
      from={HOOK_CUTS.brandStart}
      durationInFrames={durationBetween(HOOK_CUTS.brandStart, HOOK_CUTS.end)}
    >
      <HookShot
        src={HOOK_SOURCES.brand}
        duration={durationBetween(HOOK_CUTS.brandStart, HOOK_CUTS.end)}
        trimBefore={HOOK_TRIMS.brand}
        playbackRate={0.98}
        scaleFrom={1.018}
        scaleTo={1.02}
        objectPosition="50% 48%"
        filter="contrast(1.07) saturate(.99) brightness(.92)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.16), rgba(3,10,22,.015) 70%)"
      />
      <BrandReveal duration={durationBetween(HOOK_CUTS.brandStart, HOOK_CUTS.end)} />
    </Sequence>

    <AbsoluteFill
      style={{
        pointerEvents: 'none',
        background:
          'radial-gradient(circle at 50% 48%, transparent 58%, rgba(2,7,16,.055) 100%)',
      }}
    />

    <HookTransitions />
    <HookSoundDesign />

    {withMusic ? (
      <Audio
        name="Music · dynamic hook mix"
        src={staticFile(ASSETS.music)}
        durationInFrames={HOOK_DURATION}
        volume={hookMusicVolume}
      />
    ) : null}
  </AbsoluteFill>
);
