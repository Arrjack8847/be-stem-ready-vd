import {copyFile,mkdir,readFile,stat,writeFile} from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const generatedDir=path.join(root,'public','who');
const sfxDir=path.join(generatedDir,'sfx');

await mkdir(sfxDir,{recursive:true});

const copies=[
  {
    source:'after 15 seconds/20240430_IMG_4457-compressed.mp4',
    destination:'public/media/who/01-identity/20240430_IMG_4457.mp4',
  },
  {
    source:'after 15 seconds/20240702_ENJOY AI 2024 V2-compressed.mp4',
    destination:'public/media/who/02-enjoy-ai/20240702_ENJOY-AI-2024.mp4',
  },
  {
    source:'after 15 seconds/20220403_PHOTO-2022-04-03-18-53-28 2.jpg',
    destination:'public/media/who/03-history/2022.jpg',
  },
  {
    source:'after 15 seconds/20230115_PHOTO-2023-01-15-10-05-51.jpg',
    destination:'public/media/who/03-history/2023-a.jpg',
  },
  {
    source:'after 15 seconds/20230115_PHOTO-2023-01-15-10-07-47 2.jpg',
    destination:'public/media/who/03-history/2023-b.jpg',
  },
];

const exists=async(file)=>{
  try{return await stat(file)}
  catch{return null}
};

const assertRealMedia=async(source,sourceStat)=>{
  if(sourceStat.size>=1024)return;
  const header=await readFile(source,'utf8').catch(()=>'');
  if(header.startsWith('version https://git-lfs.github.com/spec/v1')){
    throw new Error(`${path.basename(source)} is still a Git LFS pointer. Run "git lfs pull" before starting Remotion.`);
  }
  throw new Error(`Who Is BSR source is unexpectedly small or invalid: ${source}`);
};

for(const item of copies){
  const source=path.join(root,item.source);
  const destination=path.join(root,item.destination);
  const sourceStat=await exists(source);

  if(!sourceStat){
    throw new Error(`Missing Who Is BSR source: ${source}`);
  }

  await assertRealMedia(source,sourceStat);
  await mkdir(path.dirname(destination),{recursive:true});

  const destinationStat=await exists(destination);
  if(destinationStat?.size!==sourceStat.size){
    await copyFile(source,destination);
    console.log(`Prepared Who Is BSR working copy: ${item.destination}`);
  }
}

for(const proxy of [
  'public/media/who/_proxy/20240429_IMG_4384-proxy.mp4',
  'public/media/who/_proxy/20240429_IMG_4388-proxy.mp4',
]){
  const full=path.join(root,proxy);
  const st=await exists(full);
  if(!st){
    throw new Error(`Missing Who Is BSR proxy: ${proxy}. Run "git lfs pull".`);
  }
  await assertRealMedia(full,st);
}

const sampleRate=24000;

const makeNoise=(seed)=>{
  let state=seed>>>0;
  return()=>{
    state=(1664525*state+1013904223)>>>0;
    return(state/0xffffffff)*2-1;
  };
};

const wavBuffer=(samples)=>{
  const buffer=Buffer.alloc(44+samples.length*2);
  const dataBytes=samples.length*2;
  buffer.write('RIFF',0);
  buffer.writeUInt32LE(36+dataBytes,4);
  buffer.write('WAVE',8);
  buffer.write('fmt ',12);
  buffer.writeUInt32LE(16,16);
  buffer.writeUInt16LE(1,20);
  buffer.writeUInt16LE(1,22);
  buffer.writeUInt32LE(sampleRate,24);
  buffer.writeUInt32LE(sampleRate*2,28);
  buffer.writeUInt16LE(2,32);
  buffer.writeUInt16LE(16,34);
  buffer.write('data',36);
  buffer.writeUInt32LE(dataBytes,40);
  samples.forEach((sample,index)=>{
    const c=Math.max(-1,Math.min(1,sample));
    buffer.writeInt16LE(Math.round(c*32767),44+index*2);
  });
  return buffer;
};

const softWhoosh=()=>{
  const length=Math.round(sampleRate*.48);
  const noise=makeNoise(0x15003601);
  let smooth=0;
  return Array.from({length},(_,i)=>{
    const p=i/Math.max(1,length-1);
    smooth+=(noise()-smooth)/10;
    return smooth*.22*Math.pow(Math.sin(Math.PI*p),1.8);
  });
};

const technology=()=>{
  const length=Math.round(sampleRate*.7);
  const noise=makeNoise(0x15003602);
  return Array.from({length},(_,i)=>{
    const t=i/sampleRate;
    const p=i/Math.max(1,length-1);
    const env=Math.sin(Math.PI*p);
    const tone=Math.sin(2*Math.PI*(118+p*48)*t)*.035;
    return(tone+noise()*.035)*env;
  });
};

const tick=()=>{
  const length=Math.round(sampleRate*.12);
  return Array.from({length},(_,i)=>{
    const t=i/sampleRate;
    return Math.sin(2*Math.PI*620*t)*Math.exp(-t*42)*.18;
  });
};

const rise=()=>{
  const length=Math.round(sampleRate*.5);
  const noise=makeNoise(0x15003603);
  let smooth=0;
  return Array.from({length},(_,i)=>{
    const p=i/Math.max(1,length-1);
    smooth+=(noise()-smooth)/9;
    return smooth*.16*p*p;
  });
};

const keyword=()=>{
  const length=Math.round(sampleRate*.14);
  return Array.from({length},(_,i)=>{
    const t=i/sampleRate;
    return Math.sin(2*Math.PI*110*t)*Math.exp(-t*28)*.16;
  });
};

for(const [filename,samples] of [
  ['entrance-whoosh.wav',softWhoosh()],
  ['technology-texture.wav',technology()],
  ['year-tick.wav',tick()],
  ['photo-rise.wav',rise()],
  ['keyword-hit.wav',keyword()],
]){
  await writeFile(path.join(sfxDir,filename),wavBuffer(samples));
}
