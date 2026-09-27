import React from 'react';
import {Composition} from 'remotion';
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
      defaultProps={{withMusic: true, musicOffsetInFrames: 450, musicVolume: 0.76}}
    />

    <Composition
      id="WhoIsBSR-PictureOnly"
      component={WhoIsBSRScene}
      durationInFrames={630}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{withMusic: false, musicOffsetInFrames: 450, musicVolume: 0.76}}
    />
  </>
);
