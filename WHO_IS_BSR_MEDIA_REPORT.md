# WHO IS BSR — MEDIA INSPECTION REPORT

**Scope:** Stage 1 media management and footage inspection only for the future **00:15–00:36 — Who Is Be STEM Ready?** section.

**Important:** No 00:15–00:36 timeline, Remotion sequence, transition, typography, music sync, color grade, sound design, or destructive media edit was created in this audit.

## 1. SOURCE FILE INVENTORY

The audit was restricted to these seven approved masters in `after 15 seconds/`.

| File | Exact repository path | Repository storage | LFS checkout result | Status |
| --- | --- | --- | --- | --- |
| 2022 photo | `after 15 seconds/20220403_PHOTO-2022-04-03-18-53-28 2.jpg` | Normal Git binary | N/A | **FOUND · ACCESSIBLE MEDIA** |
| 2023 photo A | `after 15 seconds/20230115_PHOTO-2023-01-15-10-05-51.jpg` | Normal Git binary | N/A | **FOUND · ACCESSIBLE MEDIA** |
| 2023 photo B | `after 15 seconds/20230115_PHOTO-2023-01-15-10-07-47 2.jpg` | Normal Git binary | N/A | **FOUND · ACCESSIBLE MEDIA** |
| 4384 | `after 15 seconds/20240429_IMG_4384.mp4` | Git LFS pointer in Git | 48,817,824-byte binary pulled successfully | **FOUND · ACCESSIBLE MEDIA** |
| 4388 | `after 15 seconds/20240429_IMG_4388.mp4` | Git LFS pointer in Git | 47,382,832-byte binary pulled successfully | **FOUND · ACCESSIBLE MEDIA** |
| 4457 | `after 15 seconds/20240430_IMG_4457-compressed.mp4` | Git LFS pointer in Git | 99,010,715-byte binary pulled successfully | **FOUND · ACCESSIBLE MEDIA** |
| ENJOY AI | `after 15 seconds/20240702_ENJOY AI 2024 V2-compressed.mp4` | Git LFS pointer in Git | 95,635,358-byte binary pulled successfully | **FOUND · ACCESSIBLE MEDIA** |

All four MP4 entries are intentionally represented by 133-byte LFS pointers in the normal Git object database. The actual LFS objects were pulled during audit and successfully decoded with FFmpeg. **No file is missing, corrupt, or pointer-only after LFS checkout.**

The source folder was treated as read-only. No master was deleted, renamed, overwritten, trimmed, recompressed, or replaced.

## 2. TECHNICAL METADATA

### Video

| File | Type | Resolution | FPS | Duration | Codec | Overall bitrate | Orientation | Audio | File size | Quality |
| --- | --- | ---: | ---: | ---: | --- | ---: | --- | --- | ---: | --- |
| `20240429_IMG_4384.mp4` | Video | 1920×1080 | 29.987 | 23.177 s | HEVC Main 10 | 16.85 Mbps | Landscape 16:9; -180° display rotation metadata | Yes, AAC stereo | 48,817,824 B | **GOOD** |
| `20240429_IMG_4388.mp4` | Video | 1920×1080 | 29.986 | 28.780 s | HEVC Main 10 | 13.17 Mbps | Landscape 16:9; -180° display rotation metadata | Yes, AAC stereo | 47,382,832 B | **GOOD** |
| `20240430_IMG_4457-compressed.mp4` | Video | 1920×1080 | 29.971 | 211.836 s | H.264 High | 3.74 Mbps | Landscape 16:9 | Yes, AAC stereo | 99,010,715 B | **USABLE** |
| `20240702_ENJOY AI 2024 V2-compressed.mp4` | Video | 1920×1080 | 30.000 | 213.670 s | H.264 High | 3.58 Mbps | Landscape 16:9 | Yes, AAC stereo | 95,635,358 B | **GOOD** |

