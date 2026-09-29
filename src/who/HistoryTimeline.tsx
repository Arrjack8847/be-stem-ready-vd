import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {COLORS} from '../assets';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const markerX = [430, 960, 1490] as const;

export const HistoryTimeline: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const totalWidth = markerX[2] - markerX[0];
  const progressWidth = interpolate(frame, [8, duration - 14], [0, totalWidth], clamp);

  const activeYear = frame < 60 ? '2022' : '2023';
  const activeYearOpacity = frame < 57 || frame >= 63 ? 1 : interpolate(frame, [57, 60, 63], [1, 0, 1], clamp);
  const year2024Arrival = interpolate(frame, [150, 188], [0.28, 0.94], clamp);

  const nodeOpacity = (year: '2022' | '2023' | '2024') => {
    if (year === '2022') return frame < 60 ? 0.96 : 0.45;
    if (year === '2023') return frame >= 60 ? 0.96 : 0.45;
    return year2024Arrival;
  };

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          left: 116,
          top: 88,
          fontFamily: 'Inter',
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 4.2,
          color: '#f5f8ff',
          opacity: 0.62,
        }}
      >
        OUR STORY / GROWTH
      </div>

      <div
        style={{
          position: 'absolute',
          left: 116,
          top: 116,
          fontFamily: 'Space Grotesk',
          fontSize: 50,
          fontWeight: 620,
          letterSpacing: -0.6,
          color: '#f5f8ff',
          opacity: activeYearOpacity,
        }}
      >
        {activeYear}
      </div>

      <div
        style={{
          position: 'absolute',
          left: markerX[0],
          bottom: 104,
          width: totalWidth,
          height: 1,
          background: 'rgba(245,248,255,.27)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: markerX[0],
          bottom: 104,
          width: progressWidth,
          height: 2,
          background: COLORS.cyan,
          opacity: 0.72,
        }}
      />

      {(['2022', '2023', '2024'] as const).map((year, index) => {
        const opacity = nodeOpacity(year);
        const reached = progressWidth >= markerX[index] - markerX[0] - 2;
        return (
          <div key={year} style={{position: 'absolute', left: markerX[index] - 6, bottom: 95}}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 99,
                background: reached ? COLORS.cyan : '#f5f8ff',
                opacity,
                boxShadow: reached ? '0 0 12px rgba(114,228,245,.16)' : 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 23,
                left: -25,
                width: 64,
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 1.9,
                color: '#f5f8ff',
                opacity,
              }}
            >
              {year}
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
