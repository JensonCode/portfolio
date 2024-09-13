'use client';

import React, { Suspense } from 'react';

import NeedSomeSpace from './need-some-space';

import { Canvas } from '@react-three/fiber';
import { Html, Scroll, ScrollControls, useProgress } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}%loaded</Html>;
}

type SceneProps = {
  children: React.ReactNode;
};

export default function Scene({ children }: SceneProps) {
  return (
    <div className='w-full h-[100vh]'>
      <Canvas>
        <ScrollControls
          damping={2}
          pages={5}
        >
          <Suspense fallback={<Loader />}>
            <NeedSomeSpace />
          </Suspense>

          <Scroll html>{children}</Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
