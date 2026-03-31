import React, { useEffect, useRef } from 'react';

const StarField = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;
        if (typeof THREE === "undefined") return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            powerPreference: "high-performance"
        });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        mountRef.current.innerHTML = "";
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const count = 600;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 80;
            colors[i] = Math.random();
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.18,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        camera.position.z = 30;

        let frameId;
        const animate = () => {
            frameId = requestAnimationFrame(animate);
            points.rotation.y += 0.0005;
            points.rotation.x += 0.0002;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleResize);
            if (mountRef.current) mountRef.current.innerHTML = "";
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-950"
            style={{ perspective: "1000px" }}
        />
    );
};

export default StarField;
