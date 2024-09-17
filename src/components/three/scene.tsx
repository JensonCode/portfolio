"use client";

import React, { Suspense } from "react";

import NeedSomeSpace from "./need-some-space";

import { Canvas } from "@react-three/fiber";
import {
  Html,
  Preload,
  Scroll,
  ScrollControls,
  useProgress,
} from "@react-three/drei";

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

type SceneProps = {
  children: React.ReactNode;
};

export default function Scene({ children }: SceneProps) {
  return (
    <div className="absolute top-0 h-[100vh] w-full">
      <Canvas id="scene">
        <ScrollControls damping={0.5} pages={4}>
          {/* <Suspense fallback={<Loader />}>
            <NeedSomeSpace />
            <Preload />
          </Suspense> */}
          <Scroll html style={{ width: "100%" }}>
            {children}
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
