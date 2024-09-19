"use client";

import React, { Suspense, useLayoutEffect, useRef } from "react";

import NeedSomeSpace from "./need-some-space";

import { Canvas, createRoot } from "@react-three/fiber";
import { Html, Preload, useProgress } from "@react-three/drei";

function Loader() {
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
    <Canvas eventSource={document.getElementById("main")!} eventPrefix="client">
      <Suspense fallback={<Loader />}>
        <NeedSomeSpace />
        <Preload />
      </Suspense>
    </Canvas>
  );
}
