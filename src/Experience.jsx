import { OrbitControls, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, RectAreaLight, SpotLightHelper } from 'three'
import Gem from './Gem'

export default function Experience() {
    const directionalLightRef = useRef()
    const hemisphereLightRef = useRef()
    const pointLightRef = useRef()
    const spotLightRef = useRef()

    useHelper(directionalLightRef, DirectionalLightHelper,1)
    useHelper(hemisphereLightRef, HemisphereLightHelper,1)
    useHelper(pointLightRef, PointLightHelper,1)
    useHelper(spotLightRef, SpotLightHelper, 1)
    

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />
        {/* <hemisphereLight ref={hemisphereLightRef} position={[1, 2, 6]} intensity={1.2}/> */}
        {/* <pointLight ref={pointLightRef} castShadow position={[3, 2, 6]} intensity={3}/> */}
        <directionalLight  ref={directionalLightRef} castShadow position={[0, 10, -6]} intensity={1.5} />
        <spotLight ref={spotLightRef} castShadow color={0x800080} position={[3, 4, -2.6]} intensity={10}/>
        {/* <rectAreaLight castShadow position={[1, 3, -2]} intensity={3}/> */}
        <ambientLight intensity={0.5} />
        <Door/>
        <Gem/>
        <Floor/>
    </>
}