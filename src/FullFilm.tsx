import React from 'react';
import {Audio} from '@remotion/media';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {ASSETS} from './assets';
import {
  ChallengeSection,
  CHALLENGE_DURATION,
} from './challenge/ChallengeSection';
import {challengeMusicVolumeLocal} from './challenge/ChallengeSoundDesign';
import {CinematicHook, HOOK_DURATION} from './hook/CinematicHook';
import {hookMusicVolume} from './hook/HookSoundDesign';
import {VIDEO, WhoIsBSRScene} from './WhoIsBSRScene';

export const CHALLENGE_GLOBAL_START = HOOK_DURATION + VIDEO.duration;
export const FULL_FILM_DURATION = CHALLENGE_GLOBAL_START + CHALLENGE_DURATION;

const masterMusicVolume = (frame: number) => {
  if (frame < HOOK_DURATION) {
    return hookMusicVolume(frame);
  }

  if (frame < CHALLENGE_GLOBAL_START) {
    return 0.76;
  }

  return challengeMusicVolumeLocal(frame - CHALLENGE_GLOBAL_START);
};

export const FullFilm: React.FC = () => (
  <AbsoluteFill style={{background: '#050c19'}}>
    <Sequence
      name="00:00–00:15 · Cinematic hook"
      from={0}
      durationInFrames={HOOK_DURATION}
    >
      <CinematicHook withMusic={false} />
    </Sequence>

    <Sequence
      name="00:15–00:36 · Who is Be STEM Ready?"
      from={HOOK_DURATION}
      durationInFrames={VIDEO.duration}
    >
      <WhoIsBSRScene
        withMusic={false}
        withSfx
        musicOffsetInFrames={HOOK_DURATION}
        musicVolume={0.76}
      />
    </Sequence>

    <Sequence
      name="00:36–00:54 · The Challenge"
      from={CHALLENGE_GLOBAL_START}
      durationInFrames={CHALLENGE_DURATION}
    >
      <ChallengeSection
        withMusic={false}
        withSfx
        musicOffsetInFrames={CHALLENGE_GLOBAL_START}
      />
    </Sequence>

    <Audio
      name="Master music · continuous"
      src={staticFile(ASSETS.music)}
      durationInFrames={FULL_FILM_DURATION}
      volume={masterMusicVolume}
    />
  </AbsoluteFill>
);
