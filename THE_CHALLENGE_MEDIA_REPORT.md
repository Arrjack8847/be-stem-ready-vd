# THE CHALLENGE — Stage 1 Media Report

## Scope

Stage 1 only for the planned **0:36–0:54 — THE CHALLENGE** section.

No Stage-2 timeline, Remotion sequence, final trims, titles, transitions, music cues, SFX, or color grade have been created.

Inspection method:

- GitHub Actions checkout with Git LFS enabled
- explicit `git lfs pull` + `git lfs checkout`
- `ffprobe` technical inspection
- full-duration contact sheets at approximately 0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, and 98%
- full-duration dense sampling every 5 seconds
- targeted candidate inspection every 1 second in the strongest regions

Audit run: **The Challenge Stage 1 Audit / 36647907465**

---

## Source files / repository discrepancy

The brief names a folder `after 36 seconds/` and three original filenames. Those exact repository paths do **not** exist on `main`.

The only matching files currently present are in the typo-named folder `after 35seonds/` and have `-compressed.mp4` filenames.

The existing files were **not renamed, moved, recompressed, trimmed, overwritten, or replaced**.

| Requested path | Exact requested file | Repository match | Status |
| --- | --- | --- | --- |
| `after 36 seconds/20260808_IMG_7449.MOV` | MISSING | `after 35seonds/20260808_IMG_7449-compressed.mp4` | FOUND · LFS pulled · ACCESSIBLE MEDIA |
| `after 36 seconds/20240427_115807_WA_e898bd84-ac7a-46d5-904e-5016986d5e1e.mp4` | MISSING | `after 35seonds/20240427_115807_WA_e898bd84-ac7a-46d5-904e-5016986d5e1e-compressed.mp4` | FOUND · LFS pulled · ACCESSIBLE MEDIA |
| `after 36 seconds/20200103_ENJOY AI2019 FINAL.mp4` | MISSING | `after 35seonds/20200103_ENJOY AI2019 FINAL-compressed.mp4` | FOUND · LFS pulled · ACCESSIBLE MEDIA |

Before LFS checkout, GitHub's contents API exposes each MP4 as a 133-byte pointer. The Stage-1 audit pulled the real binaries before inspection.

---

## Technical metadata

| File | Resolution | FPS | Duration | Codec | Video bitrate | Pixel format | Orientation | Audio | Size | Quality |
| --- | ---: | ---: | ---: | --- | ---: | --- | --- | --- | ---: | --- |
| `20260808_IMG_7449-compressed.mp4` | 1920×1080 | 29.982 | 88.021 s | H.264 High | 2.135 Mbps | yuv420p | landscape / normal | AAC stereo | 23.79 MiB | **GOOD** |
| `20240427_115807_WA_e898bd84-ac7a-46d5-904e-5016986d5e1e-compressed.mp4` | 1280×720 | 30.000 | 243.733 s | H.264 High | 0.689 Mbps | yuv420p | landscape raster; display rotation **-180°** | AAC stereo | 23.95 MiB | **USABLE** |
| `20200103_ENJOY AI2019 FINAL-compressed.mp4` | 1920×1080 | 24.000 | 66.208 s | H.264 High | 3.032 Mbps | yuv420p | landscape / normal | AAC stereo | 24.99 MiB | **GOOD** |

Overall bitrates are approximately 2.268 Mbps, 0.824 Mbps, and 3.166 Mbps respectively.

### Technical notes

- **20260808** meets the preferred 1920×1080 target and is the strongest dedicated technology/action source.
- **20240427** meets the minimum 1280×720 threshold but is visibly more compressed and highly repetitive. It requires a 180° orientation correction when displayed according to its source metadata.
- **2019 ENJOY AI** is 1080p and visually rich, but is 24 fps and contains occasional motion blur plus embedded ENJOY AI event branding/watermarks.
- All three are browser-friendly H.264/yuv420p. No proxy is technically required at Stage 1.

---

# Visual content

## 1. 20260808_IMG_7449-compressed.mp4

**Entire clip:** a small drone navigates a large physical obstacle/course structure made from blue rods, yellow joints, landing/target stations, rings, and elevated elements inside a STEM workspace.

### Tags

DRONE · EQUIPMENT · TECHNOLOGY · RESOURCE · HANDS-ON STEM CONTEXT · OBSTACLE COURSE · WIDE · MEDIUM-WIDE · CLOSE TECHNOLOGY DETAIL

