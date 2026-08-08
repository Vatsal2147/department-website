/* ==========================================================================
   ESED IIT BOMBAY - ABOUT PAGE SCRIPT
   Handles: Lenis Smooth Scroll, Three.js 3D Background, GSAP Animations,
   Interactive Mouse Cursor, Number Counters & UI Interactions.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  /* ------------------------------------------------------------------------
     1. LENIS SMOOTH SCROLL INITIALIZATION
     ------------------------------------------------------------------------ */
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Synchronize ScrollTrigger with Lenis
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0, 0);


  /* ------------------------------------------------------------------------
     2. CUSTOM CURSOR FOLLOWER
     ------------------------------------------------------------------------ */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');

  if (window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.set(cursor, { x: mouseX, y: mouseY });
    });

    gsap.ticker.add(() => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      gsap.set(follower, { x: followerX, y: followerY });
    });

    // Hover effect for interactive elements
    const hoverables = document.querySelectorAll('a, button, .program-card, .area-card, .node');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
  } else {
    if (cursor) cursor.style.display = 'none';
    if (follower) follower.style.display = 'none';
  }


  /* ------------------------------------------------------------------------
     3. THREE.JS SUBTLE ENVIRONMENTAL 3D BACKGROUND
     Floating Organic Node Mesh with Particle Field
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById('hero-canvas');
  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Swarm Geometry (Representing ecological data points)
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 60;
      positions[i + 1] = (Math.random() - 0.5) * 60;
      positions[i + 2] = (Math.random() - 0.5) * 40;
      scales[i / 3] = Math.random();
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Shader Material
    const material = new THREE.PointsMaterial({
      color: 0x4caf82,
      size: 0.35,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Abstract Icosahedron Core (Representing Environmental Earth Dynamics)
    const coreGeo = new THREE.IcosahedronGeometry(12, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(15, -5, -10);
    scene.add(coreMesh);

    // Mouse Interaction Parallax
    let targetX = 0;
    let targetY = 0;
    window.addEventListener('mousemove', (e) => {
      targetX = (e.clientX - window.innerWidth / 2) * 0.001;
      targetY = (e.clientY - window.innerHeight / 2) * 0.001;
    });

    // Animation Loop
    const clock = new THREE.Clock();
    function animate3D() {
      const elapsedTime = clock.getElapsedTime();

      // Rotate Wireframe Core
      coreMesh.rotation.x = elapsedTime * 0.05;
      coreMesh.rotation.y = elapsedTime * 0.08;

      // Subtle Particle Wave Movement
      const pos = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pos[i3 + 1] += Math.sin(elapsedTime + pos[i3]) * 0.005;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Parallax smooth interpolation
      camera.position.x += (targetX * 10 - camera.position.x) * 0.05;
      camera.position.y += (-targetY * 10 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      requestAnimationFrame(animate3D);
    }
    animate3D();

    // Window Resize Handler
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }


  /* ------------------------------------------------------------------------
     4. GSAP ENTRANCE & SCROLL-TRIGGERED ANIMATIONS
     ------------------------------------------------------------------------ */

  // A. Hero Revealed Text Sequence (Smooth ~0.3s-0.5s staggered reveal)
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

  heroTl.to('.hero-badge.reveal-text', { opacity: 1, y: 0, delay: 0.2 })
        .to('.hero-title.reveal-text', { opacity: 1, y: 0 }, '-=0.7')
        .to('.hero-subtitle.reveal-text', { opacity: 1, y: 0 }, '-=0.7')
        .to('.hero-tagline.reveal-text', { opacity: 1, y: 0 }, '-=0.7')
        .to('.scroll-indicator.reveal-text', { opacity: 1, y: 0 }, '-=0.5');

  // B. Sticky Glass Navbar Scroll Transition
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // C. Generic Reveal Headings & Upwards Elements
  const revealHeadings = document.querySelectorAll('.reveal-heading');
  revealHeadings.forEach((heading) => {
    gsap.to(heading, {
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    });
  });

  const revealUps = document.querySelectorAll('.reveal-up');
  revealUps.forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out'
    });
  });

  // D. Timeline Horizontal Progress & Node Reveals
  const timelineProgress = document.querySelector('.timeline-progress');
  if (timelineProgress) {
    gsap.to(timelineProgress, {
      scrollTrigger: {
        trigger: '.timeline-wrapper',
        start: 'top 70%',
        end: 'bottom 60%',
        scrub: 0.5
      },
      width: '100%'
    });
  }

  const timelineCards = document.querySelectorAll('.reveal-timeline');
  timelineCards.forEach((card, idx) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: idx * 0.15,
      ease: 'power3.out'
    });
  });

  // E. Number Counter Animation for Faculty Statistics
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach((num) => {
    const target = parseInt(num.getAttribute('data-target'), 10);
    gsap.to(num, {
      scrollTrigger: {
        trigger: num,
        start: 'top 85%',
        once: true
      },
      innerText: target,
      duration: 2,
      snap: { innerText: 1 },
      ease: 'power2.out'
    });
  });


  /* ------------------------------------------------------------------------
     5. INTERACTIVE RESEARCH ECOSYSTEM NODES
     ------------------------------------------------------------------------ */
  const nodes = document.querySelectorAll('.node');
  nodes.forEach((node) => {
    const fullName = node.getAttribute('data-full');
    
    // Create tooltip element on hover
    node.addEventListener('mouseenter', (e) => {
      const tooltip = document.createElement('div');
      tooltip.className = 'node-tooltip';
      tooltip.innerText = fullName;
      tooltip.style.cssText = `
        position: absolute;
        bottom: -32px;
        left: 50%;
        transform: translateX(-50%);
        background: #10b981;
        color: #000;
        padding: 2px 10px;
        font-size: 0.7rem;
        font-weight: 700;
        border-radius: 4px;
        white-space: nowrap;
        pointer-events: none;
        z-index: 10;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      `;
      node.appendChild(tooltip);
    });

    node.addEventListener('mouseleave', () => {
      const tooltip = node.querySelector('.node-tooltip');
      if (tooltip) tooltip.remove();
    });
  });


  /* ------------------------------------------------------------------------
     6. MOBILE MENU TOGGLE
     ------------------------------------------------------------------------ */
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }
});