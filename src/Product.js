import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "./styles.css";
import { Link } from "react-router-dom";
import returnbtn from "./assets/return-btn.png";
import display from "./assets/home-shirt.glb";
import textureImage1 from "./assets/ptrn1.webp";
import textureImage2 from "./assets/ptrn2.jpg";
import textureImage3 from "./assets/ptrn3.webp";
import textureImage4 from "./assets/ptrn4.webp";
import textureImage5 from "./assets/ptrn5.png";
import textureImage6 from "./assets/ptrn6.jpg";
import textureImage7 from "./assets/ptrn7.jpg";
import textureImage8 from "./assets/ptrn8.jpg";
import textureImage9 from "./assets/ptnn10.jpeg";

function Shirt({ texture }) {
  const mesh = useRef();

  const gltf = useLoader(GLTFLoader, display);

  useEffect(() => {
    if (texture) {
      const textureLoader = new THREE.TextureLoader();
      const textureMap = textureLoader.load(texture);
      textureMap.wrapS = THREE.RepeatWrapping;
      textureMap.wrapT = THREE.RepeatWrapping;
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.map = textureMap;
        }
      });
    }
  }, [texture, gltf.scene]);
  return (
    <primitive
      ref={mesh}
      object={gltf.scene}
      position={[0, 2, 0]}
      scale={[0.0028, 0.0028, 0.0028]}
    />
  );
}

function Product() {
  const defaultTextures = [
    textureImage3,
    textureImage2,
    textureImage1,
    textureImage4,
    textureImage5,
    textureImage6,
    textureImage7,
    textureImage8,
    textureImage9,
  ];

  const caption = [
    "Geometric Harmony",
    "Wild Wanderlust",
    "Cosmic Vibes",
    "Retro Revival",
    "Surreal Dreams",
    "Nature's Majesty",
    "Urban Jungle",
    "Funky Fusion",
    "Pop Culture Punch",
  ];

  const [textureIndex, setTextureIndex] = useState(0);

  const handleTextureChange = (index) => {
    setTextureIndex(index);
    document.querySelector(".display-caption").innerText = caption[index];
  };

  function getCaptionStyle(index) {
    return [
      "style1",
      "style2",
      "style3",
      "style4",
      "style5",
      "style6",
      "style7",
      "style8",
      "style9",
    ][index % 9];
  }
  return (
    <>
      <Canvas className="product-canva">
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1} />
        {/* <spotLight intensity={1.5} position={[100, 100, 100]} /> */}
        <spotLight intensity={1.5} position={[-100, 100, 100]} />
        {/* <spotLight intensity={1.5} position={[100, -100, 100]} /> */}
        <spotLight intensity={1.5} position={[100, 100, -100]} />
        <Suspense>
          <Shirt texture={defaultTextures[textureIndex]} />
        </Suspense>
      </Canvas>
      <div className="btns">
        {defaultTextures.map((image, index) => (
          <div
            className="btn"
            key={index}
            onClick={() => handleTextureChange(index)}
          >
            <img src={image} alt="" />
          </div>
        ))}
      </div>
      <div className={`caption ${getCaptionStyle(textureIndex)}`}>
        <p className="display-caption">{caption[textureIndex]}</p>
      </div>
      <Link className="return-btn" to={"/"}>
        <img src={returnbtn} alt="" />
      </Link>
    </>
  );
}

export default Product;
