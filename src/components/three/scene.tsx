"use client";

import React, { Suspense } from "react";

import NeedSomeSpace from "./need-some-space";

import { Canvas } from "@react-three/fiber";
import { Html, Preload, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();

  return (
    <Html
      center
      className="flex w-full flex-col items-center justify-center text-xl text-foreground/50"
    >
      <span>space is preparing:</span>
      {progress.toFixed(1)}% loaded
    </Html>
  );
}

export default function Scene() {
  return (
    <div className="fixed top-0 h-[100vh] w-[100vw]">
      <Canvas id="scene">
        <Suspense fallback={<Loader />}>
          <NeedSomeSpace />
          <Preload />
        </Suspense>
      </Canvas>
    </div>
  );
}
