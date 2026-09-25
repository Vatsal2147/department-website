document.addEventListener("DOMContentLoaded", () => {
  /* ================================================================
     LENIS SMOOTH SCROLL
     Same smooth-scroll approach used across the ESED site.
     ================================================================ */
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false
  });

 /* =========================================
   YOUR SEMESTER, SORTED
========================================= */

const curriculum = {

    /* =================================================
       B.TECH
    ================================================= */

    btech: {

        label: "B.Tech.",

        semesters: {

            1: {
                credits: "33 credits",
                courses: [
                    ["DIC 1 (ES 101)", "Introduction to Environmental Science & Engineering", "Department Core", "6"],
                    ["MA 109", "Calculus I", "Basic Sciences and Mathematics", "4"],
                    ["MA 111", "Calculus II", "Basic Sciences and Mathematics", "4"],
                    ["CH 105", "Organic & Inorganic Chemistry", "Basic Sciences and Mathematics", "4"],
                    ["CH 107", "Physical Chemistry", "Basic Sciences and Mathematics", "4"],
                    ["MS 101", "Makerspace", "Engineering Sciences and Skills", "8"],
                    ["CH 117", "Chemistry Lab", "Basic Sciences and Mathematics", "3"],
                    ["NOCS 01", "NCC / NSS / NSO", "Non-Credited Compulsory Course", "—"],
                    ["GC 101", "Gender Sensitization Course", "Non-Credited Compulsory Course", "—"],
                    ["TA 101", "TA Course", "Non-Credited Compulsory Course", "—"]
                ]
            },

            2: {
                credits: "31 credits",
                courses: [
                    ["DIC 2 (ES 204)*", "Environmental Chemistry", "Department Core", "6"],
                    ["MA 106", "Linear Algebra", "Basic Sciences and Mathematics", "4"],
                    ["MA 108", "Differential Equations", "Basic Sciences and Mathematics", "4"],
                    ["PH 117", "Physics Lab", "Basic Sciences and Mathematics", "3"],
                    ["CS 101", "Computer Programming", "Engineering Sciences and Skills", "6"],
                    ["HSS / IDC / ENT", "Introduction to HASMED", "HASMED Core", "8"],
                    ["NOCS 01", "NCC / NSS / NSO", "Non-Credited Compulsory Course", "—"]
                ]
            },

            3: {
                credits: "30 credits",
                courses: [
                    ["ES 225", "AI and Data Science", "Engineering Sciences and Skills", "6"],
                    ["EC 101", "Economics", "HASMED Core", "6"],
                    ["ES 201", "Applied Environmental Microbiology and Ecology", "Department Core", "6"],
                    ["ES 317*", "Fundamentals of Air Pollution Science and Engineering", "Department Core", "6"],
                    ["ES 213 + ES 351*", "Environmental Microbiology Laboratory + Air Pollution Monitoring Laboratory", "Department Lab", "6"]
                ]
            },

            4: {
                credits: "30 credits",
                courses: [
                    ["DE 250", "Design Thinking", "HASMED Core", "6"],
                    ["ES 203*", "Water and Wastewater Engineering", "Department Core", "6"],
                    ["ES 664*", "Environmental Systems Modelling", "Department Core", "6"],
                    ["ES 208", "Mass Transfer Processes in Environmental Systems", "Department Core", "6"],
                    ["ES 252 + ES 319*", "Environmental Chemistry Lab + Computational Laboratory for Environmental Engineers", "Department Lab", "6"]
                ]
            },

            5: {
                credits: "30 credits",
                courses: [
                    ["ES 216*", "GIS Aided Environmental Planning and Management", "Department Core", "6"],
                    ["ES 315", "Solid Waste Management – Basic Principles and Technical Aspects", "Department Core", "6"],
                    ["ES 657*", "Water Resources and Environmental Hydraulics", "Department Core", "6"],
                    ["HASMED Elective-1", "HASMED Elective-1", "HASMED Elective", "6"],
                    ["ES 308 + ES 451*", "Solid and Hazardous Waste Laboratory + Environmental Field Studies", "Department Lab", "6"]
                ]
            },

            6: {
                credits: "30 credits",
                courses: [
                    ["—", "Department Elective - 1", "Department Electives", "6"],
                    ["—", "Department Elective - 2", "Department Electives", "6"],
                    ["—", "Flexible Elective - 1", "Flexible Elective", "6"],
                    ["—", "HASMED Elective-2", "HASMED Elective", "6"],
                    ["—", "Interdisciplinary STEM Elective-1", "STEM Elective", "6"]
                ]
            },

            7: {
                credits: "30 credits",
                courses: [
                    ["—", "Department Elective - 3", "Department Electives", "6"],
                    ["—", "Flexible Elective - 2", "Flexible Elective", "6"],
                    ["—", "BTP-1 / Departmental Elective - 4", "BTP / Equivalent Elective", "6"],
                    ["—", "Interdisciplinary STEM Elective-2", "STEM Elective", "6"],
                    ["—", "Interdisciplinary STEM Elective-3", "STEM Elective", "6"]
                ]
            },

            8: {
                credits: "30 credits",
                courses: [
                    ["—", "Flexible Elective - 3", "Flexible Elective", "6"],
                    ["—", "Flexible Elective - 4", "Flexible Elective", "6"],
                    ["—", "BTP - 2 / Dept Electives - 5 and 6", "BTP / Equivalent Elective", "12"],
                    ["—", "Flexible Elective - 5", "Flexible Elective", "6"]
                ]
            }
        }
    },


    /* =================================================
       M.TECH. TA
    ================================================= */

    mtech: {

        label: "M.Tech. TA",

        semesters: {

            1: {
                credits: "46 credits",
                courses: [
                    ["ES 631", "Environmental Chemistry", "Core Course", "6"],
                    ["ES 633", "Environmental Microbiology and Ecology", "Core Course", "6"],
                    ["ES 635", "Air Pollution Science and Engineering", "Core Course", "6"],
                    ["ES 637", "Municipal Water and Wastewater Systems", "Core Course", "6"],
                    ["ES 639", "Physico-Chemical Treatment Technologies", "Core Course", "6"],
                    ["ES 647", "Municipal Solid and Biomedical Waste Management", "Core Course", "6"],
                    ["ES 694", "Seminar for M.Tech. Programme", "Seminar", "4"],
                    ["ES 651", "Environmental Monitoring Laboratory", "Lab Course", "6"],
                    ["GC 101", "Gender in the Workplace", "Compulsory Course", "0"],
                    ["TA 101", "TASET", "Compulsory Course", "0"]
                ]
            },

            2: {
                credits: "39 / 33 credits",
                courses: [
                    ["ES 664", "Environmental Systems Modelling", "Core Course", "6"],
                    ["ES 666", "Biological Treatment Technologies", "Core Course", "6"],
                    ["ES 668", "Environmental Computation Lab", "Lab Course", "3"],
                    ["Elective-I", "Choose one from Elective-I", "Elective", "6"],
                    ["Elective-II", "Choose one from Elective-II", "Elective", "6"],
                    ["Elective-III", "Choose one from Elective-III", "Elective", "6"],
                    ["Institute Elective", "Institute Elective", "Institute Elective", "6"]
                ],

                electives: [
                    {
                        title: "Elective-I",
                        options: [
                            "ES 607 — Environmental Informatics",
                            "ES 670 — Environmental Statistics",
                            "ES 682 — Numerical Methods for Environmental Systems",
                            "ES 701 — Urban Water Management"
                        ]
                    },
                    {
                        title: "Elective-II",
                        options: [
                            "ES 602 — Aerosol Measurements: Principles, Techniques and Data Analysis",
                            "ES 616 — Energy Conversion and Environment",
                            "ES 624 — Hazardous Waste Management",
                            "ES 642 — Industrial Wastewater Management and Reuse",
                            "ES 644 — Industrial Pollution Prevention and Clean Technologies",
                            "ES 658a — Environmental Change and Sustainable Development"
                        ]
                    },
                    {
                        title: "Elective-III",
                        options: [
                            "ES 654 — Groundwater Flow and Contaminant Transport through Porous Media",
                            "ES 656 — Bioremediation - Principles and Applications",
                            "ES 672 — Air Pollution Control Technologies",
                            "ES 674 — Aerosol Science and Engineering",
                            "ES 676 — Membrane Processes",
                            "ES 680 — GIS for Environmental Planning and Management",
                            "ES 684 — Design of Water and Wastewater Systems"
                        ]
                    }
                ]
            },

            3: {
                credits: "54 / 60 credits",
                courses: [
                    ["Elective-IV", "Choose one from Elective-IV", "Elective", "6"],
                    ["Institute Elective", "Institute Elective", "Institute Elective", "6"],
                    ["ES 797", "I Stage Project", "R&D Project", "42"],
                    ["ES 899", "Communication Skills", "Communication", "6"]
                ],

                electives: [
                    {
                        title: "Elective-IV",
                        options: [
                            "ES 645 — Environmental Law and Policy",
                            "ES 653 — Environmental Impact Assessment",
                            "ES 655 — Environmental Management"
                        ]
                    }
                ]
            },

            4: {
                credits: "38 credits",
                courses: [
                    ["ES 798", "II Stage Project", "R&D Project", "38"]
                ]
            }
        }
    },


    /* =================================================
       M.TECH. RA
    ================================================= */

    mtechra: {

        label: "M.Tech. RA",

        semesters: {

            1: {
                credits: "24 credits",
                courses: [
                    ["ES 631", "Environmental Chemistry", "Core Course", "6"],
                    ["ES 633", "Environmental Microbiology and Ecology", "Core Course", "6"],
                    ["ES 635", "Air Pollution Science and Engineering", "Core Course", "6"],
                    ["ES 651", "Environmental Monitoring Laboratory", "Lab Course", "6"],
                    ["GC 101", "Gender in the Workplace", "Compulsory Course", "0"],
                    ["TA 101", "TASET", "Compulsory Course", "0"]
                ]
            },

            2: {
                credits: "21 credits",
                courses: [
                    ["ES 666", "Biological Treatment Technologies", "Core Course", "6"],
                    ["ES 668", "Environmental Computation Lab", "Lab Course", "3"],
                    ["ES 670 / ES 682", "Environmental Statistics / Numerical Methods for Environmental Systems", "Elective-I", "6"],
                    ["Institute Elective", "Institute Elective", "Institute Elective", "6"]
                ]
            },

            3: {
                credits: "22 credits",
                courses: [
                    ["ES 637", "Municipal Water and Wastewater Systems", "Core Course", "6"],
                    ["ES 639", "Physico-Chemical Treatment Technologies", "Core Course", "6"],
                    ["ES 647", "Municipal Solid and Biomedical Waste Management", "Core Course", "6"],
                    ["ES 694", "Seminar for M.Tech. programme", "Seminar", "4"]
                ]
            },

            4: {
                credits: "18 credits",
                courses: [
                    ["ES 664", "Environmental Systems Modelling", "Core Course", "6"],
                    ["Elective-II", "Choose one from Elective-II", "Elective", "6"],
                    ["Elective-III", "Choose one from Elective-III", "Elective", "6"]
                ],

                electives: [
                    {
                        title: "Elective-II",
                        options: [
                            "ES 616 — Energy Conversion and Environment",
                            "ES 624 — Hazardous Waste Management",
                            "ES 642 — Industrial Wastewater Management and Reuse",
                            "ES 644 — Industrial Pollution Prevention and Clean Technologies",
                            "ES 658 — Environmental Change and Sustainable Development"
                        ]
                    },
                    {
                        title: "Elective-III",
                        options: [
                            "ES 654 — Groundwater Flow and Contaminant Transport through Porous Media",
                            "ES 656 — Bioremediation - Principles and Applications",
                            "ES 672 — Air Pollution Control Technologies",
                            "ES 674 — Aerosol Science and Engineering",
                            "ES 676 — Membrane Processes",
                            "ES 680 — GIS for Environmental Planning and Management",
                            "ES 684 — Design for Water and Wastewater Systems"
                        ]
                    }
                ]
            },

            5: {
                credits: "54 credits",
                courses: [
                    ["ES 645", "Environmental Law and Policy", "Elective-IV", "6"],
                    ["ES 653", "Environmental Impact Assessment", "Elective-IV", "6"],
                    ["ES 655", "Environmental Management", "Elective-IV", "6"],
                    ["ES 797", "I Stage Project", "R&D Project", "42"],
                    ["ES 899", "Communication Skills", "Communication", "6"]
                ]
            },

            6: {
                credits: "38 credits",
                courses: [
                    ["ES 798", "II Stage Project", "R&D Project", "38"]
                ]
            }
        }
    },


    /* =================================================
       M.SC. – PH.D.
    ================================================= */

    mscphd: {

        label: "M.Sc. – Ph.D.",

        semesters: {

            1: {
                credits: "40 credits",
                courses: [
                    ["ES 631", "Environmental Chemistry", "ESED Core", "6"],
                    ["ES 657", "Water Resources and Environmental Hydraulics", "ESED Core", "6"],
                    ["ES 659", "Mathematics and Statistics for Environmental Engineering", "ESED Core", "6"],
                    ["ES 633", "Environmental Microbiology and Ecology", "ESED Core", "6"],
                    ["ES 635", "Air Pollution Science and Engineering", "ESED Core", "6"],
                    ["ES 651", "Environmental Monitoring Laboratory", "Lab Course", "6"],
                    ["ES 296", "Seminar", "Seminar", "4"],
                    ["GC 101", "Gender in the Workplace", "Compulsory Course", "0"],
                    ["TA 101", "TASET", "Compulsory Course", "0"]
                ]
            },

            2: {
                credits: "39 credits",
                courses: [
                    ["ES 672", "Air Pollution Control Technologies", "ESED Core", "6"],
                    ["ES 208", "Mass Transfer Process in Environmental Systems", "ESED Core", "6"],
                    ["Institute Elective", "Institute Elective", "Institute Elective", "6"],
                    ["ESED Elective-I", "ESED Elective-I — may be taken from Group I & II", "ESED Elective", "6"],
                    ["ES 668", "Environmental Computational Laboratory", "Lab Course", "3"],
                    ["ES 664", "Environmental Systems Modelling", "ESED Core", "6"],
                    ["ES 493", "M.Sc.-Ph.D. Project I", "R&D Project", "6"]
                ]
            },

            3: {
                credits: "51 / 57 credits",
                courses: [
                    ["ES 637", "Municipal Water and Wastewater Systems", "ESED Core", "6"],
                    ["ES 639", "Physico-Chemical Treatment Technologies", "ESED Core", "6"],
                    ["ES 645", "Environmental Law and Policy", "ESED Core", "6"],
                    ["ES 647", "Municipal Solid and Biomedical Waste Management", "ESED Core", "6"],
                    ["ES 451", "Environmental Field Studies", "Lab / Field Studies", "3"],
                    ["ESED Elective-II", "ESED Elective-II", "ESED Elective", "6"],
                    ["ES 494", "M.Sc.-Ph.D. Project II", "R&D Project", "18"]
                ]
            },

            4: {
                credits: "42 credits",
                courses: [
                    ["ES 666", "Biological Treatment Technologies", "ESED Core", "6"],
                    ["ESED Elective-III", "ESED Elective-III — Group I", "ESED Elective", "6"],
                    ["ESED Elective-IV", "ESED Elective-IV — Group II", "ESED Elective", "6"],
                    ["ES 495", "M.Sc.-Ph.D. Project III", "R&D Project", "24"]
                ],

                electives: [
                    {
                        title: "ESED Elective-III — Group I",
                        options: [
                            "EN 648 — Combustion Engineering",
                            "ES 682 — Numerical Methods for Environmental Systems",
                            "ES 624 — Hazardous Waste Management",
                            "ES 642 — Industrial Wastewater Management and Reuse",
                            "ES 658 — Environmental Change and Sustainable Development",
                            "ES 644 — Industrial Pollution Prevention and Clean Technologies",
                            "CM 801 — Introduction to Risk Analysis"
                        ]
                    },
                    {
                        title: "ESED Elective-IV — Group II",
                        options: [
                            "ES 674 — Aerosol Science and Engineering",
                            "ES 680 — GIS for Environmental Planning and Management",
                            "ES 616 — Energy Conversion and Environment",
                            "ES 654 — Groundwater Flow and Contaminant Transport through Porous Media",
                            "ES 656 — Bioremediation Principles and Applications",
                            "ES 676 — Membrane Processes",
                            "ES 684 — Design for Water and Wastewater Systems",
                            "ES 678 — Soil Science"
                        ]
                    }
                ]
            }
        }
    }
};