The two HEVC files are technically high-quality 10-bit 1080p sources but are less browser-friendly for Remotion preview. The long compressed reels are already H.264 1080p and do not need another proxy simply because their filenames say “compressed.”

### Photos

| File | Resolution | Format | Orientation | File size | 1920×1080 use | Quality |
| --- | ---: | --- | --- | ---: | --- | --- |
| `20220403_PHOTO-2022-04-03-18-53-28 2.jpg` | 1280×958 | JPEG | Landscape, ~4:3 | 192,260 B | Works with moderate upscale and controlled 16:9 crop | **GOOD** |
| `20230115_PHOTO-2023-01-15-10-05-51.jpg` | 1280×960 | JPEG | Landscape 4:3 | 802,113 B | Works with moderate upscale and 16:9 crop | **GOOD** |
| `20230115_PHOTO-2023-01-15-10-07-47 2.jpg` | 1280×960 | JPEG | Landscape 4:3 | 888,036 B | Works with moderate upscale and 16:9 crop | **GOOD** |

## 3. CONTACT SHEET RESULTS

Every video was sampled across its **full duration**, first at approximately **0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, and 98%**.

A denser second pass was then used:
- `IMG_4384`: one frame per second across the full 23.177 s.
- `IMG_4388`: one frame per second across the full 28.780 s.
- `IMG_4457`: one frame every 10 seconds across the full 211.836 s.
- `ENJOY AI`: one frame every 5 seconds across the full 213.670 s, plus scene-change detection and two-second samples around promising regions.

Results:
- **4384** is one continuous workshop/classroom robot demonstration from one wide camera position.
- **4388** is one continuous very-wide demonstration/course view with seated and standing participants; the composition changes very little.
- **4457** is a long fixed rear-room classroom/training wide. It proves class scale but is visually repetitive.
- **ENJOY AI** is a professionally assembled event reel with many distinct useful shots: branding, medals, children, robots, laptop work, a drone obstacle course, reactions, presenters, awards and group images. It is the richest source in this seven-file pool.

## 4. VISUAL CONTENT

### `20240429_IMG_4384.mp4`
**Visible:** trainer, tabletop wheeled robot, projected control/programming interface, adults/participants around a workshop table, live demonstration.

**Tags:** TRAINER · HANDS · ROBOTICS · CODING · TECHNOLOGY · WORKSHOP · CLASSROOM · GROUP · WIDE · HUMAN · MAKER

**Weaknesses:** BUSY COMPOSITION · REPETITIVE · FOREGROUND OCCLUSION. Several audience backs/heads occupy the lower frame.

### `20240429_IMG_4388.mp4`
**Visible:** broad workshop/demo room, audience around the perimeter, presenter/participant and a blue hoop/pole obstacle-course setup.

**Tags:** TRAINER · TECHNOLOGY · WORKSHOP · CLASSROOM · GROUP · WIDE · HUMAN

**Weaknesses:** STATIC · REPETITIVE · VERY WIDE. The course can support a technology/drone context, but an airborne drone is not consistently readable in these frames; the ENJOY AI reel contains much clearer drone evidence.

### `20240430_IMG_4457-compressed.mp4`
**Visible:** large classroom/training environment, presenter at front, projected material, many participants around U-shaped tables, laptops and cables.

**Tags:** TRAINER · TECHNOLOGY · WORKSHOP · CLASSROOM · GROUP · WIDE · HUMAN

**Weaknesses:** STATIC · REPETITIVE · VERY WIDE. Good evidence of learning scale, weak source for close-up action or emotion.

### `20240702_ENJOY AI 2024 V2-compressed.mp4`
**Visible across the full reel:** explicit ENJOY AI / Be STEM Ready branding, event medals, children/students in ENJOY AI vests, facilitators, wheeled robots, hands adjusting robots, robot competition mats, laptop use, small drone flying through hoop obstacles, active robotics problem-solving, cheering/reaction, presenter interactions, certificates, adult speakers and large group photos.

