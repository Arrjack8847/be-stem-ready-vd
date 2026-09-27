import React from 'react';
import {Audio} from '@remotion/media';
import {Sequence, staticFile} from 'remotion';
import {HOOK_CUTS, HOOK_SFX} from './hookConfig';

export const HookSoundDesign: React.FC = () => (
  <>
    <Sequence name="SFX · opening impact" from={0} durationInFrames={10}>
      <Audio src={staticFile(HOOK_SFX.impact)} volume={0.18} />
    </Sequence>

    <Sequence
      name="SFX · venue scale whoosh"
      from={HOOK_CUTS.venueStart - 5}
      durationInFrames={16}
    >
      <Audio src={staticFile(HOOK_SFX.scaleWhoosh)} volume={0.11} />
    </Sequence>

    <Sequence
      name="SFX · achievement hit"
      from={HOOK_CUTS.achievementStart}
      durationInFrames={10}
    >
      <Audio src={staticFile(HOOK_SFX.achievementHit)} volume={0.13} />
    </Sequence>
  </>
);
