import {copyFile, mkdir, readFile, stat} from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const destinationDir = path.join(root, 'public', 'hook');

const assets = [
  'DJI_20260912091037_0058_D.MP4',
  'video_20260912_092254.mp4',
  'video_20260913_154316.mp4',
];

await mkdir(destinationDir, {recursive: true});

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
