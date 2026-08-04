const dotContainer = document.getElementById('cursor-dot-container');
        const ringContainer = document.getElementById('cursor-ring-container');
        const dot = document.getElementById('cursor-dot');
        const ring = document.getElementById('cursor-ring');

        let mouseX = 0, mouseY = 0;
        let dotX = 0, dotY = 0;
        let ringX = 0, ringY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            // Butter-smooth linear interpolation
            dotX += (mouseX - dotX) * 0.45;
            dotY += (mouseY - dotY) * 0.45;
            ringX += (mouseX - ringX) * 0.09;
            ringY += (mouseY - ringY) * 0.09;

            if (dotContainer) {
                dotContainer.style.transform = `translate3d(${dotX - 5}px, ${dotY - 5}px, 0)`;
            }
            if (ringContainer) {
                ringContainer.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
            }

            requestAnimationFrame(animateCursor);
        }
        requestAnimationFrame(animateCursor);

        // Hover expand bindings for custom cursor ring
        const interactiveElements = document.querySelectorAll('a, button, select, input, [onclick]');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (ring) ring.className = "w-12 h-12 border-2 border-leaf-400 bg-leaf-500/15 rounded-full shadow-[0_0_20px_rgba(105,226,133,0.3)] transition-all duration-300 ease-out -translate-x-2 -translate-y-2";
                if (dot) dot.className = "w-1.5 h-1.5 bg-white rounded-full transition-transform duration-200 ease-out";
            });
            el.addEventListener('mouseleave', () => {
                if (ring) ring.className = "w-8 h-8 border border-leaf-500/40 bg-leaf-500/5 rounded-full shadow-[0_0_15px_rgba(57,176,87,0.15)] transition-all duration-300 ease-out";
                if (dot) dot.className = "w-2.5 h-2.5 bg-leaf-400 rounded-full shadow-[0_0_8px_rgba(105,226,133,0.8)] transition-transform duration-200 ease-out";
            });
        });

        // Initialize Locomotive Scroll on window load
        let scroll;
        window.onload = function () {
            scroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                multiplier: 1.0,
                lerp: 0.1
            });
            
            // Handle cross-browser window resize updates for Locomotive
            setTimeout(() => {
                scroll.update();
            }, 500);

            // Set up custom navigation behavior for locomotive anchors
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        scroll.scrollTo(targetElement, {
                            offset: -80, // Accounts for the sticky header height
                            duration: 1200
                        });
                    }
                });
            });
        };

        // Season Theme Switcher logic (Smoothly transitions wrapper opacity & scaling)
        function changeSeason(season) {
            const heroImgWrapper = document.getElementById('hero-img-wrapper');
            const heroImg = document.getElementById('hero-img');
            const heroTag = document.getElementById('hero-img-tag');
            const heroDesc = document.getElementById('hero-img-desc');
            
            // Clear current button styles
            ['spring', 'autumn', 'winter'].forEach(s => {
                const btn = document.getElementById('btn-' + s);
                btn.className = "flex-1 py-1.5 px-3 text-xs font-bold rounded-lg bg-[#111f14]/50 text-slate-300 border border-leaf-950 hover:bg-[#18301d] transition-all";
            });
            
            // Set active button style
            document.getElementById('btn-' + season).className = "flex-1 py-1.5 px-3 text-xs font-bold rounded-lg bg-leaf-500 text-slate-950 transition-all border border-leaf-500 shadow-md";

            // Apply fade-out scale transition
            if (heroImgWrapper) {
                heroImgWrapper.classList.add('opacity-0', 'scale-[0.97]');
                setTimeout(() => {
                    if (season === 'spring') {
                        heroImg.src = "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80";
                        heroTag.innerText = "Ecosystem Research Canopy";
                        heroDesc.innerText = "Carbon Flux towers capturing forest canopy gas emissions.";
                    } else if (season === 'autumn') {
                        heroImg.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";
                        heroTag.innerText = "Deciduous Transpiration Cycle";
                        heroDesc.innerText = "Mapping organic nutrient decomposition in soil cycles.";
                    } else if (season === 'winter') {
                        heroImg.src = "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=800&q=80";
                        heroTag.innerText = "Sub-freezing Ground Telemetry";
                        heroDesc.innerText = "Studying soil microbe viability and nitrogen hibernation.";
                    }
                    
                    // Recover back into view
                    heroImgWrapper.classList.remove('opacity-0', 'scale-[0.97]');
                    if (scroll) scroll.update();
                }, 250);
            }
        }

        // Active Stations Switcher logic
        function toggleStation(station) {
            const displayCard = document.getElementById('station-display-card');
            const title = document.getElementById('station-title');
            const desc = document.getElementById('station-desc');
            const val1 = document.getElementById('station-val-1');
            const val2 = document.getElementById('station-val-2');
            const val3 = document.getElementById('station-val-3');
            const img = document.getElementById('station-img');

            // Clear current button styles
            ['wetlands', 'canopy', 'agriculture'].forEach(st => {
                const btn = document.getElementById('btn-' + st);
                btn.className = "w-full p-4 rounded-2xl border-2 border-transparent bg-slate-900/40 hover:bg-slate-900/60 text-left transition-all flex items-center justify-between";
                btn.querySelector('span').className = "font-heading font-bold text-slate-400 text-sm sm:text-base";
            });

            // Set active button style
            const activeBtn = document.getElementById('btn-' + station);
            activeBtn.className = "w-full p-4 rounded-2xl border-2 border-leaf-500 bg-[#050a06] text-left transition-all flex items-center justify-between";
            activeBtn.querySelector('span').className = "font-heading font-bold text-white text-sm sm:text-base";

            // Apply smooth out-and-in transition
            if (displayCard) {
                displayCard.classList.add('opacity-0', 'scale-[0.98]');
                setTimeout(() => {
                    if (station === 'wetlands') {
                        title.innerText = "Station Alpha: Marshland Basin Outpost";
                        desc.innerText = "Continuous wetland telemetry monitoring nitrogen and water pH cycles.";
                        val1.innerText = "6.82 (Neutral)";
                        val2.innerText = "8.4 mg/L";
                        val3.innerText = "0.45 m/s";
                        img.src = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80";
                    } else if (station === 'canopy') {
                        title.innerText = "Station Beta: Old Growth Forest Canopy";
                        desc.innerText = "Vertical flux tower tracking carbon absorption limits of old-growth trees.";
                        val1.innerText = "5.45 (Acidic Soil)";
                        val2.innerText = "94% Humid";
                        val3.innerText = "2.8 m/s (Wind)";
                        img.src = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80";
                    } else if (station === 'agriculture') {
                        title.innerText = "Station Gamma: Agro-Forestry Trial Fields";
                        desc.innerText = "Investigating mixed crop rotation with dense nitrogen-fixing foliage.";
                        val1.innerText = "7.10 (Alkaline)";
                        val2.innerText = "18% Moisture";
                        val3.innerText = "Organic Mix";
                        img.src = "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80";
                    }
                    
                    displayCard.classList.remove('opacity-0', 'scale-[0.98]');
                    if (scroll) scroll.update();
                }, 250);
            }
        }

        // Herbarium Data Database logic
        const herbariumDB = {
            palash: {
                family: "Fabaceae Family",
                name: "Butea monosperma (Palash)",
                desc: "Widely distributed across central India, noted for bright vermillion-colored blooms. Highly drought-resistant and dynamic nitrogen-fixing properties that revitalize dry, arid soils.",
                metric1: "Moderate to High",
                metric2: "5.5 – 8.5 (Vast)",
                img: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=800&q=80"
            },
            neem: {
                family: "Meliaceae Family",
                name: "Azadirachta indica (Neem)",
                desc: "Reputed for outstanding natural antibacterial, antiviral and biological pesticide traits. Highly adaptive in poor quality soils, contributing heavily to wind erosion mitigation.",
                metric1: "High Sequestration",
                metric2: "6.0 – 8.0 (Normal)",
                img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80"
            },
            banyan: {
                family: "Moraceae Family",
                name: "Ficus benghalensis (Banyan)",
                desc: "India's national tree, recognized for vast aerial roots. Houses over 40 species of nested birds, creating crucial micro-biodiversity nodes in both rural forests and concrete campuses.",
                metric1: "Extremely Premium",
                metric2: "5.0 – 7.5 (Acidic/Neutral)",
                img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
            }
        };

        function loadPlant(key) {
            const displayCard = document.getElementById('plant-display-card');

            // Update tag active styles
            ['palash', 'neem', 'banyan'].forEach(p => {
                const btn = document.getElementById('plant-' + p);
                btn.className = "py-2.5 px-5 rounded-full text-xs sm:text-sm font-bold transition-all bg-[#09120c]/70 text-slate-300 border border-leaf-950 hover:border-leaf-400";
            });
            document.getElementById('plant-' + key).className = "py-2.5 px-5 rounded-full text-xs sm:text-sm font-bold transition-all bg-leaf-500 text-slate-950 shadow-md";

            // Apply fade-out scale transition to species card container
            if (displayCard) {
                displayCard.classList.add('opacity-0', 'scale-[0.98]');
                setTimeout(() => {
                    const data = herbariumDB[key];
                    document.getElementById('plant-family').innerText = data.family;
                    document.getElementById('plant-name').innerText = data.name;
                    document.getElementById('plant-desc').innerText = data.desc;
                    document.getElementById('plant-metric-1').innerText = data.metric1;
                    document.getElementById('plant-metric-2').innerText = data.metric2;
                    document.getElementById('plant-img').src = data.img;

                    displayCard.classList.remove('opacity-0', 'scale-[0.98]');
                    if (scroll) scroll.update();
                }, 250);
            }
        }

        // Eco-Calculator Logic with gentle update pulse
        function calculateCanopy() {
            const qty = parseFloat(document.getElementById('saplingInput').value) || 0;
            const factor = parseFloat(document.getElementById('saplingType').value) || 0;
            const finalResult = qty * factor;
            
            const resultBox = document.getElementById('result-box');
            if (resultBox) {
                resultBox.classList.add('opacity-40', 'scale-95');
                setTimeout(() => {
                    document.getElementById('calcResult').innerText = finalResult.toLocaleString();
                    resultBox.classList.remove('opacity-40', 'scale-95');
                }, 150);
            }
        }