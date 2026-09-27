import React, {useEffect, useState} from 'react';
import {cancelRender, continueRender, delayRender, staticFile} from 'remotion';

let loaded: Promise<FontFace[]> | undefined;

export const Fonts: React.FC = () => {
  const [handle] = useState(() => delayRender('Loading bundled BSR fonts'));
  useEffect(() => {
    loaded ??= Promise.all([
      new FontFace('Space Grotesk', `url("${staticFile('fonts/space-grotesk-latin-wght-normal.woff2')}")`, {weight: '300 700'}),
      new FontFace('Inter', `url("${staticFile('fonts/inter-latin-400-normal.woff2')}")`, {weight: '400'}),
      new FontFace('Inter', `url("${staticFile('fonts/inter-latin-500-normal.woff2')}")`, {weight: '500'}),
    ].map(async (font) => {
      const result = await font.load();
      document.fonts.add(result);
      return result;
    }));
    loaded.then(() => continueRender(handle)).catch(cancelRender);
  }, [handle]);
  return null;
};