**Tags:** STUDENT · TRAINER · HANDS · BUILDING · CODING · ROBOTICS · DRONE · AI · MAKER · WORKSHOP · GROUP · REACTION · TECHNOLOGY · BSR BRANDING · CLOSE-UP · MEDIUM · WIDE · HUMAN

**Weaknesses:** some late award shots contain embedded lower-third text; some speaker/award sections are less relevant to the 00:15–00:36 identity story.

## 5. BEST TIMESTAMPS

### `20240429_IMG_4384.mp4`

**Candidate A — 00:02.0 → 00:08.0**  
Visual: trainer actively handles/demonstrates the tabletop robot with projected control/programming interface visible.  
Shot: Wide.  
Possible future role: HANDS-ON STEAM / ROBOTICS.  
Quality: **GOOD**.  
Notes: strongest active section in this continuous shot; still has foreground audience.

**Candidate B — 00:12.2 → 00:15.2**  
Visual: cleaner settled workshop wide with trainer, robot and projected interface.  
Possible future role: 2024 GROWTH / REAL STEM EXPERIENCE.  
Quality: **GOOD**.

**Candidate C — 00:18.5 → 00:22.5**  
Visual: closing live workshop wide.  
Possible future role: IDENTITY / BACKUP GROWTH.  
Quality: **USABLE**.

### `20240429_IMG_4388.mp4`

**Candidate A — 00:03.0 → 00:07.0**  
Visual: full demonstration/course setup surrounded by participants.  
Possible future role: TECHNOLOGY WORKSHOP / SCALE.  
Quality: **USABLE**.

**Candidate B — 00:14.6 → 00:17.1**  
Visual: strongest balanced wide of the course/demo area and audience.  
Possible future role: REAL STEM EXPERIENCE / 2024 GROWTH.  
Quality: **GOOD**.

**Candidate C — 00:22.0 → 00:26.0**  
Visual: late wide of the same setup.  
Possible future role: BACKUP WORKSHOP SCALE.  
Quality: **USABLE**.

### `20240430_IMG_4457-compressed.mp4`

**Candidate A — 01:19.0 → 01:22.0**  
Visual: stable full-room classroom with presenter, projection and participants.  
Possible future role: IDENTITY / SCALE.  
Quality: **GOOD**.

**Candidate B — 01:30.0 → 01:36.0**  
Visual: same classroom with visible participant/laptop activity.  
Possible future role: CLASSROOM / GROUP backup.  
Quality: **USABLE**.

**Candidate C — 02:40.0 → 02:50.0**  
Visual: late-session full-room learning environment.  
Possible future role: GROWTH / SCALE backup.  
Quality: **USABLE**.

### `20240702_ENJOY AI 2024 V2-compressed.mp4`

**Candidate A — 00:00.10 → 00:06.60**  
Visual: “ENJOY AI / BE STEM READY / 22 JUNE 2024” branded opening.  
Possible future role: IDENTITY / BSR BRANDING.  
Quality: **GOOD**.

**Candidate B — 00:31.70 → 00:35.60**  
Visual: student hand with wheeled robot followed by clean robot close-ups.  
Possible future role: HANDS-ON STEAM / ROBOTICS / TECHNOLOGY.  
Quality: **EXCELLENT**.

**Candidate C — 00:38.60 → 00:44.60**  
Visual: children/facilitators actively working with robots on the floor maker area.  
Possible future role: HANDS-ON STEAM / MAKER / HUMAN.  
Quality: **GOOD**.

**Candidate D — 00:48.00 → 00:55.20**  
Visual: student at laptop, then small drone flying through blue hoop obstacles.  
Possible future role: CODING / DRONES / TECHNOLOGY.  
Quality: **EXCELLENT**.

**Candidate E — 01:03.00 → 01:16.90**  
Visual: sustained student robotics sequence with close-ups and hands-on interaction.  
Possible future role: ROBOTICS / PROBLEM-SOLVING / HANDS-ON STEAM.  
Quality: **EXCELLENT**.

