import React from "react";

const Floor = ({args, ...props}) => {
    return (
        <mesh {...props}>
            <boxBufferGeometry args={args} />
            <meshPhysicalMaterial color="orange" />
        </mesh>
    );
};

export default Floor;
