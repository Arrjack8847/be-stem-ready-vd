import React from 'react';
import {AbsoluteFill} from 'remotion';
import {ASSETS} from '../assets';
import {CinematicImage} from '../components/CinematicImage';
import {MaskedTitle} from '../components/MaskedTitle';

export const Closing: React.FC<{duration: number}> = ({duration}) => <AbsoluteFill style={{background: '#050c19'}}>
  <CinematicImage src={ASSETS.hero} name="Closing / people and purpose" duration={duration} top={-85} camera={{scale: [1.035, 1.057], x: [2, -5], y: [0, -3]}} brightness={0.91} />
  <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(2,9,24,.88), rgba(2,9,24,.68) 25%, transparent 55%, rgba(2,9,24,.76))'}} />
  <div style={{position: 'absolute', left: 116, top: 105}}>
    <MaskedTitle name="STEM-READY TRAINERS." delay={1} duration={13} size={102} tracking={-4.4}>STEM-READY TRAINERS.</MaskedTitle>
    <div style={{marginTop: 8}}><MaskedTitle name="LIFE-READY STUDENTS." delay={13} duration={15} size={102} tracking={-4.4} color="#87e6f4">LIFE-READY STUDENTS.</MaskedTitle></div>
  </div>
  <div style={{position: 'absolute', left: 116, bottom: 119, display: 'flex', alignItems: 'center', gap: 23}}>
    <div style={{width: 58, height: 3, background: '#72e4f5'}} />
    <MaskedTitle name="BE STEM READY / signature" delay={34} size={31} tracking={4} weight={500}>BE STEM READY</MaskedTitle>
  </div>
</AbsoluteFill>;
