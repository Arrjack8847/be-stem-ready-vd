import React from 'react';
import {Audio} from '@remotion/media';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {ASSETS} from './assets';
import {FilmFinish} from './components/FilmFinish';
import {Fonts} from './Fonts';
import {GrowthScene} from './who/GrowthScene';
import {HandsOnScene} from './who/HandsOnScene';
import {HistoryScene} from './who/HistoryScene';
import {HumanScene} from './who/HumanScene';
import {IdentityScene} from './who/IdentityScene';
import {PurposeScene} from './who/PurposeScene';
import {
  WHO_DURATION,
  WHO_SCENES,
  WHO_TRANSITION_FRAMES,
} from './who/whoConfig';
import {WhoSoundDesign} from './who/WhoSoundDesign';

export const SCENES = WHO_SCENES;
export const VIDEO = {
  width: 1920,
  height: 1080,
  fps: 30,
  duration: WHO_DURATION,
  globalStart: 450,
} as const;

export type WhoIsBSRProps = {
  withMusic: boolean;
  withSfx?: boolean;
  musicOffsetInFrames: number;
  musicVolume: number;
};

export const WhoIsBSRScene: React.FC<WhoIsBSRProps> = ({
  withMusic = true,
  withSfx = true,
  musicOffsetInFrames = 450,
  musicVolume = 0.76,
}) => (
  <AbsoluteFill
    style={{
      background: '#050c19',
      fontFamily: 'Space Grotesk',
      color: '#f5f8ff',
      overflow: 'hidden',
    }}
  >
    <Fonts />

    <Sequence
      name="00:15.00–00:17.70 · Identity"
      from={WHO_SCENES.identity.from}
      durationInFrames={WHO_SCENES.identity.duration}
    >
      <IdentityScene duration={WHO_SCENES.identity.duration} />
    </Sequence>

    <Sequence
      name="00:17.70–00:20.70 · Hands-on STEAM"
      from={WHO_SCENES.handsOn.from}
      durationInFrames={WHO_SCENES.handsOn.duration}
    >
      <HandsOnScene duration={WHO_SCENES.handsOn.duration} />
    </Sequence>

    <Sequence
      name="00:20.70–00:27.60 · History / 6f transition tail"
      from={WHO_SCENES.history.from}
      durationInFrames={WHO_SCENES.history.duration + WHO_TRANSITION_FRAMES}
    >
      <HistoryScene
        duration={WHO_SCENES.history.duration + WHO_TRANSITION_FRAMES}
      />
    </Sequence>

    <Sequence
      name="00:27.40–00:30.50 · History becomes motion"
      from={WHO_SCENES.growth.from}
      durationInFrames={WHO_SCENES.growth.duration}
    >
      <GrowthScene duration={WHO_SCENES.growth.duration} />
    </Sequence>

    <Sequence
      name="00:30.50–00:33.20 · Real students / real experience"
      from={WHO_SCENES.experience.from}
      durationInFrames={WHO_SCENES.experience.duration}
    >
      <HumanScene duration={WHO_SCENES.experience.duration} />
    </Sequence>

    <Sequence
      name="00:33.20–00:36.00 · Who they become / bridge to challenge"
      from={WHO_SCENES.purpose.from}
      durationInFrames={WHO_SCENES.purpose.duration}
    >
      <PurposeScene duration={WHO_SCENES.purpose.duration} />
    </Sequence>

    {withSfx ? <WhoSoundDesign /> : null}
    <FilmFinish />

    {withMusic ? (
      <Audio
        name="Music · global 00:15–00:36"
        src={staticFile(ASSETS.music)}
        trimBefore={musicOffsetInFrames}
        durationInFrames={VIDEO.duration}
        volume={musicVolume}
      />
    ) : null}
  </AbsoluteFill>
);