**Candidate F — 01:56.20 → 02:10.30**  
Visual: students watch, react, clap and celebrate around the robotics table.  
Possible future role: HUMAN / STUDENT / INNOVATORS-CREATORS-PROBLEM-SOLVERS.  
Quality: **EXCELLENT**.

**Candidate G — 02:20.30 → 02:30.30**  
Visual: host engages students directly; raised hands, smiles and participation.  
Possible future role: HUMAN / ENGAGEMENT.  
Quality: **GOOD**.

**Candidate H — 02:36.00 → 02:40.50**  
Visual: large student/adult group celebration.  
Possible future role: GROWTH / SCALE.  
Quality: **GOOD**.

**Candidate I — 03:20.00 → 03:29.50**  
Visual: large group/certificate photographs.  
Possible future role: 2024 GROWTH / ACHIEVEMENT / SCALE.  
Quality: **GOOD**.

**Candidate J — 03:31.00 → 03:33.67**  
Visual: clean Be STEM Ready logo on white.  
Possible future role: BSR BRANDING backup.  
Quality: **GOOD**.

## 6. HISTORICAL PHOTO ANALYSIS

### 2022 — `20220403_PHOTO-2022-04-03-18-53-28 2.jpg`
- **People:** one child and one adult woman prominent; other people in background.
- **Activity:** child interacts with a handmade volcano project; a small wheeled STEM model sits beside it.
- **STEM context:** strong maker/project-learning context.
- **BSR branding:** no obvious Be STEM Ready mark visible.
- **Composition:** intimate foreground human moment; subjects dominate center/right.
- **1920×1080:** usable with moderate upscale (~1.5×) and controlled crop; do not over-crop the child, volcano or small vehicle.
- **Text/year placement:** upper-left/left side is the best available area, but keep text compact because the room has background detail.
- **Best role:** **2022 HISTORY + HUMAN + MAKER**.

### 2023 A — `20230115_PHOTO-2023-01-15-10-05-51.jpg`
- **People:** adult trainer plus two children.
- **Activity:** active science/lab exercise; “PROCESS OF LIQUID SOAP MAKING” is visible on the monitor.
- **STEM context:** extremely clear science education with beakers, measuring tools, microscopes, gloves, goggles and lab coats.
- **BSR branding:** no obvious Be STEM Ready mark visible.
- **Composition:** strongest explicit hands-on science still; medium group.
- **1920×1080:** works well with moderate upscale and top/bottom crop.
- **Text/year placement:** use a compact lower-left or corner label with backing for contrast; avoid covering faces, hands or laboratory equipment.
- **Best role:** **2023 HISTORY + HANDS-ON STEAM**.

### 2023 B — `20230115_PHOTO-2023-01-15-10-07-47 2.jpg`
- **People:** several children plus adult trainer.
- **Activity:** group science/mixing experiment around a laboratory table.
- **STEM context:** strong; lab materials plus visible science/safety/scientific-method posters.
- **BSR branding:** no obvious Be STEM Ready mark visible.
- **Composition:** wider than 2023 A and better for showing group participation/growth.
- **1920×1080:** works with moderate upscale; a 16:9 crop can trim top/bottom without losing the core table group.
- **Text/year placement:** compact upper-right or edge label with contrast backing.
- **Best role:** **2023 HISTORY + GROUP / GROWTH**.

## 7. PRIMARY CANDIDATES

