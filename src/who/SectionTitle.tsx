import React from 'react';
import {Easing,interpolate,useCurrentFrame} from 'remotion';
const clamp={extrapolateLeft:'clamp' as const,extrapolateRight:'clamp' as const};
export const SectionTitle:React.FC<{children:React.ReactNode;delay?:number;duration?:number;size?:number;trackingFrom?:number;trackingTo?:number;color?:string;font?:string;weight?:number;}>=({children,delay=0,duration=12,size=64,trackingFrom=2.5,trackingTo=-1.2,color='#f5f8ff',font='Space Grotesk',weight=650})=>{
 const frame=useCurrentFrame();
 const opacity=interpolate(frame,[delay,delay+7],[0,1],clamp);
 const y=interpolate(frame,[delay,delay+duration],[16,0],{...clamp,easing:Easing.bezier(.16,1,.3,1)});
 const tracking=interpolate(frame,[delay,delay+duration],[trackingFrom,trackingTo],clamp);
 return <div style={{fontFamily:font,fontSize:size,fontWeight:weight,lineHeight:1.04,letterSpacing:tracking,color,opacity,transform:`translateY(${y}px)`}}>{children}</div>;
};
