# Be STEM Ready — Remotion Film

A cinematic Remotion company-profile sequence built from supplied Be STEM Ready media.

**1920 × 1080 · 30 fps**

## Compositions

- **FullFilm** — 36 seconds. 00:00–00:15 cinematic hook + 00:15–00:36 “Who is Be STEM Ready?”
- **CinematicHook** — standalone 15-second trailer-style opening.
- **WhoIsBSR** — original 21-second identity chapter with music starting at global 00:15.
- **WhoIsBSR-PictureOnly** — original identity chapter without its own music.

## First run

The three large hook videos are tracked with Git LFS. After cloning:

```bash
git lfs pull
npm ci
npm start
```

Before Studio opens, `scripts/prepare-hook-assets.mjs` copies the LFS working files from
`2-first 15 seconds/` into the generated `public/hook/` folder. The generated copies are
ignored by Git so the large media is not stored twice.

## Render

Render the combined 36-second film:

```bash
npm run render
```

Output:

```text
out/bsr-full-film.mp4
```

Render only the opening hook:

```bash
npm run render:hook
```

Render only the original identity chapter:

```bash
npm run render:who
```

## Hook edit

The 15-second hook follows a trailer rhythm:

| Time | Role | Treatment |
| --- | --- | --- |
| 00:00–01.73 | Technology impact | Starts already in motion; 1.20× → 0.88× ramp; subtle punch-in |
| 01.73–03.57 | Hands / building | Tight crop and push-in |
| 03.57–05.40 | Human concentration | Calmer, wider crop |
| 05.40–07.27 | Competition floor | Hard cut; scale expands |
| 07.27–09.17 | Achievement | Normal speed into brief slow motion |
| 09.17–11.37 | DJI venue reveal | Longer, cleaner scale shot |
| 11.37–13.47 | Technology hero | Stronger polish + minimal technical marker |
| 13.47–15.00 | Brand reveal | Darkened group image + clean BE STEM READY title |

Most transitions are direct hard cuts. The soundtrack runs once at the **FullFilm** level,
so the music remains continuous across the 00:15 chapter boundary.

## Main edit files

- `src/hook/CinematicHook.tsx` — hook timeline and shot treatments.
- `src/hook/HookShot.tsx` — reusable image/video camera movement and two-stage speed ramps.
- `src/hook/hookConfig.ts` — hook cut points and source paths.
- `src/hook/BrandReveal.tsx` — final title treatment.
- `src/FullFilm.tsx` — combined hook + identity chapter and master music.
- `src/WhoIsBSRScene.tsx` — existing 21-second chapter.