### Strengths

- Technology is already moving from the opening.
- The physical course clearly communicates specialist equipment and setup.
- The drone remains the visual subject for most of the duration.
- Strong fit for the Challenge opener and resource-intensity concept.

### Weaknesses

- Environment is visually busy.
- Repetition: one drone and one course for almost the entire clip.
- Some later frames isolate the drone against the pink wall and lose some of the equipment/course context.

### Verified candidate ranges

**Candidate A — 00:00–00:10**  
Visual: drone moves from the lower/landing area into the blue/yellow obstacle structure.  
Shot: medium-wide.  
Potential role: THE CHALLENGE opener backup / technology + equipment.  
Quality: GOOD.  
Reason: immediate moving technology and readable physical infrastructure.

**Candidate B — 00:35–00:44**  
Visual: drone travels through the central lattice of the obstacle course; course depth and multiple gates are simultaneously readable.  
Shot: medium-wide.  
Potential role: **PRIMARY THE CHALLENGE OPENER**.  
Quality: GOOD.  
Reason: strongest balance of drone readability, motion, equipment, and resource-intensive setup.

**Candidate C — 00:45–00:54**  
Visual: drone continues through the outer course near the elevated red target/station.  
Shot: medium-wide.  
Potential role: equipment / technology backup.  
Quality: GOOD.

**Candidate D — 01:00–01:10**  
Visual: drone traverses a deeper view through several layers of the course.  
Shot: wide.  
Potential role: equipment / resource complexity backup.  
Quality: GOOD.

**Candidate E — 01:10–01:20**  
Visual: drone is higher in the structure against the pink wall/ring area.  
Shot: medium-wide.  
Potential role: drone/technology backup.  
Quality: USABLE.  
Reason: clean drone silhouette but weaker course context than Candidate B.

**Candidate F — 01:24–01:28**  
Visual: drone descends/returns toward the lower floor/structure.  
Shot: medium-wide.  
Potential role: action-end backup.  
Quality: USABLE.

---

## 2. 20240427_115807_WA_e898bd84-ac7a-46d5-904e-5016986d5e1e-compressed.mp4

**Entire clip:** a live educator/instructor speaks to a room of seated students/participants, with projected presentation screens and round tables. The camera remains in a similar rear wide position for most of the 4:03 clip.

### Tags

TRAINER · TEACHER · EDUCATOR · STUDENT · WORKSHOP · STRUCTURED LEARNING · PRESENTATION · HUMAN · WIDE · ESTABLISHING · STATIC · REPETITIVE · LOW-BITRATE 720P

### Strengths

- Clearly shows an educator leading a structured group learning session.
- Students are visibly listening and, in the strongest range, actively responding with raised hands.
- Best available source for the educator challenge.

### Weaknesses

- Mostly one static wide angle for more than four minutes.
- 720p at low bitrate.
- Several foreground walk-through/occlusion moments.
- Does **not** visually prove that any institution is licensed or that the educator is certified; it is illustrative only.

### Verified candidate ranges

**Candidate A — 00:00–00:06**  
Visual: wide structured learning environment; educator at the front, projected screens, seated participants.  
Shot: wide establishing.  
Potential role: licensed-institution illustrative backup.  
Quality: USABLE.

**Candidate B — 01:00–01:04**  
Visual: educator centered at front with students attentive and room structure clearly readable.  
Shot: wide.  
Potential role: **PRIMARY LICENSED-INSTITUTION ILLUSTRATIVE VISUAL**.  
Quality: USABLE.  
Reason: clean structured-learning plate without claiming the image itself proves licensing.

**Candidate C — 01:04–01:14**  
Visual: educator prompts the room and many students raise their hands/respond.  
Shot: wide human interaction.  
Potential role: **PRIMARY CERTIFIED-STEM-EDUCATOR ILLUSTRATIVE VISUAL**.  
Quality: GOOD within source limitations.  
Reason: strongest evidence of active teaching and student engagement.

**Candidate D — 01:15–01:25**  
Visual: educator continues speaking with students attentive after the raised-hands moment.  
Shot: wide.  
Potential role: educator backup.  
Quality: USABLE.

**Candidate E — 01:55–02:15**  
Visual: stable lecture/presentation with educator and audience.  
Shot: wide.  
Potential role: structured-learning / institution backup.  
Quality: USABLE.

