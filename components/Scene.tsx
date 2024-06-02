"use client";
import {
  AccumulativeShadows,
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  ScrollControls,
  Sky,
  SpotLight,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { HouseModel } from "./models/houseModel";

type Props = {
  children: React.ReactNode;
};

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const Scene = ({ children }: Props) => {
  return (
    <Canvas className={`w-screen h-screen relative`}>
      {/* Added suspense to load the model asynchronously */}
      <Suspense fallback={<Loader />}>
        {/* <Sky
          mieCoefficient={0.005}
          mieDirectionalG={1}
          rayleigh={13}
          sunPosition={[200, 10, 10]}
          turbidity={8}
        /> */}

        {/* pages={number of pages - 1} */}
        <ScrollControls damping={0.5} pages={2}>
          <Html fullscreen>{children}</Html>
          <HouseModel />
        </ScrollControls>
      </Suspense>

      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default Scene;
