import React from 'react';
import {Audio} from '@remotion/media';
import {AbsoluteFill,Sequence,staticFile} from 'remotion';
import {ASSETS} from './assets';
import {Fonts} from './Fonts';
import {FilmFinish} from './components/FilmFinish';
import {GrowthScene} from './who/GrowthScene';
import {HandsOnScene} from './who/HandsOnScene';
import {HistoryScene} from './who/HistoryScene';
import {HumanScene} from './who/HumanScene';
import {IdentityKeywords} from './who/IdentityKeywords';
import {IdentityScene} from './who/IdentityScene';
import {WHO_DURATION,WHO_SCENES} from './who/whoConfig';
import {WhoSoundDesign} from './who/WhoSoundDesign';

export const SCENES=WHO_SCENES;
export const VIDEO={width:1920,height:1080,fps:30,duration:WHO_DURATION,globalStart:450} as const;
export type WhoIsBSRProps={withMusic:boolean;musicOffsetInFrames:number;musicVolume:number};

export const WhoIsBSRScene:React.FC<WhoIsBSRProps>=({withMusic=true,musicOffsetInFrames=450,musicVolume=.76})=><AbsoluteFill style={{background:'#050c19',fontFamily:'Space Grotesk',color:'#f5f8ff',overflow:'hidden'}}>
 <Fonts/>
 <Sequence name="00:15–00:18 · Who is Be STEM Ready?" from={WHO_SCENES.identity.from} durationInFrames={WHO_SCENES.identity.duration}><IdentityScene duration={WHO_SCENES.identity.duration}/></Sequence>
 <Sequence name="00:18–00:21 · Hands-on STEAM" from={WHO_SCENES.handsOn.from} durationInFrames={WHO_SCENES.handsOn.duration}><HandsOnScene duration={WHO_SCENES.handsOn.duration}/></Sequence>
 <Sequence name="00:21–00:28 · History / growth" from={WHO_SCENES.history.from} durationInFrames={WHO_SCENES.history.duration}><HistoryScene duration={WHO_SCENES.history.duration}/></Sequence>
 <Sequence name="00:28–00:31 · 2024 growth in motion" from={WHO_SCENES.growth.from} durationInFrames={WHO_SCENES.growth.duration}><GrowthScene duration={WHO_SCENES.growth.duration}/></Sequence>
 <Sequence name="00:31–00:33.5 · Real STEM experience" from={WHO_SCENES.experience.from} durationInFrames={WHO_SCENES.experience.duration}><HumanScene duration={WHO_SCENES.experience.duration}/></Sequence>
 <Sequence name="00:33.5–00:36 · Human identity" from={WHO_SCENES.keywords.from} durationInFrames={WHO_SCENES.keywords.duration}><IdentityKeywords duration={WHO_SCENES.keywords.duration}/></Sequence>
 <WhoSoundDesign/>
 <FilmFinish/>
 {withMusic?<Audio name="Music · global 00:15–00:36" src={staticFile(ASSETS.music)} trimBefore={musicOffsetInFrames} durationInFrames={VIDEO.duration} volume={musicVolume}/>:null}
</AbsoluteFill>;
