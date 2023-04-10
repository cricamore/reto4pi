import { useTexture } from "@react-three/drei";
import { DoubleSide, RepeatWrapping, TextureLoader } from "three";

export default function Gem() {
    const PATH = "/static/textures/gem/"

    const props = useTexture({
        map: PATH + 'color.jpg',
        displacementMap: PATH + 'height.jpg',
        normalMap: PATH + 'normal.jpg',
        alphaMap: PATH + 'mask.jpg',
        aoMap: PATH + 'ao.jpg',
        metalnessMap: PATH + 'metallic.jpg'
    })

    props.map.repeat.set(3, 2);
    props.map.wrapS = props.map.wrapT = RepeatWrapping;

    props.displacementMap.repeat.set(3, 2);
    props.displacementMap.wrapS = props.displacementMap.wrapT = RepeatWrapping;

    props.normalMap.repeat.set(3, 2);
    props.normalMap.wrapS = props.normalMap.wrapT = RepeatWrapping;

    props.alphaMap.repeat.set(3, 2);
    props.alphaMap.wrapS = props.alphaMap.wrapT = RepeatWrapping;

    props.aoMap.repeat.set(3, 2);
    props.aoMap.wrapS = props.aoMap.wrapT = RepeatWrapping;

    props.metalnessMap.repeat.set(3, 2);
    props.metalnessMap.wrapS = props.metalnessMap.wrapT = RepeatWrapping;
    

    return (
        <mesh castShadow={true} position={[2, 2, -2]}  >
            <sphereGeometry args={[1, 32, 32]}/>
            <meshStandardMaterial {...props}
            displacementScale={0.2}/>
        </mesh>
    )
}