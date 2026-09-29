import React from 'react';
import {AbsoluteFill,Sequence,interpolate,useCurrentFrame} from 'remotion';
import {KenBurnsPhoto} from './KenBurnsPhoto';
import {HistoryTimeline} from './HistoryTimeline';
import {WHO_SOURCES} from './whoConfig';
export const HistoryScene:React.FC<{duration:number}>=({duration})=>{
 const frame=useCurrentFrame(),chapterFade=interpolate(frame,[duration-6,duration-1],[1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <AbsoluteFill style={{background:'#050c19',opacity:chapterFade}}>
  <Sequence from={0} durationInFrames={76}><KenBurnsPhoto src={WHO_SOURCES.history2022} duration={76} scaleFrom={1.025} scaleTo={1.075} xFrom={-12} xTo={6} fadeOutFrames={8}/></Sequence>
  <Sequence from={68} durationInFrames={76}><KenBurnsPhoto src={WHO_SOURCES.history2023a} duration={76} scaleFrom={1.02} scaleTo={1.065} xFrom={7} xTo={-8} yFrom={2} yTo={-4} fadeInFrames={8} fadeOutFrames={8}/></Sequence>
  <Sequence from={136} durationInFrames={80}><KenBurnsPhoto src={WHO_SOURCES.history2023b} duration={80} scaleFrom={1.025} scaleTo={1.07} xFrom={-7} xTo={7} yFrom={3} yTo={-3} fadeInFrames={8}/></Sequence>
  <HistoryTimeline duration={duration}/>
 </AbsoluteFill>;
};
