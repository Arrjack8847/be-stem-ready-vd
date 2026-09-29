import React from 'react';
import {Audio} from '@remotion/media';
import {Sequence, staticFile} from 'remotion';
import {HOOK_CUTS, HOOK_SFX, HOOK_SOURCES, HOOK_TRIMS} from './hookConfig';

export const HookSoundDesign: React.FC = () => (
  <>
    <Sequence name="SFX · opening impact" from={0} durationInFrames={10}>
      <Audio src={staticFile(HOOK_SFX.impact)} volume={0.16} />
    </Sequence>

    <Sequence
      name="Natural ambience · competition floor"
      from={HOOK_CUTS.competitionStart}
      durationInFrames={HOOK_CUTS.achievementStart - HOOK_CUTS.competitionStart}
    >
      <Audio
        src={staticFile(HOOK_SOURCES.competition)}
        trimBefore={HOOK_TRIMS.competition}
        volume={0.035}
      />
    </Sequence>

    <Sequence
      name="Natural ambience · achievement"
      from={HOOK_CUTS.achievementStart}
      durationInFrames={HOOK_CUTS.scaleStart - HOOK_CUTS.achievementStart}
    >
      <Audio
        src={staticFile(HOOK_SOURCES.achievement)}
        trimBefore={HOOK_TRIMS.achievement}
        volume={0.04}
      />
    </Sequence>

    <Sequence
      name="SFX · achievement hit"
      from={HOOK_CUTS.achievementStart + 4}
      durationInFrames={10}
    >
      <Audio src={staticFile(HOOK_SFX.achievementHit)} volume={0.10} />
    </Sequence>

    <Sequence
      name="SFX · scale reveal"
      from={HOOK_CUTS.scaleStart - 5}
      durationInFrames={16}
    >
      <Audio src={staticFile(HOOK_SFX.scaleWhoosh)} volume={0.085} />
    </Sequence>
  </>
);
