import React from 'react';
import {Audio} from '@remotion/media';
import {Sequence,staticFile} from 'remotion';
import {WHO_SCENES,WHO_SFX} from './whoConfig';
export const WhoSoundDesign:React.FC=()=> <>
 <Sequence name="SFX · hook to identity" from={0} durationInFrames={18}><Audio src={staticFile(WHO_SFX.entrance)} volume={0.05}/></Sequence>
 <Sequence name="SFX · technology texture" from={WHO_SCENES.handsOn.from+3} durationInFrames={28}><Audio src={staticFile(WHO_SFX.technology)} volume={0.035}/></Sequence>
 {[0,70,180].map(offset=><Sequence key={offset} name={`SFX · history marker ${offset}`} from={WHO_SCENES.history.from+offset} durationInFrames={8}><Audio src={staticFile(WHO_SFX.yearTick)} volume={0.038}/></Sequence>)}
 <Sequence name="SFX · photo to live growth" from={WHO_SCENES.growth.from-9} durationInFrames={18}><Audio src={staticFile(WHO_SFX.photoRise)} volume={0.045}/></Sequence>
 {[0,21,42].map(offset=><Sequence key={offset} name={`SFX · keyword ${offset}`} from={WHO_SCENES.keywords.from+offset} durationInFrames={8}><Audio src={staticFile(WHO_SFX.keywordHit)} volume={0.036}/></Sequence>)}
</>;
