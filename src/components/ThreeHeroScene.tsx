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
    // Calibrated linear depth fog for crystal-clear foreground architecture
    scene.fog = new THREE.Fog(0x101114, 18, 54);

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
    renderer.toneMappingExposure = 1.45;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Procedural Floor Texture (Lacquered black marble with radiant golden veining)
    const floorCanvas = document.createElement('canvas');
    floorCanvas.width = 512;
    floorCanvas.height = 512;
    const ctx = floorCanvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#131418';
      ctx.fillRect(0, 0, 512, 512);

      // Delicate luxury marble veining with golden champagne highlights
      ctx.strokeStyle = 'rgba(224, 195, 139, 0.18)';
      ctx.lineWidth = 1.8;
      for (let i = 0; i < 9; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * 512, 0);
        ctx.bezierCurveTo(
          Math.random() * 512, 160,
          Math.random() * 512, 350,
          Math.random() * 512, 512
        );
        ctx.stroke();
      }

      // Fine ivory hairline veining
      ctx.strokeStyle = 'rgba(247, 243, 235, 0.08)';
      ctx.lineWidth = 1.0;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(0, Math.random() * 512);
        ctx.bezierCurveTo(170, Math.random() * 512, 340, Math.random() * 512, 512, Math.random() * 512);
        ctx.stroke();
      }

      // Elegant gold grid frame
      ctx.strokeStyle = 'rgba(201, 166, 107, 0.22)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(3, 3, 506, 506);
    }

    const floorTexture = new THREE.CanvasTexture(floorCanvas);
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(10, 10);
    floorTexture.colorSpace = THREE.SRGBColorSpace;

    // Floor Mesh (High-gloss reflective ballroom stage with real clearcoat mirror reflections)
    const floorGeo = new THREE.PlaneGeometry(60, 60);
    const floorMat = new THREE.MeshPhysicalMaterial({
      map: floorTexture,
      roughness: 0.12,
      metalness: 0.82,
      clearcoat: 0.85,
      clearcoatRoughness: 0.08,
      reflectivity: 0.92,
      color: 0x111317,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.5;
    floor.receiveShadow = true;
    scene.add(floor);

    // Architectural Pillars / Archways flanking the grand ballroom
    const pillarGeo = new THREE.CylinderGeometry(0.35, 0.45, 12, 32);
    const goldPillarMat = new THREE.MeshStandardMaterial({
      color: 0x282b32,
      metalness: 0.9,
      roughness: 0.25,
    });
    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.98,
      roughness: 0.12,
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

    // Grand Tiered Chandelier (Centerpiece - Scaled for maximum prominence)
    const isInitialDesktop = width >= 1024;
    const chandelierGroup = new THREE.Group();
    chandelierGroup.position.set(isInitialDesktop ? 2.4 : 0, 4.3, 0);

    // Chandelier Gold Rings - Expanded radius & tube for luxury presence
    const ringTiers = [
      { radius: 3.4, tube: 0.05, y: 0.2 },
      { radius: 2.3, tube: 0.045, y: -0.75 },
      { radius: 1.35, tube: 0.038, y: -1.7 },
    ];

    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.96,
      opacity: 1,
      transparent: true,
      roughness: 0.04,
      ior: 1.62,
      thickness: 0.8,
      attenuationColor: new THREE.Color(0xfff0db),
      attenuationDistance: 0.8,
      specularIntensity: 1.0,
    });

    ringTiers.forEach((tier) => {
      const ringGeo = new THREE.TorusGeometry(tier.radius, tier.tube, 16, 64);
      const ring = new THREE.Mesh(ringGeo, goldTrimMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = tier.y;
      chandelierGroup.add(ring);

      // Cascading crystal droplets around the ring
      const count = Math.floor(tier.radius * 28);
      const dropletGeo = new THREE.ConeGeometry(0.048, 0.58, 6);
      dropletGeo.rotateX(Math.PI);

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const crystal = new THREE.Mesh(dropletGeo, crystalMat);
        const cx = Math.cos(angle) * tier.radius;
        const cz = Math.sin(angle) * tier.radius;
        crystal.position.set(cx, tier.y - 0.28, cz);
        chandelierGroup.add(crystal);
      }
    });

    // Central Chandelier Warm Core Light
    const chandelierLight = new THREE.PointLight(0xffe2b8, 8.0, 28, 1.1);
    chandelierLight.position.set(0, 0, 0);
    chandelierLight.castShadow = true;
    chandelierLight.shadow.bias = -0.0005;
    chandelierGroup.add(chandelierLight);

    // Lower crystal sparkle light
    const sparkleLight = new THREE.PointLight(0xffdfa9, 4.5, 14, 1.5);
    sparkleLight.position.set(0, -1.9, 0);
    chandelierGroup.add(sparkleLight);

    scene.add(chandelierGroup);

    // Stage Spotlights (Dramatic luxury golden cones)
    const spotLeft = new THREE.SpotLight(0xd4b078, 6.5, 30, Math.PI / 5.5, 0.45, 1.4);
    spotLeft.position.set(-8, 9, 3);
    spotLeft.target.position.set(0, -1, 0);
    scene.add(spotLeft);
    scene.add(spotLeft.target);

    const spotRight = new THREE.SpotLight(0xf0d5a3, 6.0, 30, Math.PI / 5.5, 0.45, 1.4);
    spotRight.position.set(8, 9, 3);
    spotRight.target.position.set(0, -1, 0);
    scene.add(spotRight);
    scene.add(spotRight.target);

    // Dedicated Architectural Column Rim Lights (Separating pillars from dark horizon)
    const rimLightLeft = new THREE.DirectionalLight(0xc9a66b, 3.8);
    rimLightLeft.position.set(-12, 12, -8);
    scene.add(rimLightLeft);

    const rimLightRight = new THREE.DirectionalLight(0xe0c38b, 3.2);
    rimLightRight.position.set(12, 12, -8);
    scene.add(rimLightRight);

    // Warm Ambient lighting for rich specular highlights
    const ambientLight = new THREE.AmbientLight(0x383228, 1.8);
    scene.add(ambientLight);

    // Starlight Dust / Radiant Gold Bokeh Particles
    const particleCount = 320;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 24;
      particlePositions[i * 3 + 1] = Math.random() * 14 - 2;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 22;
      particleSpeeds[i] = 0.25 + Math.random() * 0.45;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Custom radiant bokeh circle particle texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext('2d');
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 30);
      grad.addColorStop(0, 'rgba(255, 250, 240, 1)');
      grad.addColorStop(0.25, 'rgba(240, 215, 165, 0.95)');
      grad.addColorStop(0.65, 'rgba(201, 166, 107, 0.45)');
      grad.addColorStop(1, 'rgba(201, 166, 107, 0)');
      pCtx.fillStyle = grad;
      pCtx.beginPath();
      pCtx.arc(32, 32, 30, 0, Math.PI * 2);
      pCtx.fill();
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.26,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse movement listener with heightened responsiveness for noticeable 3D depth
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      sceneParams.current.mouseTarget.x = normX * 1.8;
      sceneParams.current.mouseTarget.y = normY * 1.0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Interactive pointer drag / orbit control
    let isDragging = false;
    let prevPointerX = 0;
    let dragOrbitX = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevPointerX = e.clientX;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPointerX;
      prevPointerX = e.clientX;
      dragOrbitX += deltaX * 0.005;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Handle window resize with responsive desktop offset
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      const isDesktop = newW >= 1024;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      chandelierGroup.position.x = isDesktop ? 2.4 : 0;
      spotLeft.target.position.x = isDesktop ? 2.4 : 0;
      spotRight.target.position.x = isDesktop ? 2.4 : 0;
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();
      const isDesktop = (container?.clientWidth || window.innerWidth) >= 1024;
      const focalX = isDesktop ? 2.4 : 0;

      // Noticeable continuous chandelier rotation & shimmer + interactive drag
      chandelierGroup.rotation.y = elapsedTime * 0.09 + dragOrbitX;
      chandelierGroup.position.y = 4.3 + Math.sin(elapsedTime * 0.6) * 0.12;

      // Dynamic golden stage spotlights sweeping across the chandelier & floor
      spotLeft.position.x = (isDesktop ? -4 : -8) + Math.sin(elapsedTime * 0.35) * 1.8;
      spotRight.position.x = (isDesktop ? 9 : 8) + Math.cos(elapsedTime * 0.3) * 1.8;
      spotLeft.target.position.set(focalX, -1, 0);
      spotRight.target.position.set(focalX, -1, 0);

      // Particle drifting
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i] * delta * 0.45;
        if (positions[i * 3 + 1] > 10) {
          positions[i * 3 + 1] = -2;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Camera motion: mouse parallax + subtle organic float + right-offset focus
      const targetX = (isDesktop ? 0.6 : 0) + sceneParams.current.mouseTarget.x + (sceneParams.current.drift ? Math.sin(elapsedTime * 0.25) * 0.5 : 0);
      const targetY = 2.2 + sceneParams.current.mouseTarget.y + (sceneParams.current.drift ? Math.cos(elapsedTime * 0.2) * 0.25 : 0);

      camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 2.5, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 2.5, delta);
      camera.lookAt(focalX, 1.4, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);

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

      {/* Subtle Perimeter Vignette (Preserves 100% center stage clarity while softly blending bottom) */}
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-transparent to-[#101114]/65" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#101114] to-transparent" />
    </div>
  );
};

