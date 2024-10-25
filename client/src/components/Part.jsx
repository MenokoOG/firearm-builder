// Part.jsx
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useDrag } from '@use-gesture/react';

const Part = ({ part, initialPosition }) => {
    const meshRef = useRef();
    const [position, setPosition] = useState(initialPosition);
    const [hovered, setHovered] = useState(false);

    // Drag handler
    const bind = useDrag(({ offset: [x, y] }) => {
        setPosition([x / 100, 0, y / 100]); // Smooth movement
    });

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.set(...position);
        }
    });

    return (
        <mesh
            {...bind()}
            ref={meshRef}
            position={position}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial color={part.color} wireframe={hovered} />
            <Html position={[0, 1.6, 0]}>
                <div className="text-xs text-white bg-black px-2 py-1 rounded">
                    {part.name}
                </div>
            </Html>
        </mesh>
    );
};

export default Part;
