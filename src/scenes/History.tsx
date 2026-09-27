import React from 'react';
import {ASSETS} from '../assets';
import {PhotoMontage, type MontageShot} from '../components/PhotoMontage';

const SHOTS: MontageShot[] = [
  {from: 0, duration: 45, src: ASSETS.history2022, name: '2022 / exploration with a trainer', year: '2022', top: -105, camera: {scale: [1.025, 1.065], x: [-15, 8], y: [0, -7]}, progress: [0, .19], transition: 'cut'},
  {from: 45, duration: 45, src: ASSETS.history2023, name: '2023 / a real science experiment', year: '2023', top: 0, width: 1440, left: 480, featherLeft: true, camera: {scale: [1.005, 1.02], x: [0, -6], y: [0, 0]}, progress: [.19, .35], transition: 'wipe-left'},
];

export const History: React.FC<{duration: number}> = ({duration}) => <PhotoMontage shots={SHOTS} duration={duration} />;