| Future role | Strongest source |
| --- | --- |
| IDENTITY — live learning environment | `20240430_IMG_4457-compressed.mp4` @ **01:19–01:22** |
| IDENTITY — explicit BSR brand | `20240702_ENJOY AI 2024 V2-compressed.mp4` @ **00:00.10–00:06.60** |
| HANDS-ON STEAM | `20240702_ENJOY AI 2024 V2-compressed.mp4` @ **01:03–01:16.9** |
| CODING | ENJOY AI around **00:48** (student at laptop); 4384 is a backup because a control/programming interface is projected |
| ROBOTICS | ENJOY AI **00:31.7–00:35.6** and **01:03–01:16.9** |
| DRONES | ENJOY AI **00:50–00:55.2** |
| 2022 HISTORY | 2022 volcano/maker photo |
| 2023 HISTORY | 2023 lab photo A; photo B for wider group context |
| 2024 GROWTH | ENJOY AI **03:20–03:29.5** for scale/achievement; 4384 **00:12.2–00:15.2** for live workshop continuity |
| HUMAN / STUDENT | ENJOY AI **01:56.2–02:10.3** |
| INNOVATORS / CREATORS / PROBLEM-SOLVERS | ENJOY AI robotics **01:03–01:16.9** + student reaction **01:56.2–02:10.3** |

## 8. BACKUP CANDIDATES

- `IMG_4384` **00:02–00:08** — useful trainer/robot demonstration if a less polished but documentary workshop feel is desired.
- `IMG_4388` **00:14.6–00:17.1** — useful for broad technology-course/workshop scale.
- `IMG_4457` **01:30–01:36** and **02:40–02:50** — stable classroom scale only.
- ENJOY AI **02:20.3–02:30.3** — presenter/student engagement.
- ENJOY AI **02:36–02:40.5** — group scale.
- ENJOY AI **03:31–03:33.67** — clean BSR logo.
- 2023 photo B — stronger than photo A when the edit needs “many learners” rather than a close hands-on science moment.

## 9. WEAK / REJECTED MATERIAL

No entire master is rejected. The weaker material is source-region-specific:

- **4388:** most of the full 28.78 s is one static very-wide composition. Do not spend multiple beats on it.
- **4457:** most of the 3:31.8 reel is visually repetitive from one rear-room angle; avoid using it for emotional, hands-on or technology-detail beats.
- **4384:** useful action, but foreground audience and busy framing reduce cinematic clarity.
- **ENJOY AI:** some speaker/award regions from roughly 02:45 onward are less relevant to the identity/hands-on story; several award images contain baked-in lower-third text that can compete with future graphics.
- **2022 photo:** do not push into an aggressive 16:9 crop or heavy digital zoom because it is only 1280 px wide.
- Generic interstitial/empty motion-graphic frames inside ENJOY AI are backup/reject for the future identity chapter when real student/technology footage is available.

## 10. PROXY STATUS

**No new proxy was created in this Stage-1 audit.**

Reason:
- `20240430_IMG_4457-compressed.mp4` and `20240702_ENJOY AI 2024 V2-compressed.mp4` are already 1920×1080 H.264 and suitable working media for Remotion.
- The repository already contains separate 1920×1080 H.264 proxies for the two HEVC Main 10 iPhone clips:
  - `public/media/who/_proxy/20240429_IMG_4384-proxy.mp4`
  - `public/media/who/_proxy/20240429_IMG_4388-proxy.mp4`

Those existing proxies are referenced rather than duplicated. The original HEVC masters remain untouched.

## 11. FINAL MEDIA ORGANIZATION

A clean Stage-1 reference workspace is created at:

```
public/
└── media/
    └── who-is-bsr/
        ├── source/
        ├── identity/
        ├── hands-on/
        ├── history/
        │   ├── 2022/
        │   ├── 2023/
        │   └── 2024/
        ├── people/
        ├── proxies/
        └── previews/
```

The `source/` directory contains **references only**, not duplicated master media. The `proxies/` directory points to the existing canonical proxies. The `previews/` directory documents that full-duration contact sheets were audit artifacts and were intentionally not committed as production media.

Inspected source data is stored in:

`src/data/who-is-bsr-assets.ts`

No final 00:15–00:36 timeline positions are stored there.

---

**STAGE 1 COMPLETE.**  
The approved seven masters have been verified, inspected, organized and shortlisted. No Stage-2 cinematic edit has been built.
