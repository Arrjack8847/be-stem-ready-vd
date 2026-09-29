import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {CinematicText} from './CinematicText';
import {CinematicVideo} from './CinematicVideo';
import {WHO_SOURCES, WHO_TRIMS} from './whoConfig';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// @remotion/media resolves media time against the parent scene frame.
// For clips placed later inside this scene, subtract the internal Sequence start
// so the visible first frame still lands on the exact approved source action point.
const trimForInternalSequence = (sourceStartFrame: number, sequenceFrom: number) =>
  sourceStartFrame - sequenceFrom;

export const HandsOnScene: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const supportOpacity = interpolate(frame, [45, 53], [0, 1], clamp);
  const supportY = interpolate(frame, [45, 57], [10, 0], clamp);
  const primaryOpacity = interpolate(frame, [38, 48], [1, 0], clamp);
  const markerOpacity = Math.min(
    interpolate(frame, [8, 18], [0, 0.34], clamp),
    interpolate(frame, [68, 84], [0.34, 0], clamp),
  );
  const markerWidth = interpolate(frame, [10, 24], [0, 86], clamp);

  return (
    <AbsoluteFill style={{background: '#050c19'}}>
      <Sequence from={0} durationInFrames={35}>
        <CinematicVideo
          src={WHO_SOURCES.enjoyAI}
          duration={35}
          trimBefore={trimForInternalSequence(WHO_TRIMS.handsRobot, 0)}
          scaleFrom={1.015}
          scaleTo={1.035}
          objectPosition="50% 50%"
          filter="contrast(1.04) saturate(1.01) brightness(1.01)"
          overlay="linear-gradient(270deg, rgba(3,10,22,.54), rgba(3,10,22,.05) 56%)"
        />
      </Sequence>

      <Sequence from={35} durationInFrames={25}>
        <CinematicVideo
          src={WHO_SOURCES.enjoyAI}
          duration={25}
          trimBefore={trimForInternalSequence(WHO_TRIMS.handsCoding, 35)}
          scaleFrom={1.01}
          scaleTo={1.025}
          objectPosition="48% 50%"
          filter="contrast(1.035) saturate(1.0) brightness(1.015)"
          overlay="linear-gradient(270deg, rgba(3,10,22,.58), rgba(3,10,22,.03) 58%)"
        />
      </Sequence>

      <Sequence from={60} durationInFrames={30}>
        <CinematicVideo
          src={WHO_SOURCES.enjoyAI}
          duration={30}
          trimBefore={trimForInternalSequence(WHO_TRIMS.handsDrone, 60)}
          scaleFrom={1.0}
          scaleTo={1.018}
          objectPosition="50% 50%"
          filter="contrast(1.04) saturate(1.015) brightness(1.01)"
          overlay="linear-gradient(270deg, rgba(3,10,22,.52), rgba(3,10,22,.02) 58%)"
        />
      </Sequence>

      <div
        style={{
          position: 'absolute',
          right: 116,
          bottom: 105,
          width: 940,
          textAlign: 'right',
          opacity: primaryOpacity,
        }}
      >
        <CinematicText
          delay={0}
          enterFrames={11}
          size={58}
          weight={650}
          trackingFrom={1.4}
          trackingTo={-1.0}
          yFrom={12}
        >
          HANDS-ON
        </CinematicText>
        <CinematicText
          delay={10}
          enterFrames={12}
          size={44}
          weight={560}
          trackingFrom={2.1}
          trackingTo={0.2}
          yFrom={12}
          style={{marginTop: 4}}
        >
          STEAM EDUCATION
        </CinematicText>
      </div>

      <div
        style={{
          position: 'absolute',
          right: 116,
          bottom: 112,
          fontFamily: 'Inter',
          fontSize: 24,
          fontWeight: 600,
          letterSpacing: 3.2,
          color: '#f5f8ff',
          opacity: supportOpacity,
          transform: `translateY(${supportY}px)`,
        }}
      >
        CODING <span style={{color: '#72e4f5'}}>•</span> ROBOTICS{' '}
        <span style={{color: '#72e4f5'}}>•</span> DRONES
      </div>

      <div style={{position: 'absolute', right: 116, top: 106, opacity: markerOpacity}}>
        <div style={{fontFamily: 'Inter', fontSize: 11, letterSpacing: 2.4, color: '#72e4f5'}}>
          ACTIVE LEARNING / 01
        </div>
        <div style={{marginTop: 8, marginLeft: 'auto', width: markerWidth, height: 1, background: '#72e4f5'}} />
      </div>
    </AbsoluteFill>
  );
};