**Candidate F — 02:15–02:35**  
Visual: continuing instruction from the same angle.  
Shot: wide.  
Potential role: educator backup only.  
Quality: BACKUP due to repetition.

### Weak / rejected regions

- **00:55–00:59:** foreground participant passes through the composition; weaker educator read.
- **Around 01:40–01:45:** foreground occlusion/walk-through reduces clarity.
- Long stretches after the strongest interaction are visually repetitive and should not be used simply to fill time.

---

## 3. 20200103_ENJOY AI2019 FINAL-compressed.mp4

**Entire clip:** international/large-scale youth AI/robotics competition coverage: venue/stage, many student teams, robotics tables, line-following/course fields, mechanical systems, robotic arm, laptops, judges/facilitators, hands-on equipment, and student reactions.

### Tags

ROBOT · ROBOTICS · EQUIPMENT · TECHNOLOGY · RESOURCE · STUDENT · COMPETITION · HANDS-ON · HUMAN · WIDE · MEDIUM · CLOSE-UP · LARGE-SCALE EVENT · LAPTOP / PROGRAMMING CONTEXT

**Coding note:** laptops are visibly part of the robotics setup, but the sampled frames do not show readable source code. Use as programming/coding **context**, not proof of visible coding.

### Strengths

- Best variety and strongest escalation source.
- Strong combination of people + robots + specialized competition fields + laptops + mechanical equipment.
- Several useful close/medium details rather than only wides.

### Weaknesses

- 24 fps source.
- Occasional fast-motion blur and foreground occlusion.
- ENJOY AI branding/watermark is embedded.
- Some opening/end frames are event branding rather than useful challenge visuals.

### Verified candidate ranges

**Candidate A — 00:15–00:18**  
Visual: large competition venue/stage and organized event environment.  
Shot: wide establishing.  
Potential role: institutional/scale backup.  
Quality: GOOD.

**Candidate B — 00:19–00:24**  
Visual: students clustered around robotics tables, handling equipment with facilitators nearby.  
Shot: medium / medium-wide.  
Potential role: hands-on STEM / equipment / robotics.  
Quality: GOOD.

**Candidate C — 00:24–00:30**  
Visual: robots operating on marked competition courses with students observing.  
Shot: medium / close technology.  
Potential role: robotics / resource intensity.  
Quality: GOOD.

**Candidate D — 00:30–00:34**  
Visual: specialized course/obstacle hardware and competition field layouts.  
Shot: medium-wide / equipment detail.  
Potential role: equipment/resource backup.  
Quality: USABLE.

**Candidate E — 00:35–00:42**  
Visual: busy competition tables with many teams, robots and hardware simultaneously visible.  
Shot: wide / medium-wide.  
Potential role: scale + equipment escalation.  
Quality: GOOD.

**Candidate F — 00:43–00:45**  
Visual: students actively handling/holding a robot and working with an adult/facilitator.  
Shot: medium.  
Potential role: human + technology bridge.  
Quality: GOOD.

**Candidate G — 00:45–00:50**  
Visual: **robotic arm, laptop, robot/course hardware and hands-on equipment** in rapid succession.  
Shot: medium to close-up.  
Potential role: **PRIMARY AFFORDABILITY / EQUIPMENT VISUAL**; robotics; programming-context visual.  
Quality: GOOD.  
Reason: strongest visual concentration of the specialist equipment/resources referenced by the company-profile challenge.

**Candidate H — 00:51–00:55**  
Visual: students with robots and more positive human expressions.  
Shot: medium.  
Potential role: **PRIMARY TRANSITION INTO OUR SOLUTION / problem → possibility**.  
Quality: GOOD.

**Candidate I — 00:55–00:59**  
Visual: teams gathered around a competition table.  
Shot: medium-wide.  
Potential role: solution-bridge backup / community.  
Quality: GOOD.

### Weak / rejected regions

- **00:00–00:14:** event entrance/title/stage branding; useful archive context but weak for the three specific challenge statements.
- **Around 00:31–00:33:** several course shots are soft/defocused.
- **Around 00:48:** a fast robot pass is visibly motion-blurred; use adjacent equipment frames instead if clarity is required.
- Final title/end-card material is not useful for the Challenge section.

---

# Best role of each file

## THE CHALLENGE OPENER

**Primary:**  
`after 35seonds/20260808_IMG_7449-compressed.mp4`  
**00:35–00:44**  
Drone actively moving through a specialist physical obstacle course.

Why: strongest immediate visual shorthand for technology + equipment + resources. The equipment itself is visible without requiring explanatory graphics.

