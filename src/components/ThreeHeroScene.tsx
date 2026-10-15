import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeHeroSceneProps {
  onExploreClick?: () => void;
  onPlanClick?: () => void;
}

type LightingPreset = 'royal-gold' | 'midnight-noir' | 'starlight';

export const ThreeHeroScene: React.FC<ThreeHeroSceneProps> = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  // References to communicate with render loop
  const sceneParams = useRef({
    preset: 'royal-gold' as LightingPreset,
    drift: true,
    mouseTarget: { x: 0, y: 0 },
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvasTest = document.createElement('canvas');
      const gl = canvasTest.getContext('webgl') || canvasTest.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x101114);
    scene.fog = new THREE.FogExp2(0x101114, 0.035);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 11);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Procedural Floor Texture (Dark polished marble with subtle luxury veining)
    const floorCanvas = document.createElement('canvas');
    floorCanvas.width = 512;
    floorCanvas.height = 512;
    const ctx = floorCanvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#16181d';
      ctx.fillRect(0, 0, 512, 512);

      // Subtle marble veining
      ctx.strokeStyle = 'rgba(201, 166, 107, 0.07)';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * 512, 0);
        ctx.bezierCurveTo(
          Math.random() * 512, 170,
          Math.random() * 512, 340,
          Math.random() * 512, 512
        );
        ctx.stroke();
      }

      // Elegant grid border
      ctx.strokeStyle = 'rgba(201, 166, 107, 0.15)';
      ctx.lineWidth = 1;
      ctx.strokeRect(4, 4, 504, 504);
    }

    const floorTexture = new THREE.CanvasTexture(floorCanvas);
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(10, 10);
    floorTexture.colorSpace = THREE.SRGBColorSpace;

    // Floor Mesh (Reflective ballroom stage)
    const floorGeo = new THREE.PlaneGeometry(60, 60);
    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTexture,
      roughness: 0.28,
      metalness: 0.65,
      color: 0x121418,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.5;
    floor.receiveShadow = true;
    scene.add(floor);

    // Architectural Pillars / Archways flanking the grand ballroom
    const pillarGeo = new THREE.CylinderGeometry(0.35, 0.45, 12, 32);
    const goldPillarMat = new THREE.MeshStandardMaterial({
      color: 0x24262b,
      metalness: 0.85,
      roughness: 0.35,
    });
    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xc9a66b,
      metalness: 0.95,
      roughness: 0.18,
    });

    const pillarsGroup = new THREE.Group();
    const pillarPositions = [
      [-6, 3, 2], [6, 3, 2],
      [-7.5, 3, -4], [7.5, 3, -4],
      [-9, 3, -10], [9, 3, -10],
    ];

    pillarPositions.forEach(([x, y, z]) => {
      const p = new THREE.Mesh(pillarGeo, goldPillarMat);
      p.position.set(x, y, z);
      p.castShadow = true;
      p.receiveShadow = true;

      // Gold capital ring
      const ringGeo = new THREE.TorusGeometry(0.48, 0.05, 16, 32);
      const ring = new THREE.Mesh(ringGeo, goldTrimMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(x, y + 4.5, z);

      const baseRing = new THREE.Mesh(ringGeo, goldTrimMat);
      baseRing.rotation.x = Math.PI / 2;
      baseRing.position.set(x, y - 5.2, z);

      pillarsGroup.add(p);
      pillarsGroup.add(ring);
      pillarsGroup.add(baseRing);
    });
    scene.add(pillarsGroup);

    // Grand Tiered Chandelier (Centerpiece)
    const chandelierGroup = new THREE.Group();
    chandelierGroup.position.set(0, 4.2, 0);

    // Chandelier Gold Rings
    const ringTiers = [
      { radius: 2.8, tube: 0.04, y: 0 },
      { radius: 1.9, tube: 0.04, y: -0.8 },
      { radius: 1.0, tube: 0.035, y: -1.6 },
    ];

    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.92,
      opacity: 1,
      transparent: true,
      roughness: 0.08,
      ior: 1.55,
      thickness: 0.5,
      attenuationColor: new THREE.Color(0xffedd5),
      attenuationDistance: 0.5,
    });

    ringTiers.forEach((tier) => {
      const ringGeo = new THREE.TorusGeometry(tier.radius, tier.tube, 16, 64);
      const ring = new THREE.Mesh(ringGeo, goldTrimMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = tier.y;
      chandelierGroup.add(ring);

      // Cascading crystal droplets around the ring
      const count = Math.floor(tier.radius * 24);
      const dropletGeo = new THREE.ConeGeometry(0.04, 0.45, 6);
      dropletGeo.rotateX(Math.PI);

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const crystal = new THREE.Mesh(dropletGeo, crystalMat);
        const cx = Math.cos(angle) * tier.radius;
        const cz = Math.sin(angle) * tier.radius;
        crystal.position.set(cx, tier.y - 0.25, cz);
        chandelierGroup.add(crystal);
      }
    });

    // Central Chandelier Warm Core Light
    const chandelierLight = new THREE.PointLight(0xffdfa9, 3.5, 18, 1.2);
    chandelierLight.position.set(0, 0, 0);
    chandelierLight.castShadow = true;
    chandelierLight.shadow.bias = -0.0005;
    chandelierGroup.add(chandelierLight);

    scene.add(chandelierGroup);

    // Stage Spotlights (Dramatic event cones)
    const spotLeft = new THREE.SpotLight(0xc9a66b, 5, 25, Math.PI / 6, 0.4, 1.5);
    spotLeft.position.set(-8, 8, 3);
    spotLeft.target.position.set(0, -1, 0);
    scene.add(spotLeft);
    scene.add(spotLeft.target);

    const spotRight = new THREE.SpotLight(0xe0c38b, 4.5, 25, Math.PI / 6, 0.4, 1.5);
    spotRight.position.set(8, 8, 3);
    spotRight.target.position.set(0, -1, 0);
    scene.add(spotRight);
    scene.add(spotRight.target);

    // Ambient lighting for rich shadows
    const ambientLight = new THREE.AmbientLight(0x28231d, 1.2);
    scene.add(ambientLight);

    // Starlight Dust / Gold Bokeh Particles
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 22;
      particlePositions[i * 3 + 1] = Math.random() * 12 - 2;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      particleSpeeds[i] = 0.2 + Math.random() * 0.4;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Custom circle particle texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext('2d');
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 30);
      grad.addColorStop(0, 'rgba(247, 243, 235, 1)');
      grad.addColorStop(0.3, 'rgba(201, 166, 107, 0.8)');
      grad.addColorStop(1, 'rgba(201, 166, 107, 0)');
      pCtx.fillStyle = grad;
      pCtx.beginPath();
      pCtx.arc(32, 32, 30, 0, Math.PI * 2);
      pCtx.fill();
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse movement listener for subtle parallax
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      sceneParams.current.mouseTarget.x = normX * 0.6;
      sceneParams.current.mouseTarget.y = normY * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle window resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Update Lighting Presets smoothly
      if (sceneParams.current.preset === 'royal-gold') {
        chandelierLight.color.setHex(0xffdfa9);
        spotLeft.color.setHex(0xc9a66b);
        spotRight.color.setHex(0xe0c38b);
        spotLeft.intensity = THREE.MathUtils.damp(spotLeft.intensity, 5.0, 3, delta);
        spotRight.intensity = THREE.MathUtils.damp(spotRight.intensity, 4.5, 3, delta);
      } else if (sceneParams.current.preset === 'midnight-noir') {
        chandelierLight.color.setHex(0xd8d1c5);
        spotLeft.color.setHex(0x9aa2b0);
        spotRight.color.setHex(0xb8c2d1);
        spotLeft.intensity = THREE.MathUtils.damp(spotLeft.intensity, 3.2, 3, delta);
        spotRight.intensity = THREE.MathUtils.damp(spotRight.intensity, 3.0, 3, delta);
      } else {
        // Starlight
        chandelierLight.color.setHex(0xffecc7);
        spotLeft.color.setHex(0xd1aa68);
        spotRight.color.setHex(0xdfba7a);
        spotLeft.intensity = THREE.MathUtils.damp(spotLeft.intensity, 6.2, 3, delta);
        spotRight.intensity = THREE.MathUtils.damp(spotRight.intensity, 5.8, 3, delta);
      }

      // Gentle chandelier rotation & shimmer
      chandelierGroup.rotation.y = elapsedTime * 0.04;
      chandelierGroup.position.y = 4.2 + Math.sin(elapsedTime * 0.5) * 0.08;

      // Particle drifting
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i] * delta * 0.4;
        if (positions[i * 3 + 1] > 9) {
          positions[i * 3 + 1] = -2;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Camera motion: mouse parallax + subtle organic drift
      const targetX = sceneParams.current.mouseTarget.x + (sceneParams.current.drift ? Math.sin(elapsedTime * 0.25) * 0.45 : 0);
      const targetY = 2.2 + sceneParams.current.mouseTarget.y + (sceneParams.current.drift ? Math.cos(elapsedTime * 0.2) * 0.2 : 0);

      camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 2.5, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 2.5, delta);
      camera.lookAt(0, 1.4, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Clean up Three.js resources
      floorGeo.dispose();
      floorMat.dispose();
      floorTexture.dispose();
      pillarGeo.dispose();
      goldPillarMat.dispose();
      goldTrimMat.dispose();
      crystalMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      {/* 3D Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {/* Fallback image if WebGL is unavailable */}
      {!hasWebGL && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80')` }}
        />
      )}

      {/* Cinematic Vignette Overlay to ensure text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/40 to-[#101114]/70" />
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-[#101114]/50 to-[#101114]/90" />
    </div>
  );
};

