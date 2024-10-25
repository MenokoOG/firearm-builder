// Viewer.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Part from './Part';

const Viewer = ({ parts }) => {
    return (
        <div className="w-full h-[80vh] bg-gray-800 rounded-lg">
            <Canvas camera={{ position: [0, 5, 15], fov: 50 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={0.6} />
                <OrbitControls />
                {parts.map((part, index) => (
                    <Part
                        key={part.id}
                        part={part}
                        initialPosition={[
                            (index % 5) * 3 - 6,
                            0,
                            Math.floor(index / 5) * 3 - 3,
                        ]}
                    />
                ))}
            </Canvas>
        </div>
    );
};

export default Viewer;
