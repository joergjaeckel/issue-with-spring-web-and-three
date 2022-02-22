import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import {Canvas} from '@react-three/fiber';
import {a, useSpring} from '@react-spring/three';
import {config} from "@react-spring/web";

const App = () => {

    const {rotation} = useSpring({
        from: { rotation: [0,0,0] },
        to: { rotation: [0,Math.PI*2,0] },
        loop: true,
        config: config.molasses,
    })

    return (
        <Canvas>
            <a.mesh rotation={rotation}>
                <boxBufferGeometry />
                <meshBasicMaterial color={'red'} />
            </a.mesh>
        </Canvas>
    )

}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)
