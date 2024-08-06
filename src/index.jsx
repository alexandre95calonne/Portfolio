import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    camera={{
      fov: 42,
      near: 0.1,
      far: 2000,
      position: [-2.5, 1.7, 4],
    }}
  >
    <Experience />
  </Canvas>
);
