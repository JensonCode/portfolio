import React, { useMemo, useRef } from 'react';

import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

import { Points, useGLTF } from '@react-three/drei';

import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
import { useFrame } from '@react-three/fiber';

type NeedSomeSpaceGLTF = GLTF & {
  nodes: {
    Object_2: THREE.Points;
  };
  materials: {
    ['Scene_-_Root']: THREE.PointsMaterial;
  };
};

//https://sketchfab.com/3d-models/need-some-space-d6521362b37b48e3a82bce4911409303
useGLTF.preload('/need_some_space.glb');

export default function NeedSomeSpace() {
  const groupRef = useRef<THREE.Group>(null!);
  const centerLightRef = useRef<THREE.PointLight>(null!);

  const spaceGLTF = useGLTF('/need_some_space.glb') as NeedSomeSpaceGLTF;

  const geometry = extractGeometry(spaceGLTF);
  geometry.center();

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(geometry.getAttribute('position').array);

    const colors = customizeColors(positions);

    return [positions, colors];
  }, [geometry]);

  useFrame(({ clock }) => {
    groupRef.current.rotation.z = clock.getElapsedTime() / 5;
    // zoom in and out
    // groupRef.current.scale.setScalar(
    //   Math.sin(clock.getElapsedTime() / 2) + 1.5
    // );
  });

  return (
    <group
      ref={groupRef}
      dispose={null}
    >
      <pointLight
        ref={centerLightRef}
        position={[0, 0, -1]}
        intensity={0.5}
      />
      <Points
        scale={1}
        positions={positions}
        colors={colors}
      >
        <pointsMaterial
          {...spaceGLTF.materials['Scene_-_Root']}
          transparent
          opacity={0.4}
          size={1}
        />
      </Points>

      <EffectComposer autoClear={false}>
        <SelectiveBloom
          intensity={3}
          luminanceThreshold={0.001}
          luminanceSmoothing={0.225}
          lights={[centerLightRef]}
        />
      </EffectComposer>
    </group>
  );
}

const extractGeometry = (GLFT: NeedSomeSpaceGLTF): THREE.BufferGeometry => {
  const geometry = new THREE.BufferGeometry();

  const positionVertices = new Float32Array(
    GLFT.nodes.Object_2.geometry.getAttribute('position').array
  );

  // itemSize = 3 because there are 3 values (components) per vertex
  geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positionVertices, 3)
  );

  return geometry;
};

const customizeColors = (positions: Float32Array): Float32Array => {
  const customizedColors = new Float32Array(positions.length);

  const blue = { r: 0.24 / 1.95, g: 1.73 / 1.95, b: 1.95 / 1.95 }; // normalized blue range
  const red = { r: 1.75 / 1.75, g: 0.69 / 1.75, b: 0.81 / 1.75 }; // normalized red range

  const getNormalizedDistance = (x: number, y: number, z: number): number =>
    Math.sqrt(x * x + y * y + z * z) / 150;

  const color = new THREE.Color();

  //itemSize = 3 because there are 3 values (components) per vertex
  for (let i = 0; i < customizedColors.length; i += 3) {
    let distance = getNormalizedDistance(
      positions[i],
      positions[i + 1],
      positions[i + 2]
    );

    // Combine sin and cos for a more complex spread
    const combinedValue =
      (Math.cos(distance * Math.PI * 2) + Math.sin(distance * Math.PI * 2)) / 2;

    // Normalize the combined value to be between 0 and 1
    const finalDistance = (combinedValue + 1) / 2;

    color.setRGB(
      blue.r + (red.r - blue.r) * finalDistance,
      blue.g + (red.g - blue.g) * finalDistance,
      blue.b + (red.b - blue.b) * finalDistance
    );

    color.toArray(customizedColors, i);
  }

  return customizedColors;
};
