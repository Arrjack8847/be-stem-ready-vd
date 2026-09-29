import React from 'react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {COLORS} from '../assets';

const clamp={extrapolateLeft:'clamp' as const,extrapolateRight:'clamp' as const};

const markers=[
  {year:'2022',x:420,start:0,end:68},
  {year:'2023',x:1140,start:68,end:999},
] as const;

export const HistoryTimeline:React.FC<{duration:number}>=({duration})=>{
 const frame=useCurrentFrame();
 const totalWidth=720;
 const progressWidth=interpolate(frame,[6,duration-12],[0,totalWidth],clamp);
 const nextOpacity=interpolate(frame,[duration-34,duration-12],[0,.62],clamp);

 return <AbsoluteFill style={{pointerEvents:'none'}}>
  <div style={{position:'absolute',left:420,bottom:106,width:totalWidth,height:1,background:'rgba(245,248,255,.26)'}}/>
  <div style={{position:'absolute',left:420,bottom:106,width:progressWidth,height:2,background:COLORS.cyan,opacity:.74}}/>

  {markers.map(m=>{
    const active=frame>=m.start&&frame<m.end;
    return <div key={m.year} style={{position:'absolute',left:m.x-6,bottom:97}}>
      <div style={{width:12,height:12,borderRadius:99,background:active?COLORS.cyan:'#f5f8ff',opacity:active?.95:.48,boxShadow:active?'0 0 14px rgba(114,228,245,.18)':'none'}}/>
      <div style={{position:'absolute',top:23,left:-22,width:60,textAlign:'center',fontFamily:'Inter',fontSize:15,fontWeight:600,letterSpacing:2.1,color:'#f5f8ff',opacity:active?.96:.52}}>{m.year}</div>
    </div>
  })}

  <div
    style={{
      position:'absolute',
      left:1550,
      bottom:83,
      fontFamily:'Inter',
      fontSize:13,
      fontWeight:600,
      letterSpacing:2.4,
      color:COLORS.cyan,
      opacity:nextOpacity,
    }}
  >
    NEXT / 2024
  </div>

  <div style={{position:'absolute',left:116,top:88,fontFamily:'Inter',fontSize:14,fontWeight:600,letterSpacing:4.4,color:'#f5f8ff',opacity:.64}}>OUR STORY / GROWTH</div>
 </AbsoluteFill>;
};
