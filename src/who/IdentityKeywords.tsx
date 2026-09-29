import React from 'react';
import {AbsoluteFill} from 'remotion';
import {CinematicVideo} from './CinematicVideo';
import {KeywordReveal} from './KeywordReveal';
import {WHO_SOURCES,WHO_TRIMS} from './whoConfig';
export const IdentityKeywords:React.FC<{duration:number}>=({duration})=><AbsoluteFill style={{background:'#050c19'}}>
 <CinematicVideo src={WHO_SOURCES.finalHuman} duration={duration} trimBefore={WHO_TRIMS.finalHuman} scaleFrom={1.025} scaleTo={1.04} xFrom={-4} xTo={2} objectPosition="42% 50%" filter="contrast(1.05) saturate(1.01) brightness(1.0)" overlay="linear-gradient(90deg, transparent 36%, rgba(3,10,22,.12) 53%, rgba(3,10,22,.72) 100%)"/>
 <KeywordReveal duration={duration}/>
</AbsoluteFill>;
