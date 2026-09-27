import React from 'react';
import {Audio} from '@remotion/media';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {ASSETS} from './assets';
import {CinematicHook, HOOK_DURATION} from './hook/CinematicHook';
import {VIDEO, WhoIsBSRScene} from './WhoIsBSRScene';

export const FULL_FILM_DURATION = HOOK_DURATION + VIDEO.duration;

export const FullFilm: React.FC = () => (
  <AbsoluteFill style={{background: '#050c19'}}>
    <Sequence name="00:00–00:15 · Cinematic hook" from={0} durationInFrames={HOOK_DURATION}>
      <CinematicHook withMusic={false} />
    </Sequence>

    <Sequence
      name="00:15–00:36 · Who is Be STEM Ready?"
      from={HOOK_DURATION}
      durationInFrames={VIDEO.duration}
    >
      <WhoIsBSRScene withMusic={false} musicOffsetInFrames={HOOK_DURATION} musicVolume={0.76} />
    </Sequence>

    <Audio
      name="Master music · continuous"
      src={staticFile(ASSETS.music)}
      durationInFrames={FULL_FILM_DURATION}
      volume={0.76}
    />
  </AbsoluteFill>
);
