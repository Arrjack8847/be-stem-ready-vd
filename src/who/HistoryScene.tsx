import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {HistoryTimeline} from './HistoryTimeline';
import {KenBurnsPhoto} from './KenBurnsPhoto';
import {WHO_SOURCES} from './whoConfig';

export const HistoryScene: React.FC<{duration: number}> = ({duration}) => {
  const finalPhotoDuration = Math.max(1, duration - 135);

  return (
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

      <Sequence from={60} durationInFrames={81}>
        <KenBurnsPhoto
          src={WHO_SOURCES.history2023a}
          duration={81}
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

      <Sequence from={135} durationInFrames={finalPhotoDuration}>
        <KenBurnsPhoto
          src={WHO_SOURCES.history2023b}
          duration={finalPhotoDuration}
          scaleFrom={1.025}
          scaleTo={1.068}
          xFrom={8}
          xTo={-5}
          yFrom={2}
          yTo={-3}
          objectPosition="50% 50%"
          fadeInFrames={6}
        />
      </Sequence>

      <HistoryTimeline duration={duration} />
    </AbsoluteFill>
  );
};
