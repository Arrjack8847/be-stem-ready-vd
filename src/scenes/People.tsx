import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {KineticWord} from '../components/KineticWord';
import {LearningPortrait} from './Learning';

export const People: React.FC<{duration: number}> = ({duration}) => <AbsoluteFill>
  <LearningPortrait duration={duration} reverse />
  <div style={{position: 'absolute', left: 116, top: 600, width: 850}}>
    <Sequence name="INNOVATORS." from={0} durationInFrames={25} layout="none"><KineticWord word="INNOVATORS." size={106} /></Sequence>
    <Sequence name="CREATORS." from={25} durationInFrames={24} layout="none"><KineticWord word="CREATORS." size={116} /></Sequence>
    <Sequence name="PROBLEM-SOLVERS." from={49} durationInFrames={duration - 49} layout="none"><KineticWord word={'PROBLEM-\nSOLVERS.'} size={106} /></Sequence>
  </div>
</AbsoluteFill>;
