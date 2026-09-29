import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {CinematicVideo} from './CinematicVideo';
import {WHO_SOURCES, WHO_TRIMS} from './whoConfig';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const trimForInternalSequence = (sourceStartFrame: number, sequenceFrom: number) =>
  sourceStartFrame - sequenceFrom;

export const GrowthScene: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();

  const titleOpacity = Math.min(
    interpolate(frame, [2, 9], [0, 1], clamp),
    interpolate(frame, [70, 84], [1, 0], clamp),
  );
  const titleY = interpolate(frame, [2, 12], [10, 0], clamp);

  const phase =
    frame < 28 ? 'WORKSHOP' : frame < 61 ? 'ROBOTICS' : 'COMMUNITY';
  const phaseOpacity = Math.min(
    interpolate(frame % 33, [0, 5], [0, 0.72], clamp),
    interpolate(frame % 33, [23, 32], [0.72, 0], clamp),
  );

  return (
    <AbsoluteFill style={{background: '#050c19'}}>
      <Sequence from={0} durationInFrames={32}>
        <CinematicVideo
          src={WHO_SOURCES.growthCourse}
          duration={32}
          trimBefore={trimForInternalSequence(WHO_TRIMS.growthCourse, 0)}
          scaleFrom={1.002}
          scaleTo={1.018}
          xFrom={2}
          xTo={-2}
          filter="contrast(1.04) saturate(1.0) brightness(1.015)"
          overlay="linear-gradient(0deg, rgba(3,10,22,.10), transparent 60%)"
          fadeInFrames={6}
          fadeOutFrames={4}
        />
      </Sequence>

      <Sequence from={28} durationInFrames={37}>
        <CinematicVideo
          src={WHO_SOURCES.enjoyAI}
          duration={37}
          trimBefore={trimForInternalSequence(WHO_TRIMS.growthRobotics, 28)}
          scaleFrom={1.01}
          scaleTo={1.035}
          xFrom={-2}
          xTo={2}
          objectPosition="50% 50%"
          filter="contrast(1.04) saturate(1.01) brightness(1.01)"
          overlay="linear-gradient(0deg, rgba(3,10,22,.08), transparent 62%)"
          fadeInFrames={4}
          fadeOutFrames={4}
        />
      </Sequence>

      <Sequence from={61} durationInFrames={Math.max(1, duration - 61)}>
        <CinematicVideo
          src={WHO_SOURCES.enjoyAI}
          duration={Math.max(1, duration - 61)}
          trimBefore={trimForInternalSequence(WHO_TRIMS.growthGroup, 61)}
          scaleFrom={1.0}
          scaleTo={1.018}
          objectPosition="50% 50%"
          filter="contrast(1.035) saturate(1.01) brightness(1.01)"
          overlay="linear-gradient(0deg, rgba(3,10,22,.12), transparent 64%)"
          fadeInFrames={4}
        />
      </Sequence>

      <div
        style={{
          position: 'absolute',
          left: 116,
          top: 92,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <div
          style={{
            fontFamily: 'Inter',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 3.8,
            color: '#72e4f5',
            marginBottom: 6,
          }}
        >
          OUR STORY / GROWTH
        </div>
        <div
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: 52,
            fontWeight: 650,
            letterSpacing: -1,
            color: '#f5f8ff',
          }}
        >
          2024 IN MOTION
        </div>
        <div
          style={{
            marginTop: 9,
            fontFamily: 'Inter',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 3.1,
            color: '#f5f8ff',
            opacity: phaseOpacity,
          }}
        >
          {phase}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 116,
          bottom: 104,
          width: interpolate(frame, [0, duration - 1], [0, 260], clamp),
          height: 2,
          background: '#72e4f5',
          opacity: 0.58,
        }}
      />
    </AbsoluteFill>
  );
};
