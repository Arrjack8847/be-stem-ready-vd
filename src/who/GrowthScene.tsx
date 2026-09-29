import React from 'react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {CinematicVideo} from './CinematicVideo';
import {WHO_SOURCES,WHO_TRIMS} from './whoConfig';
const clamp={extrapolateLeft:'clamp' as const,extrapolateRight:'clamp' as const};
export const GrowthScene:React.FC<{duration:number}>=({duration})=>{
 const frame=useCurrentFrame(),labelOpacity=Math.min(interpolate(frame,[4,12],[0,1],clamp),interpolate(frame,[34,48],[1,0],clamp));
 return <AbsoluteFill style={{background:'#050c19'}}><CinematicVideo src={WHO_SOURCES.growth} duration={duration} trimBefore={WHO_TRIMS.growth} scaleFrom={1.01} scaleTo={1.025} xFrom={2} xTo={-2} filter="contrast(1.05) saturate(.98) brightness(1.0)" overlay="linear-gradient(0deg, rgba(3,10,22,.10), transparent 62%)" fadeInFrames={6}/><div style={{position:'absolute',left:116,top:92,fontFamily:'Space Grotesk',fontSize:58,fontWeight:650,letterSpacing:-1.2,color:'#f5f8ff',opacity:labelOpacity}}>2024</div></AbsoluteFill>;
};
