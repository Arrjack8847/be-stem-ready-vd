import React from 'react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CinematicVideo} from './CinematicVideo';
import {WHO_SOURCES,WHO_TRIMS} from './whoConfig';
const clamp={extrapolateLeft:'clamp' as const,extrapolateRight:'clamp' as const};
export const HandsOnScene:React.FC<{duration:number}>=({duration})=>{
 const frame=useCurrentFrame();
 const firstOpacity=Math.min(interpolate(frame,[6,15],[0,1],clamp),interpolate(frame,[36,45],[1,0],clamp));
 const secondOpacity=interpolate(frame,[45,54],[0,1],clamp);
 const markerOpacity=Math.min(interpolate(frame,[10,18],[0,.42],clamp),interpolate(frame,[68,80],[.42,0],clamp));
 const lineWidth=interpolate(frame,[12,23],[0,110],clamp);
 return <AbsoluteFill style={{background:'#050c19'}}>
  <CinematicVideo src={WHO_SOURCES.handsOn} duration={duration} trimBefore={WHO_TRIMS.handsOn} scaleFrom={1.015} scaleTo={1.045} xFrom={5} xTo={-4} objectPosition="52% 50%" filter="contrast(1.07) saturate(1.025) brightness(.99)" overlay="linear-gradient(0deg, rgba(3,10,22,.32), rgba(3,10,22,.02) 48%)"/>
  <div style={{position:'absolute',left:116,bottom:108,width:1100}}><div style={{fontFamily:'Space Grotesk',fontSize:62,fontWeight:650,letterSpacing:-1.3,color:'#f5f8ff',opacity:firstOpacity}}>HANDS-ON STEAM EDUCATION</div><div style={{position:'absolute',left:0,bottom:5,fontFamily:'Inter',fontSize:25,fontWeight:600,letterSpacing:3.1,color:'#f5f8ff',opacity:secondOpacity}}>CODING • ROBOTICS • DRONES</div></div>
  <div style={{position:'absolute',right:210,top:220,opacity:markerOpacity}}><div style={{width:lineWidth,height:1.5,background:'#72e4f5'}}/><div style={{position:'absolute',right:-3,top:-2,width:6,height:6,borderRadius:99,background:'#72e4f5'}}/></div>
 </AbsoluteFill>;
};
