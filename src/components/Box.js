import React from 'react'
import { BoxGeometry } from 'three'

const Box = () => {
  return (
    <mesh {...props}>
        <BoxGeometry args={args} />
        <meshPhysicalMaterial color={white} />
    </mesh>
  )
}

export default Box