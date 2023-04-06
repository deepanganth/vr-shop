import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import display from './assets/home-shirt.glb';

function Shirt() {
  const mesh = useRef();
  const { viewport } = useThree();
  useEffect(() => {
    const handleResize = () => {
      mesh.current.scale.set(viewport.width * 0.05, viewport.width * 0.05, viewport.width * 0.05);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewport.width]);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  const gltf = useLoader(GLTFLoader, display);
  return <primitive ref={mesh} scale={[0.004, 0.004, 0.004]} position={[0, 2.5, 0]} object={gltf.scene} />;
}

function HomeModel() {
  return (
    <Canvas>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      <ambientLight intensity={1} />
      {/* <spotLight intensity={1.5} position={[100, 100, 100]} /> */}
      <spotLight intensity={1.5} position={[-100, 100, 100]} />
      {/* <spotLight intensity={1.5} position={[100, -100, 100]} /> */}
      <spotLight intensity={1.5} position={[100, 100, -100]} />
      <Suspense>
        <Shirt />
      </Suspense>
    </Canvas>
  );
}

export default HomeModel;
