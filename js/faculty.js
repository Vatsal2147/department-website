
// Header Scroll State


// Custom Pointer Animations
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

window.addEventListener('mousemove', (e) => {
  gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 });
  gsap.to(cursorRing, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' });
});

// Add hover scale effect to interactive elements
const interactiveEls = document.querySelectorAll('a, button, .faculty-card');
interactiveEls.forEach(el => {
  el.addEventListener('mouseenter', () => {
    gsap.to(cursorRing, { width: 50, height: 50, borderColor: 'rgba(0, 242, 200, 0.8)', duration: 0.2 });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(cursorRing, { width: 32, height: 32, borderColor: 'rgba(0, 242, 200, 0.3)', duration: 0.2 });
  });
});

// Hero Animations
window.addEventListener('DOMContentLoaded', () => {
  const heroTl = gsap.timeline();

  heroTl
    .from('.hero-badge', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' })
    .from('.hero-title .title-line span', { opacity: 0, y: 50, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.5')
    .from('.hero-description', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .from('.hero-metrics', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.6');

  // Animated Counter for Metrics
  const metricValues = document.querySelectorAll('.metric-val');
  metricValues.forEach(metric => {
    const target = +metric.getAttribute('data-target');
    gsap.to(metric, {
      innerText: target,
      duration: 2,
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: metric,
        start: 'top 90%'
      }
    });
  });

  // Faculty Cards Stagger Reveal
  gsap.from('.faculty-card', {
    opacity: 0,
    y: 60,
    duration: 0.9,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#facultyList',
      start: 'top 80%'
    }
  });

  // Sticky Cluster Cards Reveal
  gsap.from('.cluster-card', {
    opacity: 0,
    x: 40,
    stagger: 0.25,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.research-sticky-section',
      start: 'top 65%'
    }
  });
});

// Category Filter Functionality
const filterTabs = document.querySelectorAll('.tab-btn');
const facultyCards = document.querySelectorAll('.faculty-card');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filterVal = tab.getAttribute('data-filter');

    facultyCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filterVal === 'all' || category === filterVal) {
        gsap.to(card, {
          display: 'block',
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      } else {
        gsap.to(card, {
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            card.style.display = 'none';
          }
        });
      }
    });
  });
});

// Real-time Search Filter
// Reliable Real-time Search & Filter Handler
const facultySearch = document.getElementById('facultySearch');

if (facultySearch) {
  facultySearch.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    facultyCards.forEach((card) => {
      // 1. Kill any running GSAP animations on this card to prevent race conditions
      gsap.killTweensOf(card);

      // 2. Extract targeted field values for accurate filtering
      const name = card.querySelector('.faculty-name')?.textContent.toLowerCase() || '';
      const designation = card.querySelector('.faculty-designation')?.textContent.toLowerCase() || '';
      const category = card.querySelector('.category-pill')?.textContent.toLowerCase() || '';
      const infoFields = Array.from(card.querySelectorAll('.info-val'))
        .map(el => el.textContent.toLowerCase())
        .join(' ');

      const combinedText = `${name} ${designation} ${category} ${infoFields}`;
      const isMatch = combinedText.includes(query);

      // 3. Handle visibility transitions safely
      if (isMatch) {
        // Remove inline display override so standard CSS grid rules apply
        card.style.display = '';
        gsap.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else {
        gsap.to(card, {
          opacity: 0,
          scale: 0.96,
          duration: 0.25,
          ease: 'power2.in',
          overwrite: 'auto',
          onComplete: () => {
            // Re-verify query state in case user typed mid-animation
            const currentQuery = facultySearch.value.trim().toLowerCase();
            if (!combinedText.includes(currentQuery)) {
              card.style.display = 'none';
            }
          }
        });
      }
    });
  });
}