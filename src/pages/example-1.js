import React from "react";
import { Canvas } from "@react-three/fiber";
import LightBulb from "@/components/LightBulb";
import { Box, OrbitControls } from "@react-three/drei";
import Floor from "@/components/Floor";
import Cylinder from "@/components/Cylinder";
import RotatingBox from "@/components/RotatingBox";
import Layout from "@/layouts/Layout";

export default function Example_1() {
    return (
        <Layout title={"Light Bulb Table"}>
            <Canvas
                shadows
                className="bg-black"
                camera={{ position: [-6, 7, 7] }}
            >
                <OrbitControls />
                <ambientLight color={"white"} intensity={0.3} />
                <LightBulb position={[0, 5, 0]} />
                <Cylinder position={[0, 2, 0]} args={[1, 0, 0]} castShadow />
                <Cylinder position={[-5, 2, 0]} args={[1, 1, 1]} castShadow />
                <Box position={[0, 2, 5]} args={[1, 1, 1]} castShadow />
                <Box position={[0, 2, -5]} args={[2, 2, 1]} castShadow />
                <RotatingBox position={[5, 2, 0]} castShadow />
                <Floor args={[30, 1, 30]} receiveShadow />
            </Canvas>
        </Layout>
    );
}
