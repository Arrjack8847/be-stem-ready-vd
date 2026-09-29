# Be STEM Ready — 0:00–0:15 Hook Media Preparation Report

**Scope:** media preparation only. No hook timeline, transitions, titles, logo animation, sound design, music edit or colour grade was changed.

**Inspection method:** Git LFS masters/working exports were checked out non-destructively, inspected with `ffprobe`, SHA-256 hashed, sampled at beginning / 25% / 50% / 75% / ending, and then visually reviewed at denser intervals (0.5 s for short clips, 5 s for the long DJI clip). Originals were not renamed, overwritten, trimmed or deleted.

## 1. Files found

The current hook source folder contains these nine media files:

- `2-first 15 seconds/20260720_IMG_7276.mp4`
- `2-first 15 seconds/A001_09120927_C067.mp4`
- `2-first 15 seconds/A001_09121022_C081.mp4`
- `2-first 15 seconds/A001_09121233_C098.mp4`
- `2-first 15 seconds/A001_09130851_C186.mp4`
- `2-first 15 seconds/A001_09130902_C200.mp4`
- `2-first 15 seconds/A001_09131545_C300.mp4`
- `2-first 15 seconds/DJI_20260912091037_0058_D-compressed-compressed.mp4`
- `2-first 15 seconds/video_20260912_092254.mp4`

Several names from the selection brief were supplied as MP4 working exports rather than the exact MOV masters: C186, C200, C067, C081, C098, C300 and IMG_7276. The exact original DJI `...0058_D.MP4` is also not present; the repository contains the compressed working export.

## 2. Missing files

These requested files were not found in the current repository:

- `A001_09130910_C204.mov`
- `A001_09120937_C074.mov`
- `A001_09121022_C080.mov`
- `A001_09121244_C103.mov`
- `video_20260913_154316.mp4`
- `video_20260913_154127.mp4`
- `1789264591_4157_6138888449429613641.mp4`
- `DJI_20260912091300_0059_D.MP4`

Most importantly, the preferred achievement file `video_20260913_154316.mp4` and its named backups are missing. The current achievement recommendation therefore uses C300.

## 3. Technical quality

| File | Resolution | FPS | Duration | Codec | Audio | Size | Technical note |
| --- | ---: | ---: | ---: | --- | --- | ---: | --- |
| `20260720_IMG_7276.mp4` | 1920×1072 | 29.943 avg / 30 nominal | 17.50 s | H.264 | Yes | 14.08 MB | Good near-1080p working export |
| `A001_09120927_C067.mp4` | 1072×1920 encoded | 24 | 17.00 s | H.264 | Yes | 13.71 MB | Landscape content is baked sideways; 90° conform correction required |
| `A001_09121022_C081.mp4` | 1072×1920 encoded | 24 | 15.58 s | H.264 | Yes | 12.43 MB | Landscape content is baked sideways; 90° conform correction required |
| `A001_09121233_C098.mp4` | 1072×1920 encoded | 24 | 17.04 s | H.264 | Yes | 13.77 MB | Landscape content is baked sideways; 90° conform correction required |
| `A001_09130851_C186.mp4` | 1280×720 | 19.979 avg / 30 nominal | 15.87 s | H.264 | Yes | 5.89 MB | Minimum usable resolution; uneven/VFR-like cadence |
| `A001_09130902_C200.mp4` | 1072×1920 encoded | 30 | 15.63 s | H.264 | Yes | 12.56 MB | Landscape content is baked sideways; 90° conform correction required |
| `A001_09131545_C300.mp4` | 1280×720 | 20.039 avg / 30 nominal | 17.20 s | H.264 | Yes | 6.31 MB | Minimum usable resolution; uneven/VFR-like cadence |
| `DJI_20260912091037_0058_D-compressed-compressed.mp4` | 1920×1080 | 59.94 | 126.56 s | H.264 | No | 93.14 MB | Preferred quality; edit-friendly codec despite long duration |
| `video_20260912_092254.mp4` | 3840×2160 | 59.693 avg / 60 nominal | 9.92 s | HEVC | Yes | 86.20 MB | Excellent master quality but high decode load (~73 Mbps 4K HEVC) |

