import {copyFile, mkdir, readFile, stat, writeFile} from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const generatedHookDir = path.join(root, 'public', 'hook');
const sfxDir = path.join(generatedHookDir, 'sfx');

await mkdir(generatedHookDir, {recursive: true});
await mkdir(sfxDir, {recursive: true});

const workingCopies = [
  {
    source: '2-first 15 seconds/A001_09130851_C186.mp4',
    destination: 'public/media/hook/01-tech/01-tech-primary.mp4',
  },
  {
    source: '2-first 15 seconds/A001_09130902_C200.mp4',
    destination: 'public/media/hook/02-build/02-build-primary.mp4',
  },
  {
    source: '2-first 15 seconds/A001_09121022_C081.mp4',
    destination: 'public/media/hook/03-human/03-human-primary.mp4',
  },
  {
    source: '2-first 15 seconds/A001_09131545_C300.mp4',
    destination: 'public/media/hook/05-achievement/05-achievement-primary.mp4',
  },
  {
    source: '2-first 15 seconds/DJI_20260912091037_0058_D-compressed-compressed.mp4',
    destination: 'public/media/hook/06-scale/06-scale-primary.mp4',
  },
  {
    source: '2-first 15 seconds/20260720_IMG_7276.mp4',
    destination: 'public/media/hook/08-brand/08-brand-primary.mp4',
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
  if (sourceStat.size >= 1024) {
    return;
  }

  const header = await readFile(source, 'utf8').catch(() => '');
  if (header.startsWith('version https://git-lfs.github.com/spec/v1')) {
    throw new Error(
      `${path.basename(source)} is still a Git LFS pointer. Run "git lfs pull" before starting Remotion.`,
    );
  }
};

for (const item of workingCopies) {
  const source = path.join(root, item.source);
  const destination = path.join(root, item.destination);

  const sourceStat = await exists(source);
  if (!sourceStat) {
    throw new Error(`Missing hook source: ${source}`);
  }

  await assertRealMedia(source, sourceStat);
  await mkdir(path.dirname(destination), {recursive: true});

  const destinationStat = await exists(destination);
  if (destinationStat?.size === sourceStat.size) {
    continue;
  }

  await copyFile(source, destination);
  console.log(`Prepared hook working copy: ${item.destination}`);
}

const competitionProxy = path.join(
  root,
  'public',
  'media',
  'hook',
  '04-competition',
  '_proxy',
  '04-competition-primary-proxy.mp4',
);
const proxyStat = await exists(competitionProxy);
if (!proxyStat) {
  throw new Error('Missing competition proxy. Run "git lfs pull" and try again.');
}
await assertRealMedia(competitionProxy, proxyStat);

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

const mechanical = () => {
  const length = Math.round(sampleRate * 0.55);
  const noise = makeNoise(0x0c186001);
  return Array.from({length}, (_, index) => {
    const time = index / sampleRate;
    const progress = index / Math.max(1, length - 1);
    const envelope = Math.sin(Math.PI * progress);
    const servo = Math.sin(2 * Math.PI * (135 + progress * 85) * time);
    const texture = noise() * 0.08;
    return (servo * 0.06 + texture) * envelope;
  });
};

const achievementHit = () => {
  const length = Math.round(sampleRate * 0.28);
  return Array.from({length}, (_, index) => {
    const time = index / sampleRate;
    const low = Math.sin(2 * Math.PI * 92 * time) * Math.exp(-time * 15);
    const warm = Math.sin(2 * Math.PI * 276 * time) * Math.exp(-time * 24);
    return low * 0.38 + warm * 0.055;
  });
};

const scaleRiser = () => {
  const length = Math.round(sampleRate * 0.60);
  const noise = makeNoise(0x5ca1e002);
  let smooth = 0;
  return Array.from({length}, (_, index) => {
    const progress = index / Math.max(1, length - 1);
    smooth += (noise() - smooth) / 9;
    const envelope = progress * progress;
    const tone = Math.sin(2 * Math.PI * (90 + 240 * progress) * (index / sampleRate));
    return (smooth * 0.16 + tone * 0.025) * envelope;
  });
};

const scaleWhoosh = () => {
  const length = Math.round(sampleRate * 0.42);
  const noise = makeNoise(0x5ca1e001);
  let smoothed = 0;
  let phase = 0;

  return Array.from({length}, (_, index) => {
    const progress = index / Math.max(1, length - 1);
    smoothed += (noise() - smoothed) / 7;
    const envelope = Math.pow(Math.sin(Math.PI * progress), 1.7);
    const frequency = 170 + 390 * progress;
    phase += (2 * Math.PI * frequency) / sampleRate;
    return (smoothed * 0.34 + Math.sin(phase) * 0.03) * envelope;
  });
};

const brandHit = () => {
  const length = Math.round(sampleRate * 0.30);
  return Array.from({length}, (_, index) => {
    const time = index / sampleRate;
    const low = Math.sin(2 * Math.PI * 62 * time) * Math.exp(-time * 13);
    const soft = Math.sin(2 * Math.PI * 248 * time) * Math.exp(-time * 22);
    return low * 0.40 + soft * 0.05;
  });
};

const generatedSfx = [
  ['impact.wav', impact()],
  ['mechanical-detail.wav', mechanical()],
  ['achievement-hit.wav', achievementHit()],
  ['scale-riser.wav', scaleRiser()],
  ['scale-whoosh.wav', scaleWhoosh()],
  ['brand-hit.wav', brandHit()],
];

for (const [filename, samples] of generatedSfx) {
  const destination = path.join(sfxDir, filename);
  const buffer = wavBuffer(samples);
  await writeFile(destination, buffer);
}