/* =========================================
   DOM ELEMENTS
========================================= */

const programmeSelect =
    document.getElementById("programmeSelect");

const semesterSelect =
    document.getElementById("semesterSelect");

const semesterTitle =
    document.getElementById("semesterTitle");

const semesterCredits =
    document.getElementById("semesterCredits");

const semesterCourseList =
    document.getElementById("semesterCourseList");


/* =========================================
   UPDATE SEMESTER DROPDOWN
========================================= */

function updateSemesterOptions() {

    const programme =
        curriculum[programmeSelect.value];

    semesterSelect.innerHTML = "";

    Object.keys(programme.semesters).forEach((semester) => {

        const option =
            document.createElement("option");

        option.value = semester;
        option.textContent = `Semester ${semester}`;

        semesterSelect.appendChild(option);
    });

    semesterSelect.value =
        Object.keys(programme.semesters)[0];

    renderSemester();
}


/* =========================================
   RENDER SEMESTER
========================================= */

function renderSemester() {

    const programme =
        curriculum[programmeSelect.value];

    const semester =
        programme.semesters[semesterSelect.value];

    semesterTitle.textContent =
        `Semester ${semesterSelect.value}`;

    semesterCredits.textContent =
        semester.credits;

    semesterCourseList.innerHTML = "";


    semester.courses.forEach((course, index) => {

        const row =
            document.createElement("article");

        row.className = "semester-course";

        row.innerHTML = `
            <div class="course-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="course-main">
                <span class="course-code">
                    ${course[0]}
                </span>

                <h4 class="course-name">
                    ${course[1]}
                </h4>
            </div>

            <div class="course-category">
                ${course[2]}
            </div>

            <div class="course-credits">
                <strong>${course[3]}</strong>
                <small>CR</small>
            </div>
        `;

        semesterCourseList.appendChild(row);
    });


    /*
       Add elective groups below the normal
       courses, without making them visually
       overwhelming.
    */

    if (semester.electives) {

        semester.electives.forEach((group) => {

            const row =
                document.createElement("article");

            row.className =
                "semester-course elective-group";

            const optionsHTML =
                group.options
                    .map(option => `
                        <div class="elective-option">
                            ${option}
                        </div>
                    `)
                    .join("");

            row.innerHTML = `
                <div class="course-number">
                    +
                </div>

                <div class="course-main">

                    <span class="course-code">
                        ELECTIVE OPTIONS
                    </span>

                    <h4 class="course-name">
                        ${group.title}
                    </h4>

                    <div class="elective-options">
                        ${optionsHTML}
                    </div>

                </div>

                <div class="course-category">
                    Choose according to the curriculum
                </div>

                <div class="course-credits">
                    <strong>6</strong>
                    <small>CR</small>
                </div>
            `;

            semesterCourseList.appendChild(row);
        });
    }
}


