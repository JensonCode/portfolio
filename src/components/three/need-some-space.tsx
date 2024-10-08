import React, { useEffect, useMemo, useRef, useState } from "react";

import * as THREE from "three";
import { GLTF } from "three-stdlib";

import { Points, useGLTF } from "@react-three/drei";

import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { useFrame, useThree } from "@react-three/fiber";

type NeedSomeSpaceGLTF = GLTF & {
  nodes: {
    Object_2: THREE.Points;
  };
  materials: {
    ["Scene_-_Root"]: THREE.PointsMaterial;
  };
};

//https://sketchfab.com/3d-models/need-some-space-d6521362b37b48e3a82bce4911409303
useGLTF.preload("/need_some_space.glb");

export default function NeedSomeSpace() {
  const groupRef = useRef<THREE.Group>(null!);

  const centerLightRef = useRef<THREE.PointLight>(null!);
  // const { pointer } = useThree();
  const spaceGLTF = useGLTF("/need_some_space.glb") as NeedSomeSpaceGLTF;

  const [positions, colors] = useMemo(() => {
    const geometry = extractGeometry(spaceGLTF);
    geometry.center();

    const positions = new Float32Array(geometry.getAttribute("position").array);

    const colors = customizeColors(positions);

    return [positions, colors];
  }, [spaceGLTF]);

  useFrame(({ pointer, clock }) => {
    const time = clock.getElapsedTime();

    //keep rotating
    groupRef.current.rotation.y = time / 100;
    groupRef.current.rotation.z = time / -20;

    //mouse movement
    const targetRotationX = pointer.y * Math.PI * 0.2;
    const targetRotationY = pointer.x * Math.PI * 0.2;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX,
      0.1, // Adjust for smoothness (lower = smoother)
    );

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      -targetRotationY,
      0.1,
    );

    //increase scale when scroll
    groupRef.current.scale.setScalar(
      Math.sin(time) / 20 + 1.5 + window.scrollY * 0.001,
    );
  });

  return (
    <group
      ref={groupRef}
      dispose={null}
      position={[0.5, 0, 0]}
      rotation={[7, 2, 0]}
    >
      <pointLight ref={centerLightRef} position={[0, 0, 0]} intensity={0.5} />
      <Points scale={0.03} positions={positions} colors={colors}>
        <pointsMaterial
          {...spaceGLTF.materials["Scene_-_Root"]}
          transparent
          opacity={0.3}
          size={1.2}
        />
      </Points>

      <EffectComposer autoClear={false}>
        <SelectiveBloom
          intensity={10}
          luminanceThreshold={0.005}
          luminanceSmoothing={0.025}
          lights={[centerLightRef]}
        />
      </EffectComposer>
    </group>
  );
}

const extractGeometry = (GLFT: NeedSomeSpaceGLTF): THREE.BufferGeometry => {
  const geometry = new THREE.BufferGeometry();

  const positionVertices = new Float32Array(
    GLFT.nodes.Object_2.geometry.getAttribute("position").array,
  );

  // itemSize = 3 because there are 3 values (components) per vertex
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positionVertices, 3),
  );

  return geometry;
};

const customizeColors = (positions: Float32Array): Float32Array => {
  const customizedColors = new Float32Array(positions.length);

  // Define multiple color palettes
  const palettes = [
    // Blue to Red
    { color1: { r: 0.1, g: 0.8, b: 1 }, color2: { r: 1, g: 0.4, b: 0.4 } },
    // Purple to Orange
    { color1: { r: 0.5, g: 0.2, b: 0.8 }, color2: { r: 1.0, g: 0.5, b: 0.0 } },
    // Green to Yellow
    { color1: { r: 0.0, g: 1.0, b: 0.0 }, color2: { r: 1.0, g: 1.0, b: 0.0 } },
  ];
  const getNormalizedDistance = (x: number, y: number, z: number): number =>
    Math.sqrt(x * x + y * y + z * z) / 50;

  const color = new THREE.Color();

  //itemSize = 3 because there are 3 values (components) per vertex
  for (let i = 0; i < customizedColors.length; i += 3) {
    let distance = getNormalizedDistance(
      positions[i],
      positions[i + 1],
      positions[i + 2],
    );

    const palette = palettes[(i / 3) % palettes.length];

    // Combine sin and cos for a more complex spread
    const combinedValue =
      (Math.cos(distance * Math.PI * 2) + Math.sin(distance * Math.PI * 2)) / 2;

    // Normalize the combined value to be between 0 and 1
    const finalDistance = (combinedValue + 1) / 2;

    color.setRGB(
      palette.color1.r + (palette.color2.r - palette.color1.r) * finalDistance,
      palette.color1.g + (palette.color2.g - palette.color1.g) * finalDistance,
      palette.color1.b + (palette.color2.b - palette.color1.b) * finalDistance,
    );

    color.toArray(customizedColors, i);
  }

  return customizedColors;
};
