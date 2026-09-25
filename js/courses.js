document.addEventListener("DOMContentLoaded", () => {
  const COURSES = JSON.parse(document.getElementById("courseData").textContent);
  const grid = document.getElementById("courseGrid");
  const searchInput = document.getElementById("searchInput");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");
  const catalogSection = document.getElementById("course-catalog");
  const detailView = document.getElementById("courseDetail");
  const hero = document.querySelector(".courses-hero");
  const navbar = document.getElementById("siteNavbar");
  let activeFilter = "all";
  let lenis = null;

  /* ================================================================
     LENIS — same smooth-scroll treatment as the ESED website
     ================================================================ */
  if (window.Lenis) {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });
    function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }

  const scrollTo = (target, offset = -76) => {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset, duration: 1.2 });
    else el.scrollIntoView({behavior:"smooth",block:"start"});
  };

  /* ================================================================
     CUSTOM POINTER
     ================================================================ */
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (window.matchMedia("(pointer: fine)").matches && dot && ring) {
    let mouseX=0, mouseY=0, ringX=0, ringY=0;
    window.addEventListener("mousemove", e => { mouseX=e.clientX; mouseY=e.clientY; dot.style.left=`${mouseX}px`; dot.style.top=`${mouseY}px`; });
    function moveRing(){
      ringX += (mouseX-ringX)*.16; ringY += (mouseY-ringY)*.16;
      ring.style.left=`${ringX}px`; ring.style.top=`${ringY}px`;
      requestAnimationFrame(moveRing);
    }
    requestAnimationFrame(moveRing);
    document.addEventListener("mouseover", e => {
      if(e.target.closest("a,button,input,.course-card,.detail-tab")) document.body.classList.add("hovering");
    });
    document.addEventListener("mouseout", e => {
      if(e.target.closest("a,button,input,.course-card,.detail-tab")) document.body.classList.remove("hovering");
    });
  }

  /* Navbar state */
  window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 30), {passive:true});

  const esc = (v="") => String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
  const labelFor = course => course.programmes.length > 1 ? "B.TECH + M.TECH" : course.programmes[0].toUpperCase();
  const activeProgramme = course => activeFilter !== "all" && course.programmes.includes(activeFilter) ? activeFilter : course.programmes[0];
  const shortDescription = course => {
    const p=activeProgramme(course); const text=(course.descriptions?.[p] || "").replace(/\s+/g," ");
    return text.length>175 ? text.slice(0,172).trimEnd()+"…" : text;
  };

  function cardTemplate(course, index){
    const p=activeProgramme(course);
    const category=course.categories?.[p] || "";
    return `<article class="course-card" role="button" tabindex="0" data-code="${esc(course.code)}" data-index="${String(index+1).padStart(2,"0")}">
      <div class="course-card-top"><span class="course-code">${esc(course.code)}</span><span class="course-program">${esc(labelFor(course))}</span></div>
      <h3 class="course-title">${esc(course.title)}</h3>
      <p class="course-summary">${esc(shortDescription(course))}</p>
      <div class="course-bottom"><span class="course-category">${esc(category)}</span><span class="course-credit">${course.credits ? esc(course.credits)+" CR" : "—"} &nbsp;↗</span></div>
    </article>`;
  }

  function renderCards(){
    const q=searchInput.value.trim().toLowerCase();
    const filtered=COURSES.filter(c=>{
      const mf=activeFilter==="all" || c.programmes.includes(activeFilter);
      const text=(c.searchText || `${c.code} ${c.title}`).toLowerCase();
      return mf && (!q || text.includes(q) || c.title.toLowerCase().includes(q));
    });
    resultCount.textContent=`SHOWING ${filtered.length} COURSE${filtered.length===1?"":"S"}`;
    emptyState.hidden=filtered.length!==0;
    grid.innerHTML=filtered.map(cardTemplate).join("");
    grid.querySelectorAll(".course-card").forEach(card=>{
      const open=()=>openCourse(card.dataset.code);
      card.addEventListener("click",open);
      card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});
    });
  }

  function referencesFor(course, programme){ return course.references?.[programme] || []; }

  function renderDetail(code){
    const course=COURSES.find(c=>c.code===code);
    if(!course){ renderCatalog(false); return; }
    const programmeLabel=labelFor(course);
    const blocks=course.programmes.map(p=>{
      const refs=referencesFor(course,p);
      const desc=course.descriptions?.[p];
      return `<div class="detail-program-block">
        <h3>${esc(p)}</h3><div class="category">${esc(course.categories?.[p] || "")}</div>
        <div class="detail-panel content-panel" data-panel="content-${esc(p)}">${desc ? `<p>${esc(desc)}</p>` : `<div class="detail-note">The supplied bulletin lists this course for ${esc(p)}, but does not provide course-content text in the supplied course-details section.</div>`}</div>
        <div class="detail-panel refs-panel" data-panel="refs-${esc(p)}" hidden>${refs.length ? `<div class="references-list">${refs.map(r=>`<div class="reference-item">${esc(r)}</div>`).join("")}</div>` : `<div class="reference-empty">No Texts / References entry was provided for this course in the supplied ${esc(p)} bulletin.</div>`}</div>
      </div>`;
    }).join("");

    catalogSection.hidden=true; hero.hidden=true; detailView.hidden=false;
    detailView.innerHTML=`<div class="detail-hero"><div class="detail-lines"></div><div class="detail-hero-inner">
      <a class="back-link" href="#course-catalog" id="backToCourses">← ALL COURSES</a>
      <div class="detail-tags"><span class="detail-code">${esc(course.code)}</span><span class="detail-program">${esc(programmeLabel)}</span></div>
      <h1>${esc(course.title)}</h1>
    </div></div>
    <div class="detail-body"><div class="detail-stat-row">
      <div class="detail-stat"><small>CREDITS</small><strong>${course.credits ? esc(course.credits) : "—"}</strong></div>
      <div class="detail-stat"><small>TYPE</small><strong>${esc(course.type)}</strong></div>
      <div class="detail-stat"><small>PROGRAMME</small><strong>${esc(programmeLabel)}</strong></div>
    </div>
    <div class="detail-content">
      <div class="detail-tabs"><button class="detail-tab active" data-view="content">COURSE CONTENT</button><button class="detail-tab" data-view="refs">TEXTS / REFERENCES</button></div>
      <div id="detailContentPanel">${blocks}</div>
    </div></div>`;

    document.getElementById("backToCourses").addEventListener("click",e=>{e.preventDefault(); history.pushState({},"",location.pathname); renderCatalog(true);});
    const tabs=detailView.querySelectorAll(".detail-tab");
    tabs.forEach(tab=>tab.addEventListener("click",()=>{
      tabs.forEach(t=>t.classList.toggle("active",t===tab));
      const showRefs=tab.dataset.view==="refs";
      detailView.querySelectorAll(".content-panel").forEach(el=>el.hidden=showRefs);
      detailView.querySelectorAll(".refs-panel").forEach(el=>el.hidden=!showRefs);
    }));
    scrollTo(detailView,0);
  }

  function openCourse(code){ history.pushState({course:code},"",`#course/${encodeURIComponent(code)}`); renderDetail(code); }
  function renderCatalog(shouldScroll=true){
    catalogSection.hidden=false; hero.hidden=false; detailView.hidden=true; detailView.innerHTML=""; renderCards();
    if(shouldScroll) scrollTo(catalogSection, -76);
  }

  document.querySelectorAll(".filter-tab").forEach(btn=>btn.addEventListener("click",()=>{
    activeFilter=btn.dataset.filter;
    document.querySelectorAll(".filter-tab").forEach(b=>b.classList.toggle("active",b===btn));
    renderCards();
  }));
  searchInput.addEventListener("input",renderCards);
  document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",e=>{
    const href=link.getAttribute("href"); if(!href || href==="#") return;
    const target=document.querySelector(href); if(!target) return;
    e.preventDefault(); scrollTo(target,-76); history.replaceState({},"",href);
  }));
  window.addEventListener("popstate",route); window.addEventListener("hashchange",route);
  document.getElementById("countAll").textContent=`(${COURSES.length})`;
  document.getElementById("countUG").textContent=`(${COURSES.filter(c=>c.programmes.includes("B.Tech")).length})`;
  document.getElementById("countPG").textContent=`(${COURSES.filter(c=>c.programmes.includes("M.Tech")).length})`;
  function route(){ const m=location.hash.match(/^#course\/(.+)$/); if(m) renderDetail(decodeURIComponent(m[1])); else renderCatalog(false); }
  route();
});