/* =========================================
   EVENTS
========================================= */

programmeSelect.addEventListener(
    "change",
    updateSemesterOptions
);

semesterSelect.addEventListener(
    "change",
    renderSemester
);


/* =========================================
   INITIAL LOAD
========================================= */

updateSemesterOptions();


/* Load Semester 1 initially */
renderSemester("1");

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0, 0);
  } else {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  /* ================================================================
     CUSTOM POINTER
     ================================================================ */
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");

  if (window.matchMedia("(pointer: fine)").matches && dot && ring) {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    window.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY });
    });

    gsap.ticker.add(() => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      gsap.set(ring, { x: ringX, y: ringY });
    });

    document.querySelectorAll("a, button, .quick-card, .opportunity-card, .project-card, .tool-card, .course-row, .event-row").forEach((element) => {
      element.addEventListener("mouseenter", () => document.body.classList.add("hovering"));
      element.addEventListener("mouseleave", () => document.body.classList.remove("hovering"));
    });
  }

  /* ================================================================
     NAVBAR SCROLL STATE
     ================================================================ */
  const navbar = document.getElementById("siteNavbar");
  if (navbar) {
    const updateNavbar = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 30);
    };
    window.addEventListener("scroll", updateNavbar, { passive: true });
    updateNavbar();
  }

  /* ================================================================
     GSAP REVEALS
     ================================================================ */
  if (window.gsap && window.ScrollTrigger && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Hero elements are handled by the intro timeline below.
    // Keeping .hero-title out of the generic reveal prevents two GSAP
    // animations from fighting over its opacity (which caused the title
    // to appear and then disappear).
    gsap.utils.toArray(".reveal:not(.hero-title)").forEach((element) => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.05,
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true
        }
      });
    });

    gsap.utils.toArray(".reveal-up").forEach((element, index) => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: Math.min((index % 4) * 0.05, 0.15),
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          once: true
        }
      });
    });


    gsap.from(".hero-orbit", {
      scale: 0.8,
      opacity: 0,
      duration: 1.8,
      ease: "power3.out",
      stagger: 0.15,
      delay: 0.2
    });

    // Hero intro: one animation owns the title, so it cannot be
    // overwritten by another reveal animation.
    gsap.fromTo(".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.15, ease: "power4.out", delay: 0.15 }
    );
  } else {
    document.querySelectorAll(".reveal, .reveal-up").forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "none";
    });
  }

  /* ================================================================
     OPPORTUNITY FILTERS
     ================================================================ */
  const filters = document.querySelectorAll(".filter");
  const opportunities = document.querySelectorAll(".opportunity-card");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("active"));
      filter.classList.add("active");

      const selected = filter.dataset.filter;
      opportunities.forEach((card) => {
        const shouldShow = selected === "all" || card.dataset.type === selected;
        card.classList.toggle("hidden", !shouldShow);
      });
    });
  });

  /* ================================================================
     MAGNETIC HERO BUTTONS
     ================================================================ */
  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".magnetic").forEach((element) => {
      element.addEventListener("mousemove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        gsap.to(element, { x: x * 0.08, y: y * 0.08, duration: 0.35, ease: "power3.out" });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, .45)" });
      });
    });
  }

  /* ================================================================
     SMOOTH ANCHOR LINKS
     ================================================================ */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: -60, duration: 1.2 });
    });
  });
});
