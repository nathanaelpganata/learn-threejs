import Layout from "@/layouts/Layout";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const example_3 = () => {
    return (
        <Layout title={"Test"}>
            <Canvas
                shadows
                className="bg-black"
                camera={{ position: [0, 0, 5] }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <OrbitControls />
            </Canvas>
        </Layout>
    );
};

export default example_3;
