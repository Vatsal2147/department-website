document.addEventListener('DOMContentLoaded', () => {

    console.log("script.js loaded successfully!");

    // 1. INITIALIZE LENIS SMOOTH SCROLL
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1
    });

    // Sync Lenis scroll ticks with GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 2. CUSTOM MOUSE POINTER LOGIC
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Instant update for inner dot
        gsap.to(cursorDot, {
            x: mouseX,
            y: mouseY,
            duration: 0.05
        });
    });

    // Smooth follower ring loop
    function renderCursor() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        gsap.set(cursorRing, {
            x: ringX,
            y: ringY
        });

        requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Hover effect over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .story-block, .stat-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovered'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovered'));
    });

    // 3. STAT COUNTER ANIMATION (0 -> TARGET)
    let statsAnimated = false;

    function animateCounters() {
        if (statsAnimated) return;
        statsAnimated = true;

        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const duration = 2200; // ms
            const start = 0;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                
                // Ease-out quad function for clean deceleration
                const easeProgress = 1 - (1 - progress) * (1 - progress);
                const currentValue = Math.floor(easeProgress * (target - start) + start);

                counter.textContent = currentValue;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            }

            requestAnimationFrame(updateCounter);
        });
    }

    // Trigger counter when section enters viewport
    ScrollTrigger.create({
        trigger: "#stats-section",
        start: "top 85%",
        onEnter: () => animateCounters()
    });

    // 4. GSAP ENTRANCE ANIMATIONS
    gsap.from('.hero-subtag', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.title-line', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.2,
        delay: 0.4,
        ease: 'power4.out'
    });

    gsap.from('.stats-grid .stat-item', {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.15,
        delay: 0.8,
        ease: 'power3.out'
    });

    // Reveal story blocks on scroll
    gsap.utils.toArray('.story-block').forEach((block) => {
        gsap.from(block, {
            scrollTrigger: {
                trigger: block,
                start: "top 85%"
            },
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power3.out"
        });
    });
});