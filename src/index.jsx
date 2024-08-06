import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { useEffect, useState } from "react";

function ResponsiveCanvas() {
  const [cameraPosition, setCameraPosition] = useState([-2.5, 1.7, 4]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        // Zoom out more for mobile devices
        setCameraPosition([-5, 3.4, 8]); // Increase these values to zoom out more
      } else {
        // Default position for larger screens
        setCameraPosition([-2.5, 1.7, 4]);
      }
    }

    // Set initial position
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      camera={{
        fov: 42,
        near: 0.1,
        far: 2000,
        position: cameraPosition,
      }}
    >
      <Experience />
    </Canvas>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<ResponsiveCanvas />);
