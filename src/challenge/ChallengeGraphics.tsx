import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export const SoftGradient: React.FC<{
  lighter?: boolean;
  side?: 'left' | 'right';
}> = ({lighter = false, side = 'left'}) => (
  <AbsoluteFill
    style={{
      pointerEvents: 'none',
      background:
        side === 'left'
          ? `linear-gradient(90deg, rgba(3,10,22,${lighter ? 0.34 : 0.68}) 0%, rgba(3,10,22,${lighter ? 0.12 : 0.30}) 38%, transparent 67%)`
          : `linear-gradient(270deg, rgba(3,10,22,${lighter ? 0.34 : 0.68}) 0%, rgba(3,10,22,${lighter ? 0.12 : 0.30}) 38%, transparent 67%)`,
    }}
  />
);

export const TechnicalLine: React.FC<{
  delay?: number;
  width?: number;
  reverse?: boolean;
}> = ({delay = 0, width = 250, reverse = false}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 12], [0, 1], clamp);
  return (
    <div
      style={{
        width: width * progress,
        height: 2,
        background: '#72e4f5',
        opacity: 0.68,
        transformOrigin: reverse ? 'right center' : 'left center',
        marginLeft: reverse ? 'auto' : 0,
      }}
    />
  );
};

export const MicroLabel: React.FC<{
  children: React.ReactNode;
  delay?: number;
  align?: 'left' | 'right';
  opacity?: number;
}> = ({children, delay = 0, align = 'left', opacity = 0.7}) => {
  const frame = useCurrentFrame();
  const a = interpolate(frame, [delay, delay + 8], [0, opacity], clamp);
  const y = interpolate(frame, [delay, delay + 10], [7, 0], clamp);
  return (
    <div
      style={{
        fontFamily: 'Inter',
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: 3.3,
        textTransform: 'uppercase',
        color: '#f5f8ff',
        textAlign: align,
        opacity: a,
        transform: `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
};

export const ProblemNumber: React.FC<{
  value: '01' | '02' | '03';
  delay?: number;
}> = ({value, delay = 0}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: {damping: 22, stiffness: 160, mass: 0.7},
    durationInFrames: 14,
  });

  return (
    <div
      style={{
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: 4.6,
        color: '#72e4f5',
        opacity: p,
        transform: `translateY(${(1 - p) * 8}px)`,
      }}
    >
      {value}
    </div>
  );
};

export const ProblemTitle: React.FC<{
  lines: readonly string[];
  delay?: number;
  variant?: 'line' | 'rise';
}> = ({lines, delay = 8, variant = 'line'}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 10], [0, 1], clamp);
  const y = interpolate(frame, [delay, delay + 14], [variant === 'rise' ? 18 : 10, 0], clamp);
  const tracking = interpolate(frame, [delay, delay + 14], [1.5, -1.4], clamp);

  return (
    <div
      style={{
        marginTop: 12,
        fontFamily: 'Space Grotesk',
        fontSize: 70,
        lineHeight: 0.94,
        fontWeight: 650,
        letterSpacing: tracking,
        textTransform: 'uppercase',
        color: '#f5f8ff',
        opacity,
        transform: `translateY(${y}px)`,
        textShadow: '0 3px 24px rgba(0,0,0,.22)',
      }}
    >
      {lines.map((line) => (
        <div key={line}>{line}</div>
      ))}
    </div>
  );
};

export const ProblemGraphic: React.FC<{
  number: '01' | '02' | '03';
  title: readonly string[];
  variant?: 'line' | 'rise';
  support?: string;
}> = ({number, title, variant = 'line', support}) => (
  <div
    style={{
      position: 'absolute',
      left: 116,
      bottom: 112,
      width: 780,
    }}
  >
    <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
      <ProblemNumber value={number} />
      <div style={{width: 210}}>
        <TechnicalLine delay={4} width={210} />
      </div>
    </div>

    <ProblemTitle lines={title} delay={variant === 'line' ? 8 : 6} variant={variant} />

    {support ? (
      <div style={{marginTop: 18}}>
        <MicroLabel delay={18}>{support}</MicroLabel>
      </div>
    ) : null}
  </div>
);

export const SubtleGrid: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      right: 76,
      top: 74,
      width: 300,
      height: 180,
      opacity: 0.08,
      backgroundImage:
        'linear-gradient(rgba(114,228,245,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(114,228,245,.55) 1px, transparent 1px)',
      backgroundSize: '36px 36px',
      maskImage: 'linear-gradient(135deg, #000, transparent 88%)',
      pointerEvents: 'none',
    }}
  />
);
