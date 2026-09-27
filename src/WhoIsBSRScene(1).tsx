import React from 'react';
import {Audio} from '@remotion/media';
import {TransitionSeries} from '@remotion/transitions';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {ASSETS} from './assets';
import {Fonts} from './Fonts';
import {TechOverlay} from './components/TechOverlay';
import {FilmFinish} from './components/FilmFinish';
import {ChapterTransition} from './components/ChapterTransition';
import {Identity} from './scenes/Identity';
import {Learning} from './scenes/Learning';
import {History} from './scenes/History';
import {RealMotion} from './scenes/RealMotion';
import {Growth} from './scenes/Growth';
import {People} from './scenes/People';
import {Closing} from './scenes/Closing';

// Section boundaries sit within one video frame of the soundtrack's main accents.
// This chapter occupies global frames 450–1079 (00:15–00:36).
export const SCENES = {
  identity: {from: 0, duration: 92},
  learning: {from: 92, duration: 60},
  history: {from: 152, duration: 90},
  motion: {from: 242, duration: 90},
  growth: {from: 332, duration: 150},
  people: {from: 482, duration: 75},
  closing: {from: 557, duration: 73},
} as const;

export const VIDEO = {width: 1920, height: 1080, fps: 30, duration: 630, globalStart: 450} as const;
const TRANSITION = {foreground: 12, gentle: 10} as const;
export type WhoIsBSRProps = {withMusic: boolean; musicOffsetInFrames: number; musicVolume: number};

export const WhoIsBSRScene: React.FC<WhoIsBSRProps> = ({withMusic = true, musicOffsetInFrames = 450, musicVolume = 0.76}) => <AbsoluteFill style={{background: '#050c19', fontFamily: 'Space Grotesk', color: '#f5f8ff', overflow: 'hidden'}}>
  <Fonts />
  <TransitionSeries>
    <TransitionSeries.Sequence durationInFrames={SCENES.identity.duration} name="A · Identity reveal"><Identity duration={SCENES.identity.duration} /></TransitionSeries.Sequence>
    <TransitionSeries.Sequence durationInFrames={SCENES.learning.duration} name="B · Learn. Build. Create."><Learning duration={SCENES.learning.duration} /></TransitionSeries.Sequence>
    <TransitionSeries.Sequence durationInFrames={SCENES.history.duration} name="C · Years of activity"><History duration={SCENES.history.duration} /></TransitionSeries.Sequence>
    <TransitionSeries.Sequence durationInFrames={SCENES.motion.duration} name="D · Real motion"><RealMotion duration={SCENES.motion.duration} /></TransitionSeries.Sequence>
    <TransitionSeries.Sequence durationInFrames={SCENES.growth.duration} name="E · Growth through time"><Growth duration={SCENES.growth.duration} /></TransitionSeries.Sequence>
    <TransitionSeries.Sequence durationInFrames={SCENES.people.duration} name="F · Who we develop"><People duration={SCENES.people.duration} /></TransitionSeries.Sequence>
    <TransitionSeries.Sequence durationInFrames={SCENES.closing.duration} name="G · Our purpose"><Closing duration={SCENES.closing.duration} /></TransitionSeries.Sequence>
  </TransitionSeries>
  <Sequence name="Foreground sweep / history" from={SCENES.history.from - TRANSITION.foreground / 2} durationInFrames={TRANSITION.foreground}><ChapterTransition duration={TRANSITION.foreground} /></Sequence>
  <Sequence name="Foreground sweep / growth" from={SCENES.growth.from - TRANSITION.foreground / 2} durationInFrames={TRANSITION.foreground}><ChapterTransition duration={TRANSITION.foreground} direction={-1} /></Sequence>
  <Sequence name="Soft foreground / closing" from={SCENES.closing.from - TRANSITION.gentle / 2} durationInFrames={TRANSITION.gentle}><ChapterTransition duration={TRANSITION.gentle} /></Sequence>
  <TechOverlay quiet />
  <FilmFinish />
  {withMusic ? <Audio name="Music · global 00:15–00:36" src={staticFile(ASSETS.music)} trimBefore={musicOffsetInFrames} durationInFrames={VIDEO.duration} volume={musicVolume} /> : null}
</AbsoluteFill>;
