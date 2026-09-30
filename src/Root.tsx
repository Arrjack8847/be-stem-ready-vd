import React from 'react';
import {Composition} from 'remotion';
import {
  ChallengeSection,
  CHALLENGE_DURATION,
} from './challenge/ChallengeSection';
import {FullFilm, FULL_FILM_DURATION} from './FullFilm';
import {CinematicHook, HOOK_DURATION} from './hook/CinematicHook';
import {WhoIsBSRScene} from './WhoIsBSRScene';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="FullFilm"
      component={FullFilm}
      durationInFrames={FULL_FILM_DURATION}
      fps={30}
      width={1920}
      height={1080}
    />

    <Composition
      id="CinematicHook"
      component={CinematicHook}
      durationInFrames={HOOK_DURATION}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{withMusic: true}}
    />

    <Composition
      id="WhoIsBSR"
      component={WhoIsBSRScene}
      durationInFrames={630}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        withMusic: true,
        withSfx: true,
        musicOffsetInFrames: 450,
        musicVolume: 0.76,
      }}
    />

    <Composition
      id="WhoIsBSR-PictureOnly"
      component={WhoIsBSRScene}
      durationInFrames={630}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        withMusic: false,
        withSfx: false,
        musicOffsetInFrames: 450,
        musicVolume: 0.76,
      }}
    />

    <Composition
      id="WhoIsBSR-MusicOnly"
      component={WhoIsBSRScene}
      durationInFrames={630}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        withMusic: true,
        withSfx: false,
        musicOffsetInFrames: 450,
        musicVolume: 0.76,
      }}
    />

    <Composition
      id="TheChallenge"
      component={ChallengeSection}
      durationInFrames={CHALLENGE_DURATION}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        withMusic: true,
        withSfx: true,
        musicOffsetInFrames: 1080,
      }}
    />

    <Composition
      id="TheChallenge-PictureOnly"
      component={ChallengeSection}
      durationInFrames={CHALLENGE_DURATION}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        withMusic: false,
        withSfx: false,
        musicOffsetInFrames: 1080,
      }}
    />

    <Composition
      id="TheChallenge-MusicOnly"
      component={ChallengeSection}
      durationInFrames={CHALLENGE_DURATION}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        withMusic: true,
        withSfx: false,
        musicOffsetInFrames: 1080,
      }}
    />
  </>
);
