import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from 'remotion';
import {COLORS} from '../assets';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const fadeWindow = (
  frame: number,
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number,
  max = 1,
) =>
  Math.min(
    interpolate(frame, [inStart, inEnd], [0, max], clamp),
    interpolate(frame, [outStart, outEnd], [max, 0], clamp),
  );

const metaStyle: React.CSSProperties = {
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: 500,
  letterSpacing: 4.2,
  textTransform: 'uppercase',
  color: COLORS.white,
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'Space Grotesk',
  fontWeight: 600,
  letterSpacing: 2.2,
  textTransform: 'uppercase',
  color: COLORS.white,
};

const Hairline: React.FC<{
  width: number;
  opacity?: number;
}> = ({width, opacity = 0.7}) => (
  <div
    style={{
      width,
      height: 2,
      background: COLORS.cyan,
      opacity,
      boxShadow: '0 0 12px rgba(114,228,245,.12)',
    }}
  />
);

const CornerBracket: React.FC<{
  x: number;
  y: number;
  size?: number;
  flipX?: boolean;
  flipY?: boolean;
  opacity?: number;
}> = ({x, y, size = 34, flipX = false, flipY = false, opacity = 0.52}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: size,
      height: size,
      opacity,
      transform: `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})`,
      transformOrigin: '50% 50%',
    }}
  >
    <div style={{position: 'absolute', left: 0, top: 0, width: size, height: 2, background: COLORS.cyan}} />
    <div style={{position: 'absolute', left: 0, top: 0, width: 2, height: size, background: COLORS.cyan}} />
  </div>
);

