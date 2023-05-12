import React from "react";

const Cylinder = ({args, ...props}) => {
    return (
        <mesh {...props}>
            <cylinderBufferGeometry args={args} />
            <meshPhysicalMaterial 
            color={"white"} />
        </mesh>
    );
};

export default Cylinder;
