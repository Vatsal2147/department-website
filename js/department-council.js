const members = [
  { name: 'Ayush Agarwal', role: 'DGSec' },
  { name: 'Yazhini Sathiemoorthy', role: 'PG Representative' },
  { name: 'Tushar Prajapat', role: 'Joint Secretary' },
  { name: 'Harshita Jaiswal', role: 'Industrial Outreach Secretary' },
  { name: 'Vatsal Shah', role: 'Web Secretary' },
  { name: 'Ankit Sinha', role: 'Media and Design Secretary' },
  { name: 'Arnav Suprabhat Ganguly', role: 'Cultural Secretary' },
  { name: 'Sarthak Vinay Agrawal', role: 'Sports Secretary (UG)' },
  { name: 'Pabitra Ranjan Das', role: 'Sports Secretary (PG)' },
  { name: 'Daksh Meena', role: 'Alumni Secretary' }
];

/* ---------------------------------------------------------
   LENIS — same smooth-scroll behaviour as the Student Hub
--------------------------------------------------------- */
/* Lenis is optional at runtime so the cursor can never be blocked by a CDN failure. */
const lenis = window.Lenis ? new Lenis({
  duration: 1.15,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: false
}) : null;

if (lenis) {
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// Smooth anchor links without fighting Lenis.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    const target = id && document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: -60, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---------------------------------------------------------
   CUSTOM POINTER — independent of Three.js / Lenis
--------------------------------------------------------- */
(() => {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring || !window.matchMedia('(pointer: fine)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let dotX = mouseX, dotY = mouseY;
  let ringX = mouseX, ringY = mouseY;

  document.documentElement.classList.add('has-custom-cursor');

  window.addEventListener('pointermove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  }, { passive: true });

  const updateCursor = () => {
    dotX += (mouseX - dotX) * 0.55;
    dotY += (mouseY - dotY) * 0.55;
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    // Keep transforms for centering only; position is updated via left/top.
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(updateCursor);
  };
  requestAnimationFrame(updateCursor);

  const setHover = (on) => document.body.classList.toggle('hovering', on);

  // Delegated events also work for elements created after page load.
  document.addEventListener('pointerover', (event) => {
    const target = event.target.closest?.('a, button, select, input, .member-card, .scroll-cue');
    if (target) setHover(true);
  });
  document.addEventListener('pointerout', (event) => {
    const from = event.target.closest?.('a, button, select, input, .member-card, .scroll-cue');
    const to = event.relatedTarget?.closest?.('a, button, select, input, .member-card, .scroll-cue');
    if (from && !to) setHover(false);
  });

  window.addEventListener('blur', () => setHover(false));
})();

/* ---------------------------------------------------------
   THREE.JS — living council network in the hero background
--------------------------------------------------------- */
const container = document.querySelector('#three-container');
if (!container || !window.THREE) {
  console.warn('Three.js could not be loaded; the rest of the page remains active.');
} else {

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x061e0d, 0.075);

const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
camera.position.set(0, 0, 10.5);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);
container.appendChild(renderer.domElement);

const network = new THREE.Group();
scene.add(network);

const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x35f04f });
const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xeaff03 });
const nodes = [];
const nodePositions = [];

function makeNode(i, radius = 2.55) {
  // Fibonacci-sphere distribution keeps all 10 responsibilities visually balanced.
  const phi = Math.acos(1 - 2 * (i + 0.5) / members.length);
  const theta = Math.PI * (1 + Math.sqrt(5)) * i;
  const p = new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
  nodePositions.push(p.clone());

  const g = new THREE.SphereGeometry(i === 0 ? 0.14 : 0.095, 18, 18);
  const mesh = new THREE.Mesh(g, i === 0 ? coreMaterial : nodeMaterial.clone());
  mesh.position.copy(p);
  mesh.userData = { index: i };
  network.add(mesh);
  nodes.push(mesh);

  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    color: 0x07da2e,
    transparent: true,
    opacity: 0.16,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  }));
  glow.scale.set(0.7, 0.7, 0.7);
  glow.position.copy(p);
  network.add(glow);
}

members.forEach((_, i) => makeNode(i));

/* Connect each person to their nearest responsibilities. */
const lineMaterial = new THREE.LineBasicMaterial({
  color: 0x07da2e,
  transparent: true,
  opacity: 0.16,
  blending: THREE.AdditiveBlending
});
const edges = new Set();
for (let i = 0; i < nodePositions.length; i++) {
  const nearest = nodePositions
    .map((p, j) => ({ j, d: p.distanceTo(nodePositions[i]) }))
    .filter(x => x.j !== i)
    .sort((a, b) => a.d - b.d)
    .slice(0, 3);

  nearest.forEach(({ j }) => {
    const key = [i, j].sort((a, b) => a - b).join('-');
    if (edges.has(key)) return;
    edges.add(key);
    const geo = new THREE.BufferGeometry().setFromPoints([nodePositions[i], nodePositions[j]]);
    network.add(new THREE.Line(geo, lineMaterial));
  });
}

