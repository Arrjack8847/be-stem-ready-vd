# Who is Be STEM Ready?

An editable cinematic Remotion chapter using the exact supplied photographs,
original company footage and selected soundtrack.

**1920 × 1080 · 30 fps · 630 frames · 21 seconds**

## Open the scene

Install Node.js 22 or newer. In this project folder, run:

```bash
npm ci
npm start
```

Open the URL printed by Remotion Studio and choose **WhoIsBSR**.
The fonts and media are bundled; no stock media or runtime font downloads are used.

To export an H.264 MP4 when ready:

```bash
npm run render
```

Remotion may download its supported Chrome renderer on the first export.
The output is `out/who-is-bsr.mp4`.

## Place it into the full film

The chapter occupies **global 00:15–00:36**, starting at **frame 450**.
The standalone composition plays the supplied music from its original 00:15 position.

If the main film already has its own music track, use the **WhoIsBSR-PictureOnly**
composition, or nest the component with music disabled:

```tsx
<Sequence from={450} durationInFrames={630}>
  <WhoIsBSRScene
    withMusic={false}
    musicOffsetInFrames={450}
    musicVolume={0.76}
  />
</Sequence>
```

Keep the main film's soundtrack running from global 00:00. This avoids a duplicate
music layer. The closing picture holds without fading to black so the next chapter,
“The Challenge,” can enter naturally. This project contains only the requested
identity chapter, not the opening hook or the next chapter.

## Timeline

Frame ranges below use an inclusive start and an exclusive end.

| Section | Local frames | Local time | Treatment |
| --- | --- | --- | --- |
| Identity | 0–92 | 00:00–00:03.067 | Group portrait emerges from darkness; masked title |
| Learning | 92–152 | 00:03.067–00:05.067 | Trainer/student portrait; LEARN. BUILD. CREATE. |
| History | 152–242 | 00:05.067–00:08.067 | 2022 → 2023, photographic wipe |
| Real motion | 242–332 | 00:08.067–00:11.067 | Actual company footage at 110% speed |
| Growth | 332–482 | 00:11.067–00:16.067 | 2023 → 2024 → 2026 |
| People | 482–557 | 00:16.067–00:18.567 | INNOVATORS. CREATORS. PROBLEM-SOLVERS. |
| Purpose | 557–630 | 00:18.567–00:21 | Two-line mission statement; stable closing image |

The major cuts are within one frame of measured soundtrack accents. The short
word reveals have their own cadence rather than changing on every musical beat.

## Editing

- `src/WhoIsBSRScene.tsx`: chapter timing and soundtrack integration.
- `src/scenes/`: individual section layouts, text and photographic choices.
- `src/components/CinematicImage.tsx`: aspect-preserving camera movement.
- `src/scenes/History.tsx` and `Growth.tsx`: per-image framing and timeline years.
- `src/scenes/RealMotion.tsx`: source in-point and playback speed.
- `src/assets.ts`: exact asset paths and palette.

Animations are driven by Remotion frames, `interpolate()` and clamped springs.
There are no CSS animation clocks, random state or external animation libraries.
All media and fonts use `staticFile()`.

## Footage preparation

The original `A001_09130952_C231.mov` is included unchanged. Its landscape picture
carries a -90° display-rotation tag and HLG/BT.2020 color metadata. The scene uses
`A001_09130952_C231_landscape.mp4`, a 1920 × 1080 playback copy with the incorrect
rotation cleared and SDR BT.709 color conversion, so playback is consistent.
This is the same supplied footage, not a replacement clip.

The chosen source in-point is 00:11.767. At 110% speed, the three-second scene
covers approximately 00:11.767–00:15.067 of the source. Source audio is muted;
the selected music continues across all sections.

Photo years follow the brief and supplied filenames. The original JPGs have not
been retouched or resized on disk. Each crop preserves its aspect ratio.

Space Grotesk and Inter are included under their bundled SIL Open Font licenses.
The supplied company media and soundtrack retain their original rights.
