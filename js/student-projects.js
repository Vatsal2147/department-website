
const projects = [
    {
    id: 1,
    student: "Prabhudutta Hota",
    category: "air",
    title:
      "Integrated Framework of Satellite Remote-sensing Data and Ground-based Observations using Machine Learning for the Estimation of High-Resolution PM2.5 in Mumbai",
    supervisor: "Prof. Manoranjan Sahu",
    description:
      "This study builds a deep learning framework to predict PM2.5 and map pollution hotspots across Mumbai at high resolution, using three years of data. It combines ground monitoring records from the CPCB, SAFAR and BMC networks with MODIS (Terra and Aqua) aerosol optical depth (AOD), weather data and land-use features. The monitoring stations are modeled as a connected network, so the model can learn how wind, humidity, temperature and distance between stations affect how pollution spreads. MODIS AOD often has gaps from cloud cover and other retrieval problems, especially in the monsoon, so a dedicated imputation method will fill them in to give a continuous AOD time series. The trained model will predict PM2.5 on a 1 km × 1 km grid, and its output will be used to map both persistent and episodic pollution hotspots at different time scales."
  },
  {
    id: 2,
    student: "Jharilal Sharma",
    category: "water",
    title: "Anaerobic Digestion for Recovery of VFA's from Organic Waste",
    supervisor: "Prof. Indrajit Chakraborty",
    description:
      "My MTP focuses on the recovery of volatile fatty acids (VFAs) from organic waste through anaerobic digestion. The study aims to convert biologically degradable organic matter into valuable VFAs."
  },
 
  {
    id: 3,
    student: "Garimella Sri Kalyan",
    category: "water",
    title: "Optimization of Valve Operations for Improved Intermittent Water Supply",
    supervisor: "Prof. Pradip Kalbar",
    description:
      "Optimized valve schedules and control settings with a developed, field-validated hydraulic model for IWS."
  },
  {
    id: 4,
    student: "Rishita Rakshit",
    category: "water",
    title:
      "Resilient Nutrient Removal under Wet-Weather Flows: A Dynamic-Simulation Study of Strategies for a Wastewater Treatment Plant",
    supervisor: "Prof. V. S. Vamsi Bottlaguduru",
    description:
      "Simulation of different strategies, such as incorporating a hydrocyclone in ASP/SBR to retain PAOs and enhance EBPR performance, resulting in better effluent water quality."
  },
  {
    id: 5,
    student: "Aryan Varshney",
    category: "water",
    title: "Bipolar Membrane Electrodialysis for High Value Product Purification",
    supervisor: "Prof. Swatantra Pratap Singh",
    description:
      "Optimising operational parameters for acid-base recovery from waste streams using ion-exchange membranes."
  },
  {
    id: 6,
    student: "Harshita Jaiswal",
    category: "climate",
    title:
      "Decision-Ready Flood Susceptibility Mapping in a Fragile Mountain System Using Explainable AI and Power BI Dashboards",
    supervisor: "Prof. Subhankar Karmakar",
    description:
      "This project develops a multi-layered flood susceptibility visualization framework by integrating diverse geospatial and environmental data layers with machine learning models. To ensure transparency and trust in predictions, Explainable AI (XAI) techniques are employed to interpret model outputs and highlight the key factors driving susceptibility at each location. The insights are consolidated into an interactive dashboard, enabling intuitive exploration of risk patterns and supporting data-driven decision-making."
  },
  {
    id: 7,
    student: "Hajikul Islam",
    category: "air",
    title:
      "Mechanistic Modelling of Agricultural Reactive Nitrogen Emission and Improved Air Quality in India",
    supervisor: "Prof. Srinidhi Balasubramanian",
    description:
      "Focus on process-based modelling using DNDC (Denitrification-Decomposition), including the underlying processes and management practices that drive agricultural emissions. The project aims to identify hotspots of NH3 emissions across India."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#project-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const resultsCount = document.querySelector(".results-count");
  const emptyState = document.querySelector("#empty-state");
  const resetButton = document.querySelector(".reset-filters");

  if (!grid) return;

  let revealObserver = null;

  function createProjectCard(project, index) {
    const card = document.createElement("article");
    card.className = "project-card project-detail-card reveal-up";

    if (index === 0) {
      card.classList.add("project-feature");
    }

    card.dataset.category = project.category;

    const header = document.createElement("div");
    header.className = "detail-card-header";

    const number = document.createElement("span");
    number.className = "detail-number";
    number.textContent = `PROJECT / ${String(project.id).padStart(2, "0")}`;

    const category = document.createElement("span");
    category.className = "detail-category";
    category.textContent = project.category.toUpperCase();

    header.append(number, category);

    const title = document.createElement("h3");
    title.className = "detail-title";
    title.textContent = project.title;

    const studentLabel = document.createElement("span");
    studentLabel.className = "detail-label";
    studentLabel.textContent = "STUDENT";

    const student = document.createElement("p");
    student.className = "detail-student";
    student.textContent = project.student;

    const supervisorLabel = document.createElement("span");
    supervisorLabel.className = "detail-label";
    supervisorLabel.textContent = "FACULTY SUPERVISOR";

    const supervisor = document.createElement("p");
    supervisor.className = "detail-supervisor";
    supervisor.textContent = project.supervisor;

    const description = document.createElement("p");
    description.className = "detail-description";
    description.textContent = project.description;

    const footer = document.createElement("div");
    footer.className = "detail-card-footer";
    footer.textContent = "ESED · STUDENT RESEARCH";

    card.append(
      header,
      title,
      studentLabel,
      student,
      supervisorLabel,
      supervisor,
      description,
      footer
    );

    return card;
  }

  function observeReveals(elements) {
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -25px 0px"
        }
      );
    }

    elements.forEach((element) => {
      revealObserver.observe(element);
    });
  }

  function renderProjects(category = "all") {
    const filteredProjects = projects.filter(
      (project) =>
        category === "all" || project.category === category
    );

    grid.replaceChildren();

    filteredProjects.forEach((project, index) => {
      grid.appendChild(createProjectCard(project, index));
    });

    if (resultsCount) {
      resultsCount.textContent =
        `${String(filteredProjects.length).padStart(2, "0")} PROJECT${filteredProjects.length === 1 ? "" : "S"}`;
    }

    if (emptyState) {
      emptyState.hidden = filteredProjects.length !== 0;
    }

    observeReveals(grid.querySelectorAll(".reveal-up"));
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      renderProjects(button.dataset.filter);
    });
  });

  resetButton?.addEventListener("click", () => {
    document.querySelector('.filter-btn[data-filter="all"]')?.click();
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  renderProjects();
});
