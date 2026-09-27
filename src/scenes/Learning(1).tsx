import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {ASSETS} from '../assets';
import {CinematicImage} from '../components/CinematicImage';
import {KineticWord} from '../components/KineticWord';

export const LearningPortrait: React.FC<{duration: number; reverse?: boolean}> = ({duration, reverse = false}) => <>
  <AbsoluteFill style={{background: '#050c19'}} />
  <CinematicImage src={ASSETS.learning} name="Trainer and student / hands-on robotics" ratio={1.5} width={1620} left={338} top={-10} duration={duration}
    camera={reverse ? {scale: [1.04, 1.065], x: [10, -8], y: [0, -4]} : {scale: [1.02, 1.055], x: [-4, 8], y: [0, 3]}} />
  <AbsoluteFill style={{background: 'linear-gradient(90deg, #050c19 0%, rgba(5,12,25,.98) 17%, rgba(5,12,25,.8) 26%, rgba(5,12,25,.32) 38%, transparent 54%), linear-gradient(0deg,rgba(2,9,22,.35),transparent 25%)'}} />
</>;

export const Learning: React.FC<{duration: number}> = ({duration}) => <AbsoluteFill>
  <LearningPortrait duration={duration} />
  <div style={{position: 'absolute', left: 116, top: 552, width: 730}}>
    <Sequence name="LEARN." from={0} durationInFrames={21} layout="none"><KineticWord word="LEARN." size={142} /></Sequence>
    <Sequence name="BUILD." from={21} durationInFrames={20} layout="none"><KineticWord word="BUILD." size={142} /></Sequence>
    <Sequence name="CREATE." from={41} durationInFrames={duration - 41} layout="none"><KineticWord word="CREATE." size={142} /></Sequence>
  </div>
  <svg width="1920" height="1080" style={{position: 'absolute', opacity: .2}}>
    <path d="M 117 847 H 450 L 475 822 H 510" stroke="#72e4f5" fill="none" strokeWidth="1" />
    <circle cx="510" cy="822" r="3" fill="#72e4f5" />
  </svg>
</AbsoluteFill>;