No uploaded file is below 720p. C186 and C300 are exactly at the minimum usable 720p threshold.

## 4. Best visual moments / edit decision candidates

These are **source ranges only**, not final timeline decisions.

| Role | File | Candidate range | What is visible |
| --- | --- | --- | --- |
| TECH | `A001_09130851_C186.mp4` | **00:00.10–00:04.60** | Immediate spherical protective-cage drone/technology movement between students |
| BUILD | `A001_09130902_C200.mp4` | **00:00.10–00:05.60** | Students clustered around laptops, visible hands, coding/build interaction and concentration |
| HUMAN | `A001_09121022_C081.mp4` | **00:11.50–00:14.80** | Clearest student gesture/reaction beside the active robot field |
| COMPETITION | `video_20260912_092254.mp4` | **00:00.10–00:03.30** | Live competition field, participants and multiple robots in one readable frame |
| ACHIEVEMENT | `A001_09131545_C300.mp4` | **00:04.10–00:10.60** | Students approach the stage, receive awards/certificates and gather for the achievement moment |
| SCALE | `DJI_20260912091037_0058_D-compressed-compressed.mp4` | **00:00.10–00:15.10** | Strong high/wide pass showing the full venue, crowd, fields and stage |
| HERO | `video_20260912_092254.mp4` | **00:03.60–00:06.60** | Camera closes in on the competition robot for the strongest mechanical hero view |
| BRAND | `20260720_IMG_7276.mp4` | **00:05.50–00:12.50** | Stable technology demonstration with strong future/credibility energy |

An alternate DJI scale window is available around **01:30–01:40**.

## 5. Recommended primary footage

### TECH

**Primary:** `A001_09130851_C186.mp4`  
**Candidate:** 00:00.10–00:04.60  
**Why:** action is immediate; the spherical drone/cage visibly moves while students track it. This gives the hook a technology-first opening without waiting for an event to develop.

**Caution:** 720p and ~20 fps average cadence. Keep the eventual use short and replace with the clean MOV master if it becomes available.

### BUILD

**Primary:** `A001_09130902_C200.mp4`  
**Candidate:** 00:00.10–00:05.60  
**Why:** this is the strongest uploaded material for genuine student laptop/coding/build activity.

**Caution:** the image is baked sideways in a 1072×1920 raster. Correct orientation non-destructively; do not treat it as a creative vertical shot.

### HUMAN

**Primary:** `A001_09121022_C081.mp4`  
**Candidate:** 00:11.50–00:14.80  
**Why:** this late section has the clearest authentic student gestures/reaction around a live robot challenge.

### COMPETITION

**Primary:** `video_20260912_092254.mp4`  
**Candidate:** 00:00.10–00:03.30  
**Why:** strongest combination of live field, people and machines; 4K source gives reframing freedom.

### ACHIEVEMENT

**Primary:** `A001_09131545_C300.mp4`  
**Candidate:** 00:04.10–00:10.60  
**Why:** contains real award-stage movement rather than only a static pose.

**Caution:** the preferred `video_20260913_154316.mp4` is missing, and C300 is only 720p with uneven ~20 fps average cadence.

### SCALE

**Primary:** `DJI_20260912091037_0058_D-compressed-compressed.mp4`  
**Candidate:** 00:00.10–00:15.10  
**Why:** strongest visual proof of event scale; clean 1080p59.94 H.264 and no unnecessary source audio.

### HERO

**Primary:** `video_20260912_092254.mp4`  
**Candidate:** 00:03.60–00:06.60  
**Why:** the camera moves into a clear robot close-up with enough 4K detail for a strong 1080p crop.

### BRAND

**Primary:** `20260720_IMG_7276.mp4`  
**Candidate:** 00:05.50–00:12.50  
**Why:** professional technology-demo environment and future-facing credibility.

