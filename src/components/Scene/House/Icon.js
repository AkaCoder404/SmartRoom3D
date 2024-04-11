import {useEffect, useState} from 'react'
import { useGLTF, useMatcapTexture } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'
import {useStore} from "../../../utils/globalState";

export default function Icon() {
  const { nodes } = useGLTF('/models/level-react-draco.glb')
  const [matcap] = useMatcapTexture('65A0C7_C3E4F8_A7D5EF_97CAE9', 1024)
  const [springs, api] = useSpring(() => ({ rotation: [0.8, 1.1, -0.4], position: [-0.79, 1.3, 0.62], config: { mass: 2, tension: 200 } }))

  const [state, toggle] = useState(true)
  const {setChecked, resetChecked} = useStore()
  const selectIcon = ()=>{
    toggle(!state)
    if(state){
      setChecked(1)
    }
    else {
      resetChecked()
    }
  }
  const { x } = useSpring({
    from: { x: 1 },
    x: state ? 1 : 0,
    config: { duration: 800 },
  })
  useEffect(() => {
    let timeout
    let floating = false
    const bounce = () => {
      api.start({ rotation: [0.8 - (floating ? 0.8 + Math.PI * 1.8 : 0), 1.1, -0.4], position: [-0.79, floating ? 1.4 : 1.3, 0.62] })
      floating = !floating
      timeout = setTimeout(bounce, 1.5 * 1000)
    }
    bounce()
    return () => clearTimeout(timeout)
  }, [])
  return (
    <a.mesh geometry={nodes.React.geometry} {...springs}
        scale={x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.94, 0.8, 1.2, 0.8, 1.2, 1.06, 1],
            })}
            onClick={() => selectIcon()}
      >
      <meshMatcapMaterial matcap={matcap}></meshMatcapMaterial>
    </a.mesh>
  )
}
