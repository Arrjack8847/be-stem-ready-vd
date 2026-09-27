import React from 'react';
import {ASSETS} from '../assets';
import {PhotoMontage, type MontageShot} from '../components/PhotoMontage';

const SHOTS: MontageShot[] = [
  {from: 0, duration: 38, src: ASSETS.growth2023, name: '2023 / collaborative science', year: '2023', top: -190, camera: {scale: [1.018, 1.05], x: [-12, 8], y: [4, -4]}, progress: [.35, .47], transition: 'cut'},
  {from: 38, duration: 37, src: ASSETS.growth2024a, name: '2024 / building from imagination', year: '2024', top: 0, camera: {scale: [1.015, 1.043], x: [8, -10], y: [0, -9]}, progress: [.47, .62], transition: 'wipe-right'},
  {from: 75, duration: 38, src: ASSETS.growth2024b, name: '2024 / whole-class learning', year: '2024', top: -10, camera: {scale: [1.045, 1.016], x: [-9, 7], y: [4, 0]}, progress: [.62, .77], transition: 'lift'},
  {from: 113, duration: 37, src: ASSETS.hero, name: '2026 / ready for the world', year: '2026', top: -155, camera: {scale: [1.025, 1.055], x: [-9, 5], y: [0, -6]}, progress: [.77, 1], transition: 'wipe-left'},
];

export const Growth: React.FC<{duration: number}> = ({duration}) => <PhotoMontage shots={SHOTS} duration={duration} />;
