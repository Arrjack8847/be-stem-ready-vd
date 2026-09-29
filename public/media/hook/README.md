# Hook media workspace

This directory is the non-destructive working-media area for the **0:00–0:15 cinematic hook**.

- Master / supplied working exports remain untouched in `2-first 15 seconds/`.
- `npm start` runs `scripts/prepare-hook-assets.mjs`, which creates ignored working copies for the selected lightweight sources.
- The 4K HEVC competition source keeps one committed 1080p H.264 proxy in `04-competition/_proxy/`.
- That same proxy is reused by both COMPETITION and HERO; it is not duplicated.
- Sideways C200/C081 imagery is corrected non-destructively inside the Remotion shot component.
- Candidate source ranges and technical metadata live in `src/data/hook-assets.ts`.
- The human-readable media audit lives in `HOOK_ASSET_REPORT.md`.

The role folders are editorial organization only. Original media is never renamed, overwritten, destructively trimmed or colour-graded.
