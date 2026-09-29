import React from 'react';
import {AbsoluteFill} from 'remotion';
import {CinematicVideo} from './CinematicVideo';
import {WHO_SOURCES,WHO_TRIMS} from './whoConfig';
export const HumanScene:React.FC<{duration:number}>=({duration})=><AbsoluteFill style={{background:'#050c19'}}><CinematicVideo src={WHO_SOURCES.experience} duration={duration} trimBefore={WHO_TRIMS.experience} scaleFrom={1.005} scaleTo={1.018} xFrom={0} xTo={-2} filter="contrast(1.045) saturate(.98) brightness(1.01)" overlay="linear-gradient(0deg, rgba(3,10,22,.045), transparent 74%)"/></AbsoluteFill>;
