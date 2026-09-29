import React from 'react';
import {Audio} from '@remotion/media';
import {Sequence, staticFile} from 'remotion';
import {WHO_SCENES, WHO_SFX, WHO_TRANSITION_FRAMES} from './whoConfig';

export const WhoSoundDesign: React.FC = () => (
  <>
    <Sequence name="SFX · hook to identity" from={0} durationInFrames={18}>
      <Audio src={staticFile(WHO_SFX.entrance)} volume={0.045} />
    </Sequence>

    <Sequence
      name="SFX · technology texture"
      from={WHO_SCENES.handsOn.from + 2}
      durationInFrames={30}
    >
      <Audio src={staticFile(WHO_SFX.technology)} volume={0.028} />
    </Sequence>

    {[0, 60, 171].map((offset) => (
      <Sequence
        key={offset}
        name={`SFX · history year ${offset}`}
        from={WHO_SCENES.history.from + offset}
        durationInFrames={8}
      >
        <Audio src={staticFile(WHO_SFX.yearTick)} volume={0.03} />
      </Sequence>
    ))}

    <Sequence
      name="SFX · history becomes motion"
      from={WHO_SCENES.growth.from - WHO_TRANSITION_FRAMES}
      durationInFrames={18}
    >
      <Audio src={staticFile(WHO_SFX.photoRise)} volume={0.038} />
    </Sequence>

    {[0, 21, 42].map((offset) => (
      <Sequence
        key={offset}
        name={`SFX · purpose keyword ${offset}`}
        from={WHO_SCENES.purpose.from + offset}
        durationInFrames={8}
      >
        <Audio src={staticFile(WHO_SFX.keywordHit)} volume={0.03} />
      </Sequence>
    ))}
  </>
);
