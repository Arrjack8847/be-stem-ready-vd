import React from 'react';
import {Video} from '@remotion/media';
import {AbsoluteFill, staticFile} from 'remotion';
import {ASSETS} from '../assets';
import {MaskedTitle} from '../components/MaskedTitle';

export const MOTION_TRIM = 353; // Source 00:11.767, active student/obstacle moment.
export const MOTION_SPEED = 1.1;

export const RealMotion: React.FC<{duration: number}> = ({duration}) => <AbsoluteFill style={{background: '#050c19'}}>
  <Video name="Real activity / original MOV, corrected orientation and SDR" src={staticFile(ASSETS.motion)} trimBefore={MOTION_TRIM} playbackRate={MOTION_SPEED} durationInFrames={duration} muted objectFit="cover"
    style={{width: 1920, height: 1080, filter: 'contrast(1.035) saturate(.84) brightness(.87)'}} />
  <AbsoluteFill style={{background: 'linear-gradient(0deg, rgba(3,10,22,.91), rgba(3,10,22,.32) 25%, transparent 44%)'}} />
  <div style={{position: 'absolute', left: 116, bottom: 112, width: 1670}}>
    <div style={{width: 58, height: 4, background: '#72e4f5', marginBottom: 23}} />
    <MaskedTitle name="HANDS-ON STEM EDUCATION" delay={8} size={83} tracking={-2.9} duration={14}>HANDS-ON STEM EDUCATION</MaskedTitle>
    <div style={{marginTop: 12}}><MaskedTitle name="Learning through exploration" delay={18} size={28} weight={400} tracking={.3} font="Inter" color="#ccdaea">Learning through exploration, creation and real-world challenges.</MaskedTitle></div>
  </div>
  <svg width="1920" height="1080" style={{position: 'absolute', opacity: .18}}>
    <path d="M 1690 378 H 1718 V 406 M 1718 434 V 462 H 1690" stroke="#72e4f5" fill="none" strokeWidth="1.4" />
  </svg>
</AbsoluteFill>;
