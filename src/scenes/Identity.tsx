import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {ASSETS} from '../assets';
import {CinematicImage} from '../components/CinematicImage';
import {MaskedTitle} from '../components/MaskedTitle';

export const Identity: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{background: '#050c19'}}>
    <CinematicImage src={ASSETS.hero} name="Identity / original group photograph" duration={duration} top={-110} camera={{scale: [1.04, 1.09], x: [-12, 4], y: [0, -7]}} brightness={0.9} />
    <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(2,9,24,.72), rgba(2,9,24,.35) 29%, transparent 56%, rgba(2,9,24,.24))'}} />
    <AbsoluteFill style={{background: '#030711', opacity: interpolate(frame, [0, 25], [0.985, 0], {extrapolateRight: 'clamp'})}} />
    <div style={{position: 'absolute', left: 116, top: 106}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 22, marginBottom: 18}}>
        <div style={{height: 3, background: '#72e4f5', width: interpolate(frame, [21, 38], [0, 64], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
        <MaskedTitle name="WHO IS" delay={21} size={30} weight={500} tracking={6} font="Inter">WHO IS</MaskedTitle>
      </div>
      <MaskedTitle name="BE STEM READY / identity" delay={27} duration={18} size={137} tracking={-6}>BE STEM READY</MaskedTitle>
      <div style={{marginTop: 17}}>
        <MaskedTitle name="STEM / STEAM EDUCATION · MALAYSIA" delay={42} duration={14} size={30} weight={400} tracking={4} font="Inter" color="#c5d7e8">STEM / STEAM EDUCATION · MALAYSIA</MaskedTitle>
      </div>
    </div>
  </AbsoluteFill>;
};
