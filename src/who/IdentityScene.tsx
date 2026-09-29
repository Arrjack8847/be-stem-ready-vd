import React from 'react';
import {AbsoluteFill} from 'remotion';
import {CinematicVideo} from './CinematicVideo';
import {SectionTitle} from './SectionTitle';
import {WHO_SOURCES,WHO_TRIMS} from './whoConfig';
export const IdentityScene:React.FC<{duration:number}>=({duration})=><AbsoluteFill style={{background:'#050c19'}}>
 <CinematicVideo src={WHO_SOURCES.identity} duration={duration} trimBefore={WHO_TRIMS.identity} scaleFrom={1.01} scaleTo={1.04} xFrom={-4} xTo={3} filter="contrast(1.045) saturate(.96) brightness(.99)" overlay="linear-gradient(90deg, rgba(3,10,22,.50), rgba(3,10,22,.12) 44%, transparent 68%), linear-gradient(0deg, rgba(3,10,22,.08), transparent 45%)"/>
 <div style={{position:'absolute',left:116,bottom:118,width:960}}><div style={{width:52,height:3,background:'#72e4f5',marginBottom:18,opacity:.86}}/><SectionTitle size={66} trackingFrom={2.8} trackingTo={-1.3}>WHO IS BE STEM READY?</SectionTitle></div>
 </AbsoluteFill>;
