import {copyFile, mkdir, readFile, stat, writeFile} from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const publicRoot = path.join(root, 'public', 'media', 'the-challenge');
const sfxDir = path.join(root, 'public', 'challenge', 'sfx');

const copies = [
  {
    source: 'after 35seonds/20260808_IMG_7449-compressed.mp4',
    destination: 'public/media/the-challenge/opener/drone-obstacle.mp4',
  },
  {
    source: 'after 35seonds/20240427_115807_WA_e898bd84-ac7a-46d5-904e-5016986d5e1e-compressed.mp4',
    destination: 'public/media/the-challenge/educator/educator-session.mp4',
  },
  {
    source: 'after 35seonds/20200103_ENJOY AI2019 FINAL-compressed.mp4',
    destination: 'public/media/the-challenge/affordability/enjoy-ai-2019.mp4',
  },
];

const exists = async (file) => {
  try {
    return await stat(file);
  } catch {
    return null;
  }
};

const assertRealMedia = async (source, sourceStat) => {
  if (sourceStat.size >= 1024) return;
  const header = await readFile(source, 'utf8').catch(() => '');
  if (header.startsWith('version https://git-lfs.github.com/spec/v1')) {
    throw new Error(
      `${path.basename(source)} is still a Git LFS pointer. Run "git lfs pull" before starting Remotion.`,
    );
  }
  throw new Error(`Challenge source is unexpectedly small or invalid: ${source}`);
};

for (const item of copies) {
  const source = path.join(root, item.source);
  const destination = path.join(root, item.destination);
  const sourceStat = await exists(source);

  if (!sourceStat) {
    throw new Error(`Missing Challenge source: ${source}`);
  }

  await assertRealMedia(source, sourceStat);
  await mkdir(path.dirname(destination), {recursive: true});

  const destinationStat = await exists(destination);
  if (destinationStat?.size !== sourceStat.size) {
    await copyFile(source, destination);
    console.log(`Prepared Challenge working copy: ${item.destination}`);
  }
}

await mkdir(publicRoot, {recursive: true});
await mkdir(sfxDir, {recursive: true});

const sampleRate = 24000;

const makeNoise = (seed) => {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return (state / 0xffffffff) * 2 - 1;
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

const impact = (frequency, decay, strength) => {
  const length = Math.round(sampleRate * 0.28);
  const noise = makeNoise(Math.round(frequency * 1000 + decay));
  return Array.from({length}, (_, index) => {
    const t = index / sampleRate;
    const low = Math.sin(2 * Math.PI * frequency * t) * Math.exp(-t * decay);
    const transient = index < sampleRate * 0.018 ? noise() * Math.exp(-t * 90) : 0;
    return low * strength + transient * 0.055;
  });
};

const tick = () => {
  const length = Math.round(sampleRate * 0.11);
  return Array.from({length}, (_, index) => {
    const t = index / sampleRate;
    return (
      Math.sin(2 * Math.PI * 720 * t) * Math.exp(-t * 48) * 0.14 +
      Math.sin(2 * Math.PI * 1180 * t) * Math.exp(-t * 70) * 0.025
    );
  });
};

const mechanical = () => {
  const length = Math.round(sampleRate * 0.65);
  const noise = makeNoise(0x36005403);
  let smooth = 0;
  return Array.from({length}, (_, index) => {
    const p = index / Math.max(1, length - 1);
    const t = index / sampleRate;
    smooth += (noise() - smooth) / 10;
    const envelope = Math.pow(Math.sin(Math.PI * p), 1.5);
    const servo = Math.sin(2 * Math.PI * (122 + p * 110) * t);
    return (servo * 0.035 + smooth * 0.075) * envelope;
  });
};

const rise = () => {
  const length = Math.round(sampleRate * 0.62);
  const noise = makeNoise(0x36005404);
  let smooth = 0;
  let phase = 0;
  return Array.from({length}, (_, index) => {
    const p = index / Math.max(1, length - 1);
    smooth += (noise() - smooth) / 9;
    const freq = 115 + p * 250;
    phase += (2 * Math.PI * freq) / sampleRate;
    return (smooth * 0.10 + Math.sin(phase) * 0.018) * p * p;
  });
};

for (const [filename, samples] of [
  ['impact-low.wav', impact(58, 12, 0.38)],
  ['tick.wav', tick()],
  ['impact-03.wav', impact(72, 14, 0.45)],
  ['mechanical.wav', mechanical()],
  ['solution-rise.wav', rise()],
]) {
  await writeFile(path.join(sfxDir, filename), wavBuffer(samples));
}
