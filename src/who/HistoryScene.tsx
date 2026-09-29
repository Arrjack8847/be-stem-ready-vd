import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {CinematicVideo} from './CinematicVideo';
import {HistoryTimeline} from './HistoryTimeline';
import {KenBurnsPhoto} from './KenBurnsPhoto';
import {WHO_SOURCES, WHO_TRIMS} from './whoConfig';

const trimForInternalSequence = (sourceStartFrame: number, sequenceFrom: number) =>
  sourceStartFrame - sequenceFrom;

export const HistoryScene: React.FC<{duration: number}> = ({duration}) => (
  <AbsoluteFill style={{background: '#050c19'}}>
    <Sequence from={0} durationInFrames={66}>
      <KenBurnsPhoto
        src={WHO_SOURCES.history2022}
        duration={66}
        scaleFrom={1.02}
        scaleTo={1.07}
        xFrom={-9}
        xTo={5}
        objectPosition="50% 50%"
        fadeOutFrames={6}
      />
    </Sequence>

    <Sequence from={60} durationInFrames={66}>
      <KenBurnsPhoto
        src={WHO_SOURCES.history2023a}
        duration={66}
        scaleFrom={1.022}
        scaleTo={1.062}
        xFrom={-7}
        xTo={9}
        yFrom={2}
        yTo={-3}
        objectPosition="50% 50%"
        fadeInFrames={6}
        fadeOutFrames={6}
      />
    </Sequence>

    <Sequence from={120} durationInFrames={45}>
      <KenBurnsPhoto
        src={WHO_SOURCES.history2023b}
        duration={45}
        scaleFrom={1.025}
        scaleTo={1.058}
        xFrom={8}
        xTo={-4}
        yFrom={2}
        yTo={-2}
        objectPosition="50% 50%"
        fadeInFrames={6}
        fadeOutFrames={6}
      />
    </Sequence>

    <Sequence from={159} durationInFrames={Math.max(1, duration - 159)}>
      <CinematicVideo
        src={WHO_SOURCES.growth}
        duration={Math.max(1, duration - 159)}
        trimBefore={trimForInternalSequence(WHO_TRIMS.growth, 159)}
        scaleFrom={1.008}
        scaleTo={1.02}
        xFrom={2}
        xTo={-2}
        filter="contrast(1.035) saturate(.99) brightness(1.015)"
        overlay="linear-gradient(0deg, rgba(3,10,22,.10), transparent 58%)"
        fadeInFrames={6}
      />
    </Sequence>

    <HistoryTimeline duration={duration} />
  </AbsoluteFill>
);
