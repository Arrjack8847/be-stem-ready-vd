import React from 'react';
import {PurposeScene} from './PurposeScene';

// Backward-compatible alias for older imports.
// The Stage-2 edit uses PurposeScene directly.
export const IdentityKeywords: React.FC<{duration: number}> = ({duration}) => (
  <PurposeScene duration={duration} />
);
