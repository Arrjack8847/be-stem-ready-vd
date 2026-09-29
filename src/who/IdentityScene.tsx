import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CinematicText} from './CinematicText';
import {CinematicVideo} from './CinematicVideo';
import {WHO_SOURCES, WHO_TRIMS} from './whoConfig';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const IdentityScene: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const accentWidth = interpolate(frame, [5, 17], [0, 54], clamp);
  const accentOpacity = interpolate(frame, [5, 13], [0, 0.9], clamp);

  return (
    <AbsoluteFill style={{background: '#050c19'}}>
      <CinematicVideo
        src={WHO_SOURCES.identity}
        duration={duration}
        trimBefore={WHO_TRIMS.identity}
        scaleFrom={1.01}
        scaleTo={1.035}
        xFrom={-3}
        xTo={2}
        objectPosition="50% 50%"
        filter="contrast(1.035) saturate(.99) brightness(1.01)"
        overlay="linear-gradient(90deg, rgba(3,10,22,.58) 0%, rgba(3,10,22,.24) 42%, rgba(3,10,22,.03) 70%), linear-gradient(0deg, rgba(3,10,22,.10), transparent 46%)"
      />

      <div style={{position: 'absolute', left: 116, bottom: 112, width: 980}}>
        <div
          style={{
            width: accentWidth,
            height: 2,
            background: '#72e4f5',
            opacity: accentOpacity,
            marginBottom: 18,
          }}
        />
        <CinematicText
          delay={4}
          enterFrames={11}
          size={22}
          weight={600}
          trackingFrom={5}
          trackingTo={3.2}
          yFrom={10}
          fontFamily="Inter"
          style={{marginBottom: 8}}
        >
          WHO IS
        </CinematicText>
        <CinematicText
          delay={7}
          enterFrames={13}
          size={70}
          weight={650}
          trackingFrom={1.8}
          trackingTo={-1.4}
          yFrom={14}
        >
          BE STEM READY?
        </CinematicText>
      </div>
    </AbsoluteFill>
  );
};
