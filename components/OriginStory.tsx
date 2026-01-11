'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function MorphingShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 2.2 : 2}
            >
                <icosahedronGeometry args={[1, 0]} /> {/* "Rough stone" / abstract shape */}
                <MeshDistortMaterial
                    color={hovered ? "#D4AF37" : "#333"}
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={hovered} // wireframe structure transformation
                />
            </mesh>
        </Float>
    );
}

export default function OriginStory() {
    return (
        <section id="origins" className="py-24 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-2 md:order-1"
            >
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white/90">GRIT IN OUR DNA. LOGIC IN OUR CODE.</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                    Talent is universal, but opportunity is not.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                    The Burujan was born in the quiet corners of the middle class—in rooms lit only by laptop screens and the glow of ambition. We didn't inherit empires; we learned how to engineer them.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                    We are four specialists who grew up realizing that the world is built by those who show up. We traded sleep for syntax. We traded comfort for capability.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                    Today, The Burujan is more than an IT agency. It is a testament to the climb. We build digital towers—robust, scalable, and towering—because we know exactly what it takes to rise from the ground up.
                </p>
            </motion.div>
            <div className="order-1 md:order-2 h-[400px] w-full relative">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} color="#D4AF37" />
                    <MorphingShape />
                </Canvas>
            </div>
        </section>
    );
}
