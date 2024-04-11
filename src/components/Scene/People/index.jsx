/*
This file was generated by https://github.com/pmndrs/gltfjsx and then
customized manually. It uses drei's new useAnimations hook which extracts
all actions and sets up a THREE.AnimationMixer for it so that you don't have to.
All of the assets actions, action-names and clips are available in its output. 
*/

import React, { useEffect, useState } from "react"
import { useGLTF, useTexture, useAnimations } from "@react-three/drei"
import { a, useSpring } from "@react-spring/three"

export default function Index(props) {
  // Fetch model and a separate texture
  const { nodes, animations } = useGLTF("/models/stacy.glb")
  const texture = useTexture("/models/stacy.jpg")
  // Extract animation actions
  const { ref, actions, names } = useAnimations(animations)
  // console.log(useGLTF("/models/stacy.glb"))
  // console.log(animations)
  // Hover and animation-index states
  const [hovered, setHovered] = useState(false)
  const [index, setIndex] = useState(1)
  // Change cursor on hover-state
  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
  // Change animation when the index changes
  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    actions[names[index]].reset().fadeIn(0.5).play()
    // In the clean-up phase, fade it out
    return () => actions[names[index]].fadeOut(0.5)
  }, [index, actions, names])

  const [pf, setPf] = useState([0, 0, 0])
  const [pt, setPt] = useState([-3.3, 0, 0])
  const [idx, setIdx] = useState(0)
  const vectorDistance = (x, y) =>
    Math.sqrt(x.reduce((acc, val, i) => acc + Math.pow(val - y[i], 2), 0));
  const anim = useSpring({
    from: { position: pf },

    to: { position: pt },
    config: { duration: vectorDistance(pf, pt) * 1000 },
    onRest: () => {
      // console.log(pf,pt)
      setPf([...pfs[idx]])

    }
  })
  useEffect(() => {
    setIdx((idx + 1) % pfs.length)
  }, [pf])
  useEffect(() => {
    setPt([...pfs[idx]])
    if (idx === 2) {
      ref.current.rotateZ(Math.PI / 2)
    }
    else if (idx === 3) {
      ref.current.rotateZ(Math.PI / 2)
    }
    else if (idx === 4) {
      ref.current.rotateZ(Math.PI)
    }
    else if (idx === 5) {
      ref.current.rotateZ(-Math.PI / 2)
    }
    else if (idx === 0) {
      ref.current.rotateZ(-Math.PI / 2)
    }
    else if (idx === 1) {
      ref.current.rotateZ(Math.PI)
    }
    anim.reset = true
  }, [idx])
  const pfs = [
    [0, 0, 0],
    [-3.6, 0, 0],
    [-3.6, 0, -3.3],
    [-2, 0, -3.3],
    [-3.6, 0, -3.3],
    [-3.6, 0, 0],

  ]

  return (
    <group {...props} dispose={null}>
      <a.group rotation={[Math.PI / 2, 0, 0]} scale={0.01} ref={ref} {...anim}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          castShadow
          receiveShadow
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => setIndex((index + 1) % names.length)}
          geometry={nodes.stacy.geometry}
          skeleton={nodes.stacy.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}>
          <meshStandardMaterial map={texture} map-flipY={false} skinning />
        </skinnedMesh>
      </a.group>
    </group>
  )
}