import React from 'react';
import {AbsoluteFill,Img,interpolate,staticFile,useCurrentFrame} from 'remotion';
const clamp={extrapolateLeft:'clamp' as const,extrapolateRight:'clamp' as const};
export const KenBurnsPhoto:React.FC<{src:string;duration:number;scaleFrom?:number;scaleTo?:number;xFrom?:number;xTo?:number;yFrom?:number;yTo?:number;objectPosition?:string;fadeInFrames?:number;fadeOutFrames?:number;}>=({src,duration,scaleFrom=1.02,scaleTo=1.07,xFrom=0,xTo=0,yFrom=0,yTo=0,objectPosition='50% 50%',fadeInFrames=0,fadeOutFrames=0})=>{
 const frame=useCurrentFrame(),last=Math.max(1,duration-1);
 const scale=interpolate(frame,[0,last],[scaleFrom,scaleTo],clamp),x=interpolate(frame,[0,last],[xFrom,xTo],clamp),y=interpolate(frame,[0,last],[yFrom,yTo],clamp);
 const a=fadeInFrames>0?interpolate(frame,[0,fadeInFrames],[0,1],clamp):1,b=fadeOutFrames>0?interpolate(frame,[last-fadeOutFrames,last],[1,0],clamp):1;
 return <AbsoluteFill style={{background:'#050c19',opacity:Math.min(a,b),overflow:'hidden'}}><AbsoluteFill style={{transform:`translate3d(${x}px,${y}px,0) scale(${scale})`,transformOrigin:'50% 50%'}}><Img src={staticFile(src)} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition,filter:'contrast(1.035) saturate(.96) brightness(.98)'}}/></AbsoluteFill><AbsoluteFill style={{background:'linear-gradient(0deg, rgba(3,10,22,.14), transparent 38%)'}}/></AbsoluteFill>;
};