## LICENSED INSTITUTION

**Primary illustrative visual:**  
`after 35seonds/20240427_115807_WA_e898bd84-ac7a-46d5-904e-5016986d5e1e-compressed.mp4`  
**01:00–01:04**

Why: structured learning room, educator at the front, presentation screens and organized participants.

Important: the footage is illustrative only. It does **not** establish or prove licensing.

Backup: same file **00:00–00:06** or **01:55–02:15**.

## CERTIFIED STEM EDUCATOR

**Primary illustrative visual:**  
`after 35seonds/20240427_115807_WA_e898bd84-ac7a-46d5-904e-5016986d5e1e-compressed.mp4`  
**01:04–01:14**

Why: strongest trainer/student interaction; many students actively raise hands/respond.

Important: the footage is illustrative only. It does **not** establish or prove certification.

Backup: **01:15–01:25**.

## EQUIPMENT / TECHNOLOGY

**Primary:**  
`after 35seonds/20200103_ENJOY AI2019 FINAL-compressed.mp4`  
**00:45–00:50**

Robotic arm + laptop + robotics field + robot/hardware close details.

Backups:
- 2019 **00:24–00:30**
- 2026 drone **00:35–00:44**
- 2019 **00:30–00:34**

## ROBOTICS

Primary: 2019 **00:24–00:30**.  
Backup: 2019 **00:45–00:50**.

## CODING / PROGRAMMING

Best available context: 2019 **00:45–00:48**, where a laptop is visibly integrated with robotics/equipment.

Limitation: the sampled frames do not show readable programming/code on screen. Do not imply visible coding beyond the equipment/laptop context.

## AFFORDABILITY

**Primary illustrative visual:**  
2019 **00:45–00:50**

Why: visually concentrates multiple specialist resources—robotic arm, laptop, robot/course systems and competition hardware—making the equipment/resource burden understandable.

Important: the footage does not show a monetary price. The **company-profile text** supplies the affordability claim; the footage only illustrates resource/equipment intensity.

Backup: 2019 **00:35–00:42** for many teams + many simultaneous equipment stations.

## TRANSITION INTO OUR SOLUTION

**Primary:** 2019 **00:51–00:55**  
Students + robots + more positive human energy.

Backup: 2019 **00:55–00:59**.

---

# Contact sheets

Generated from the real LFS binaries in audit run **36647907465**.

## Full-duration percentage sheets

- `20260808_IMG_7449-compressed_percent.jpg`
- `20240427_115807_WA_e898bd84-ac7a-46d5-904e-5016986d5e1e-compressed_percent.jpg`
- `20200103_ENJOY AI2019 FINAL-compressed_percent.jpg`

Each samples approximately 0 / 10 / 20 / 30 / 40 / 50 / 60 / 70 / 80 / 90 / 98 percent.

## Full-duration dense sheets

Five-second samples were generated across the entire duration of all three sources.

## Targeted one-second sheets

- `drone_000_030_*.jpg`
- `drone_030_060_*.jpg`
- `drone_060_088_*.jpg`
- `educator_055_090_*.jpg`
- `educator_115_155_*.jpg`
- `ai2019_015_060_*.jpg`

These targeted sheets were used to establish the candidate ranges above.

---

# Proxy status

**No proxies created.**

Reason:

- all three inspected repository files are already H.264 High / yuv420p
- file sizes are modest (~24–25 MiB each)
- 20260808 and 2019 are 1080p
- 20240427 is already only 720p, so another proxy would not improve source quality

If Remotion later shows poor playback on a specific machine, create a non-destructive proxy at that time. Do not replace these source files.

---

# Working structure

Stage-1 workspace created at:

`public/media/the-challenge/`

with:

- `opener/`
- `institution/`
- `educator/`
- `technology/`
- `affordability/`
- `proxies/`
- `previews/`

No large master file has been duplicated into these folders.

---

# Stage-1 decision summary

**Primary opener:** 20260808, 00:35–00:44  
**Primary licensed-institution illustrative visual:** 20240427, 01:00–01:04  
**Primary certified-educator illustrative visual:** 20240427, 01:04–01:14  
**Primary equipment / affordability illustrative visual:** ENJOY AI 2019, 00:45–00:50  
**Primary solution bridge:** ENJOY AI 2019, 00:51–00:55

Stage 1 ends here. No 0:36–0:54 edit has been built.
