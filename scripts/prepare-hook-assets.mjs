import {copyFile, mkdir, readFile, stat, writeFile} from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const destinationDir = path.join(root, 'public', 'hook');
const sfxDir = path.join(destinationDir, 'sfx');

const assets = [
  'DJI_20260912091037_0058_D.MP4',
  'video_20260912_092254.mp4',
  'video_20260913_154316.mp4',
];

await mkdir(destinationDir, {recursive: true});
await mkdir(sfxDir, {recursive: true});

const exists = async (file) => {
  try {
    return await stat(file);
  } catch {
    return null;
  }
};

for (const filename of assets) {
  const source = path.join(root, '2-first 15 seconds', filename);
  const destination = path.join(destinationDir, filename);

  const sourceStat = await exists(source);
  if (!sourceStat) {
    throw new Error(`Missing hook source: ${source}. Run git lfs pull, then try again.`);
  }

  if (sourceStat.size < 1024) {
    const header = await readFile(source, 'utf8').catch(() => '');
    if (header.startsWith('version https://git-lfs.github.com/spec/v1')) {
      throw new Error(
        `${filename} is still a Git LFS pointer. Install Git LFS and run "git lfs pull" before starting Remotion.`,
      );
    }
  }

  const destinationStat = await exists(destination);
  if (destinationStat?.size === sourceStat.size) {
    continue;
  }

  await copyFile(source, destination);
  console.log(`Prepared hook asset: ${filename}`);
}

const sampleRate = 24000;

const makeNoise = (seed) => {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 0xffffffff * 2 - 1;
  };
};

const wavBuffer = (samples) => {
  const dataBytes = samples.length * 2;
  const buffer = Buffer.alloc(44 + dataBytes);

  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataBytes, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(1, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataBytes, 40);

  samples.forEach((sample, index) => {
    const clamped = Math.max(-1, Math.min(1, sample));
    buffer.writeInt16LE(Math.round(clamped * 32767), 44 + index * 2);
  });

  return buffer;
};

const impact = () => {
  const length = Math.round(sampleRate * 0.22);
  const noise = makeNoise(0x20260927);
  return Array.from({length}, (_, index) => {
    const time = index / sampleRate;
    const bass = Math.sin(2 * Math.PI * 70 * time) * Math.exp(-time * 19);
    const transient = time < 0.02 ? noise() * Math.exp(-time * 85) : 0;
    return bass * 0.58 + transient * 0.16;
  });
};

const scaleWhoosh = () => {
  const length = Math.round(sampleRate * 0.38);
  const noise = makeNoise(0x5ca1e001);
  let smoothed = 0;
  let phase = 0;
  return Array.from({length}, (_, index) => {
    const progress = index / Math.max(1, length - 1);
    smoothed += (noise() - smoothed) / 7;
    const envelope = Math.pow(Math.sin(Math.PI * progress), 1.7);
    const frequency = 190 + 420 * progress;
    phase += 2 * Math.PI * frequency / sampleRate;
    return (smoothed * 0.36 + Math.sin(phase) * 0.035) * envelope;
  });
};

const achievementHit = () => {
  const length = Math.round(sampleRate * 0.24);
  return Array.from({length}, (_, index) => {
    const time = index / sampleRate;
    const low = Math.sin(2 * Math.PI * 92 * time) * Math.exp(-time * 16);
    const mid = Math.sin(2 * Math.PI * 184 * time) * Math.exp(-time * 24);
    return low * 0.46 + mid * 0.10;
  });
};

const generatedSfx = [
  ['impact.wav', impact()],
  ['scale-whoosh.wav', scaleWhoosh()],
  ['achievement-hit.wav', achievementHit()],
];

for (const [filename, samples] of generatedSfx) {
  const destination = path.join(sfxDir, filename);
  const buffer = wavBuffer(samples);
  await writeFile(destination, buffer);
  console.log(`Prepared hook SFX: ${filename}`);
}
