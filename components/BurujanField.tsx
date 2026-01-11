'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Constellation({ color = "#D4AF37" }: { color?: string }) {
    const count = 150; // Number of nodes
    const attributeArgs = useMemo(() => [new Float32Array(count * 3), 3] as [Float32Array, number], []);
    const connectionDistance = 3; // Max distance for lines

    // Generate random positions using useMemo
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 10;
            temp.push({
                position: new THREE.Vector3(x, y, z),
                velocity: new THREE.Vector3((Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.005)
            });
        }
        return temp;
    }, []);

    const linesGeometry = useRef<THREE.BufferGeometry>(null);
    const pointsRef = useRef<THREE.Points>(null);

    // Animation loop
    useFrame(() => {
        // move particles
        particles.forEach(p => {
            p.position.add(p.velocity);
            // Bounce off bounds (simple box)
            if (Math.abs(p.position.x) > 10) p.velocity.x *= -1;
            if (Math.abs(p.position.y) > 10) p.velocity.y *= -1;
            if (Math.abs(p.position.z) > 5) p.velocity.z *= -1;
        });

        // Update points position attribute
        if (pointsRef.current) {
            const geom = pointsRef.current.geometry;
            const positionAttribute = geom.getAttribute('position') as THREE.BufferAttribute;
            if (positionAttribute) {
                particles.forEach((p, i) => {
                    positionAttribute.setXYZ(i, p.position.x, p.position.y, p.position.z);
                });
                positionAttribute.needsUpdate = true;
            }
        }

        // Update lines
        if (linesGeometry.current) {
            const linePositions = [];
            // Brute force distance check - O(N^2) but N=150 is fine (22,500 checks)
            for (let i = 0; i < count; i++) {
                for (let j = i + 1; j < count; j++) {
                    const dist = particles[i].position.distanceTo(particles[j].position);
                    if (dist < connectionDistance) {
                        linePositions.push(
                            particles[i].position.x, particles[i].position.y, particles[i].position.z,
                            particles[j].position.x, particles[j].position.y, particles[j].position.z
                        );
                    }
                }
            }
            linesGeometry.current.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        }
    });

    return (
        <group>
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        args={attributeArgs}
                    />
                </bufferGeometry>
                <pointsMaterial color={color} size={0.07} transparent opacity={0.8} />
            </points>
            <lineSegments>
                <bufferGeometry ref={linesGeometry} />
                <lineBasicMaterial color={color === "#ef4444" ? "#ef4444" : "#007BFF"} transparent opacity={0.15} />
            </lineSegments>
        </group>
    );
}

export default function BurujanField({ color = "#D4AF37" }: { color?: string }) {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#050505]">
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }} gl={{ antialias: true }}>
                <fog attach="fog" args={['#050505', 5, 25]} />
                <Constellation color={color} />
            </Canvas>
        </div>
    );
}
