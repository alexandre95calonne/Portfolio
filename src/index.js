import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={ {
            fov: 40,
            near: 0.1,
            far: 2000,
            position: [ -3.3, 1.6, 4 ]
        } }
    >
        <Experience />
    </Canvas>
)