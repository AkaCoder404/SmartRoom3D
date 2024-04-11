import { MeshWobbleMaterial, useGLTF } from '@react-three/drei'
import {useSpring,a} from "@react-spring/three";
import {useState} from "react";
import {useStore} from "../../../utils/globalState";

export default function Cactus() {
  const { nodes, materials } = useGLTF('/models/level-react-draco.glb')
    const [state, toggle] = useState(true)

    const { x } = useSpring({
        from: { x: 1 },
        x: state ? 1 : 0,
        config: { duration: 800 },
    })
    const {setChecked, resetChecked} = useStore()
    const selectIcon = ()=>{
        toggle(!state)
        if(state){
            setChecked(2)
        }
        else {
            resetChecked()
        }
    }
    return (

    <a.mesh geometry={nodes.Cactus.geometry} position={[-0.42, 0.51, -0.62]} rotation={[Math.PI / 2, 0, 0]}
          scale={x.to({
        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
        output: [1, 0.94, 0.8, 1.2, 0.8, 1.2, 1.06, 1],
    })}
          onClick={() => selectIcon()}>
      <MeshWobbleMaterial factor={0.4} map={materials.Cactus.map} />
    </a.mesh>
  )
}