/* Background particles. */
const starGeo = new THREE.BufferGeometry();
const starCount = 850;
const starPositions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i += 3) {
  starPositions[i] = (Math.random() - 0.5) * 18;
  starPositions[i + 1] = (Math.random() - 0.5) * 12;
  starPositions[i + 2] = (Math.random() - 0.5) * 12;
}
starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
const starMat = new THREE.PointsMaterial({ color: 0x35f04f, size: 0.018, transparent: true, opacity: 0.48 });
const stars = new THREE.Points(starGeo, starMat);
scene.add(stars);

/* Three tilted orbital rings. */
for (let i = 0; i < 3; i++) {
  const ringGeo = new THREE.TorusGeometry(3.05 + i * 0.38, 0.008, 8, 180);
  const ringMat = new THREE.MeshBasicMaterial({
    color: i === 0 ? 0x35f04f : 0x07da2e,
    transparent: true,
    opacity: 0.13 - i * 0.025
  });
  const orbit = new THREE.Mesh(ringGeo, ringMat);
  orbit.rotation.set(0.55 + i * 0.42, 0.4 + i * 0.68, i * 0.75);
  orbit.userData.spin = 0.0008 + i * 0.0003;
  network.add(orbit);
}

/* ---------------------------------------------------------
   NODE INTERACTION
--------------------------------------------------------- */
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2(-10, -10);
const tooltip = document.createElement('div');
tooltip.className = 'three-tooltip';
document.body.appendChild(tooltip);

renderer.domElement.addEventListener('pointermove', (e) => {
  const r = renderer.domElement.getBoundingClientRect();
  pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
  pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
});
renderer.domElement.addEventListener('pointerleave', () => {
  pointer.set(-10, -10);
  tooltip.style.display = 'none';
});

const cards = [...document.querySelectorAll('.member-card')];
cards.forEach((card) => {
  card.addEventListener('click', () => focusNode(Number(card.dataset.member)));
});

let focusIndex = null;
let focusTimer = null;
function focusNode(index) {
  focusIndex = index;
  clearTimeout(focusTimer);
  nodes.forEach((n, i) => {
    n.scale.setScalar(i === index ? 2.1 : 1);
    n.material.color.setHex(i === index ? 0xeaff03 : 0x35f04f);
  });
  cards.forEach((card, i) => card.classList.toggle('is-focused', i === index));
  focusTimer = setTimeout(() => {
    focusIndex = null;
    nodes.forEach((n, i) => n.material.color.setHex(i === 0 ? 0xeaff03 : 0x35f04f));
    cards.forEach(card => card.classList.remove('is-focused'));
  }, 1800);
}

/* Mouse movement changes the viewing angle without killing the continuous rotation. */
let pointerTiltX = 0;
let pointerTiltY = 0;
window.addEventListener('mousemove', (e) => {
  pointerTiltY = (e.clientX / innerWidth - 0.5) * 0.55;
  pointerTiltX = (e.clientY / innerHeight - 0.5) * 0.34;
}, { passive: true });

function resize() {
  const w = Math.max(container.clientWidth, 1);
  const h = Math.max(container.clientHeight, 1);
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
resize();
window.addEventListener('resize', resize);

const clock = new THREE.Clock();
function animate() {
  const t = clock.getElapsedTime();

  // Continuous motion + gentle pointer tilt.
  network.rotation.y = t * 0.12 + pointerTiltY;
  network.rotation.x = Math.sin(t * 0.16) * 0.05 + pointerTiltX;
  network.rotation.z = Math.sin(t * 0.11) * 0.025;
  stars.rotation.y = t * 0.006;
  stars.rotation.x = Math.sin(t * 0.08) * 0.02;

  network.children.forEach((child) => {
    if (child.userData?.spin) child.rotation.z += child.userData.spin;
  });

  nodes.forEach((node, i) => {
    if (focusIndex !== i) {
      const pulse = 1 + Math.sin(t * 1.6 + i * 0.7) * 0.10;
      node.scale.setScalar(pulse);
    }
  });

  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(nodes, false);
  if (hits.length) {
    const index = hits[0].object.userData.index;
    const member = members[index];
    tooltip.innerHTML = `<b>${member.name}</b><small>${member.role.toUpperCase()}</small>`;
    tooltip.style.left = `${mouseX + 18}px`;
    tooltip.style.top = `${mouseY + 18}px`;
    tooltip.style.display = 'block';
    document.body.classList.add('hovering');
  } else {
    tooltip.style.display = 'none';
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
}