export const TechOverlay: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const scanX = interpolate(frame, [1, 8], [-220, 1500], clamp);
  const scanOpacity = fadeWindow(frame, 0, 2, 7, 9, 0.58);
  const bracketOpacity = fadeWindow(frame, 4, 8, duration - 11, duration - 4, 0.56);
  const labelOpacity = fadeWindow(frame, 7, 12, duration - 13, duration - 5, 1);
  const labelY = interpolate(frame, [7, 13], [10, 0], clamp);

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          top: 274,
          left: scanX,
          width: 330,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${COLORS.cyan}, transparent)`,
          opacity: scanOpacity,
          boxShadow: '0 0 14px rgba(114,228,245,.22)',
        }}
      />

      <CornerBracket x={1115} y={264} opacity={bracketOpacity} />
      <CornerBracket x={1510} y={620} flipX flipY opacity={bracketOpacity} />

      <div
        style={{
          position: 'absolute',
          left: 124,
          bottom: 112,
          opacity: labelOpacity,
          transform: `translateY(${labelY}px)`,
        }}
      >
        <Hairline width={46} opacity={0.76} />
        <div style={{...labelStyle, fontSize: 28, marginTop: 15}}>STEM / ROBOTICS</div>
        <div style={{...metaStyle, fontSize: 13, marginTop: 9, opacity: 0.56}}>
          BUILDING FUTURE SKILLS
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BuildOverlay: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const line = interpolate(frame, [5, 12], [0, 205], clamp);
  const opacity = fadeWindow(frame, 6, 11, duration - 14, duration - 5, 0.92);
  const labelX = interpolate(frame, [8, 14], [-9, 0], clamp);

  return (
    <AbsoluteFill style={{pointerEvents: 'none', opacity}}>
      <div style={{position: 'absolute', left: 1260, top: 706}}>
        <div
          style={{
            width: line,
            height: 2,
            background: COLORS.cyan,
            transformOrigin: 'left center',
            opacity: 0.7,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: line - 3,
            top: -2,
            width: 6,
            height: 6,
            borderRadius: 99,
            background: COLORS.cyan,
            opacity: line > 14 ? 0.85 : 0,
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 1482,
          top: 676,
          transform: `translateX(${labelX}px)`,
        }}
      >
        <div style={{...metaStyle, fontSize: 13, opacity: 0.58}}>01 / PROCESS</div>
        <div style={{...labelStyle, fontSize: 31, marginTop: 5}}>BUILD</div>
      </div>
    </AbsoluteFill>
  );
};

export const HumanOverlay: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const opacity = fadeWindow(frame, 8, 16, duration - 15, duration - 7, 0.28);
  const width = interpolate(frame, [8, 18], [0, 76], clamp);

  return (
    <AbsoluteFill style={{pointerEvents: 'none', opacity}}>
      <div style={{position: 'absolute', left: 130, bottom: 120}}>
        <div style={{width, height: 2, background: COLORS.cyan}} />
        <div style={{...metaStyle, fontSize: 11, marginTop: 9, opacity: 0.62}}>
          CURIOSITY / FOCUS
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const CompetitionOverlay: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const opacity = fadeWindow(frame, 3, 7, duration - 19, duration - 10, 1);
  const reveal = interpolate(frame, [3, 10], [0, 100], clamp);
  const y = interpolate(frame, [2, 9], [24, 0], clamp);

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          left: 104,
          bottom: 88,
          width: 760,
          overflow: 'hidden',
          opacity,
          clipPath: `inset(0 ${100 - reveal}% 0 0)`,
        }}
      >
        <div
          style={{
            ...labelStyle,
            fontSize: 112,
            lineHeight: 0.86,
            letterSpacing: -2.4,
            transform: `translateY(${y}px)`,
            textShadow: '0 4px 30px rgba(0,0,0,.22)',
          }}
        >
          COMPETE
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 15, marginTop: 18}}>
          <Hairline width={58} opacity={0.76} />
          <div style={{...metaStyle, fontSize: 13, opacity: 0.72}}>
            REAL-WORLD CHALLENGES
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const AchievementOverlay: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const opacity = fadeWindow(frame, 6, 12, duration - 14, duration - 6, 1);
  const y = interpolate(frame, [6, 13], [14, 0], clamp);
  const underline = interpolate(frame, [13, 22], [0, 196], clamp);

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          left: 112,
          bottom: 100,
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        <div
          style={{
            ...labelStyle,
            fontSize: 80,
            lineHeight: 1,
            letterSpacing: -0.8,
            textShadow: '0 3px 24px rgba(0,0,0,.18)',
          }}
        >
          ACHIEVE
        </div>
        <div style={{width: underline, height: 3, background: COLORS.cyan, marginTop: 10, opacity: 0.72}} />
        <div style={{...metaStyle, fontSize: 13, marginTop: 12, opacity: 0.7}}>
          SKILLS INTO RESULTS
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const ScaleOverlay: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const markerOpacity = fadeWindow(frame, 8, 18, duration - 18, duration - 7, 0.56);
  const lineWidth = interpolate(frame, [13, 23], [0, 180], clamp);
  const gridOpacity = fadeWindow(frame, 17, 28, duration - 24, duration - 9, 0.18);

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div style={{position: 'absolute', left: 1326, top: 414, opacity: markerOpacity}}>
        <div
          style={{
            width: 12,
            height: 12,
            border: `1.5px solid ${COLORS.cyan}`,
            borderRadius: 99,
            boxSizing: 'border-box',
          }}
        />
        <div style={{position: 'absolute', left: 6, top: 5, width: lineWidth, height: 2, background: COLORS.cyan, opacity: 0.65}} />
        <div
          style={{
            position: 'absolute',
            left: 32,
            top: 18,
            width: 280,
            opacity: lineWidth > 120 ? interpolate(lineWidth, [120, 180], [0, 1], clamp) : 0,
          }}
        >
          <div style={{...metaStyle, fontSize: 11, opacity: 0.58}}>COMMUNITY / EDUCATION</div>
          <div style={{...labelStyle, fontSize: 23, marginTop: 5}}>LEARNING AT SCALE</div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: 96,
          bottom: 82,
          width: 330,
          height: 150,
          opacity: gridOpacity,
          backgroundImage:
            'linear-gradient(rgba(114,228,245,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(114,228,245,.55) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
          maskImage: 'linear-gradient(135deg, transparent 8%, #000 55%, transparent 100%)',
        }}
      />
    </AbsoluteFill>
  );
};

const TrackingDot: React.FC<{x: number; y: number; opacity: number}> = ({x, y, opacity}) => (
  <div
    style={{
      position: 'absolute',
      left: x - 5,
      top: y - 5,
      width: 10,
      height: 10,
      borderRadius: 99,
      border: `1.5px solid ${COLORS.cyan}`,
      opacity,
      boxSizing: 'border-box',
      boxShadow: '0 0 12px rgba(114,228,245,.10)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: 3,
        top: 3,
        width: 2,
        height: 2,
        borderRadius: 99,
        background: COLORS.cyan,
      }}
    />
  </div>
);

export const FutureOverlay: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const introOpacity = fadeWindow(frame, 3, 10, duration - 17, duration - 8, 0.72);
  const labelOpacity = fadeWindow(frame, 7, 14, duration - 19, duration - 10, 1);
  const scanY = interpolate(frame, [4, 23], [240, 760], clamp);
  const scanOpacity = fadeWindow(frame, 4, 8, 19, 25, 0.32);
  const lineA = interpolate(frame, [7, 16], [0, 260], clamp);
  const lineB = interpolate(frame, [10, 20], [0, 188], clamp);
  const collapse = interpolate(frame, [duration - 17, duration - 7], [0, 1], clamp);
  const contentScale = interpolate(collapse, [0, 1], [1, 0.965], clamp);

  return (
    <AbsoluteFill
      style={{
        pointerEvents: 'none',
        opacity: introOpacity,
        transform: `scale(${contentScale})`,
        transformOrigin: '58% 52%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 340,
          top: scanY,
          width: 1040,
          height: 2,
          opacity: scanOpacity,
          background: `linear-gradient(90deg, transparent, ${COLORS.cyan}, transparent)`,
        }}
      />

      <TrackingDot x={1065} y={382} opacity={0.72 * (1 - collapse)} />
      <TrackingDot x={1315} y={505} opacity={0.60 * (1 - collapse)} />
      <TrackingDot x={945} y={646} opacity={0.50 * (1 - collapse)} />

      <div style={{position: 'absolute', left: 1069, top: 381, width: lineA * (1 - collapse), height: 2, background: COLORS.cyan, opacity: 0.44}} />
      <div style={{position: 'absolute', left: 1125, top: 642, width: lineB * (1 - collapse), height: 2, background: COLORS.cyan, opacity: 0.34, transform: 'rotate(-20deg)', transformOrigin: 'left center'}} />

      <CornerBracket x={890 + collapse * 105} y={316 + collapse * 160} opacity={0.52 * (1 - collapse)} />
      <CornerBracket x={1395 - collapse * 115} y={682 - collapse * 145} flipX flipY opacity={0.52 * (1 - collapse)} />

      <div
        style={{
          position: 'absolute',
          left: 118,
          bottom: 92,
          opacity: labelOpacity * (1 - collapse),
        }}
      >
        <Hairline width={58} opacity={0.8} />
        <div style={{...labelStyle, fontSize: 50, marginTop: 14}}>FUTURE / TECHNOLOGY</div>
        <div style={{...metaStyle, fontSize: 12, marginTop: 9, opacity: 0.64}}>
          ROBOTICS / STEM SYSTEM
        </div>
      </div>
    </AbsoluteFill>
  );
};