**Caution:** sampled frames do not contain a dominant Be STEM Ready logo. The existing archive group still `public/bsr-assets/photo_2026-07-20_13-44-41.jpg` is a stronger visual backup for the eventual logo/title reveal.

## 6. Backup footage

| Role | Backup | Candidate | Note |
| --- | --- | --- | --- |
| TECH | `A001_09121233_C098.mp4` | 00:01.50–00:06.50 | Stage/drone activity; rotation correction required |
| BUILD | `20260720_IMG_7276.mp4` | 00:00.10–00:08.00 | Weak fallback: technology demonstration, not true student building |
| HUMAN | `A001_09130902_C200.mp4` | 00:03.50–00:05.50 | Student smile/discussion at laptop; rotation correction required |
| COMPETITION | `A001_09120927_C067.mp4` | 00:00.10–00:09.50 | Wide robot field with multiple participants; clearer before foreground people block frame |
| COMPETITION | `A001_09121233_C098.mp4` | 00:00.10–00:06.50 | Stage/drone competition activity |
| ACHIEVEMENT | — | — | No strong alternate award clip in current upload |
| SCALE | DJI primary source | 01:30–01:40 | Alternative wide pass from later in the same source |
| HERO | `A001_09130851_C186.mp4` | 00:00.60–00:04.50 | Spherical drone/cage movement; lower-resolution backup |
| BRAND | `public/bsr-assets/photo_2026-07-20_13-44-41.jpg` | still | Stronger group/achievement energy for later brand overlay |

## 7. File organization

The role-oriented workspace is:

```text
public/media/hook/
├── 01-tech/
├── 02-build/
├── 03-human/
├── 04-competition/
│   └── _proxy/
│       └── 04-competition-primary-proxy.mp4
├── 05-achievement/
├── 06-scale/
├── 07-hero/
└── 08-brand/
```

Master/working-export media remains untouched in `2-first 15 seconds/`. We are using references rather than duplicating every source into `public/`.

One proxy was justified and created:

- **Source:** `video_20260912_092254.mp4` — 4K HEVC, ~60 fps, ~73 Mbps, 86.20 MB
- **Proxy:** `public/media/hook/04-competition/_proxy/04-competition-primary-proxy.mp4`
- **Proxy format:** 1920×1080, H.264, 60 fps CFR, AAC, 17.80 MB
- The same proxy should be reused for both COMPETITION and HERO preview work; do not duplicate it.

Structured data is stored in `src/data/hook-assets.ts`.

## 8. Problems / flags

- **Missing preferred achievement media:** all three named award/celebration candidates are absent.
- **Missing exact camera masters:** many requested MOV files are represented only by MP4 working exports.
- **Orientation fault:** C067, C081, C098 and C200 contain sideways landscape imagery inside 1072×1920 files with no usable rotation flag. They need non-destructive conform correction.
- **Minimum-resolution footage:** C186 and C300 are 1280×720.
- **Frame-cadence concern:** C186 and C300 report ~20 fps average with 30 fps nominal. They may judder; replace with cleaner originals if available.
- **Decode-heavy source:** `video_20260912_092254.mp4` is 4K HEVC at ~73 Mbps. A separate 1080p H.264 CFR proxy was created; the master remains untouched.
- **Brand clip is not a literal logo shot:** IMG_7276 is strong future-facing footage but weak as explicit brand identity.
- **Duplicates:** SHA-256 comparison found no exact duplicate files among the nine uploaded hook videos. C067 / C186 / C081 / video_092254 share the same event environment but are distinct recordings.
- **Corruption:** no corrupt/unreadable file was encountered during ffprobe/frame extraction.
- **Audio:** all files contain AAC source audio except the DJI venue clip, which has no audio.

## Stop point

No 0:00–0:15 Remotion edit has been built or changed in this preparation pass.

**Next stage:** Build the 0:00–0:15 cinematic Remotion hook from the approved shortlist.
