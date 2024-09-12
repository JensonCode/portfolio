'use client';

import React, { Suspense } from 'react';

import NeedSomeSpace from './need-some-space';

import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, useProgress } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}%loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas className='fixed top-0 left-0 w-full h-[200vh]'>
      <Suspense fallback={<Loader />}>
        <NeedSomeSpace />
      </Suspense>
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
