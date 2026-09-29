import React from 'react';
import {Easing,interpolate,useCurrentFrame} from 'remotion';
const clamp={extrapolateLeft:'clamp' as const,extrapolateRight:'clamp' as const};
const words=[{text:'INNOVATORS.',delay:0},{text:'CREATORS.',delay:21},{text:'PROBLEM-SOLVERS.',delay:42}] as const;
export const KeywordReveal:React.FC<{duration:number}>=({duration})=>{
 const frame=useCurrentFrame(),exit=interpolate(frame,[duration-9,duration-1],[1,0],clamp),exitX=interpolate(frame,[duration-9,duration-1],[0,16],clamp);
 return <div style={{position:'absolute',right:116,top:370,width:700,opacity:exit,transform:`translateX(${exitX}px)`}}>
  {words.map((word,index)=>{const opacity=interpolate(frame,[word.delay,word.delay+8],[0,1],clamp);const y=interpolate(frame,[word.delay,word.delay+13],[18,0],{...clamp,easing:Easing.bezier(.16,1,.3,1)});return <div key={word.text} style={{fontFamily:'Space Grotesk',fontSize:index===2?66:72,fontWeight:650,letterSpacing:-1.6,lineHeight:1.13,color:index===2?'#87e6f4':'#f5f8ff',opacity,transform:`translateY(${y}px)`,marginTop:index===0?0:10,textShadow:'0 3px 24px rgba(0,0,0,.22)'}}>{word.text}</div>})}
 </div>;
};
