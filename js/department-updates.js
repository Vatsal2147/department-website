
/* Department News & Events
   Independent module — does not modify about.js. */

(() => {
  const section = document.querySelector("#news-events");

  // Exit safely if this section isn't present on the page.
  if (!section) return;

  const updates = [
  {
    type: "EVENTS",
    day: "5",
    date: "JUN 2026",
    fullDate: "June 5, 2026",
    title: "World Environment Day 2026",
    description:
      "World Environment Day 2026. Visit the official ESED events page for further details.",
    url: "https://esed.iitb.ac.in/events-all"
  },
  {
    type: "EVENTS",
    day: "5",
    date: "NOV 2026",
    fullDate: "November 5, 2026",
    title: "5th National Environmental Conference (NEC-2026)",
    description:
      "Environmental Science and Engineering Department (ESED), formerly CESE, IIT Bombay is organizing the 5th National Environmental Conference (NEC-2026).",
    url: "https://esed.iitb.ac.in/events-all"
  },
  {
    type: "EVENTS",
    day: "16",
    date: "OCT 2026",
    fullDate: "October 16, 2026",
    title:
      '3rd Smart Cities Workshop on "Transformation of City to Smart City via Urban Renewal and Retrofitting"',
    description:
      'A workshop on "Transformation of City to Smart City via Urban Renewal and Retrofitting" at VMCC, IIT Bombay.',
    url: "https://esed.iitb.ac.in/events-all"
  },
  {
    type: "EVENTS",
    day: "—",
    date: "DATE TBC",
    fullDate: "Date not specified",
    title:
      "Two-day National Symposium on Circular Economy: Enabling Technologies, Policies and Practices",
    description:
      "A two-day national symposium focused on circular economy technologies, policies, and practices.",
    url: "https://esed.iitb.ac.in/events-all"
  },
   {
    type: "NEWS",
    day: "17",
    date: "AUG 2026",
    fullDate: "August 17, 2026",
    title: "Prof. Sharada Navada joins as a faculty",
    description:
      "Prof. Sharada Navada has joined the department as an Assistant Professor on 29th July 2026.",
    url: "https://www.esed.iitb.ac.in/"
  },
  {
    type: "NEWS",
    day: "11",
    date: "SEP 2025",
    fullDate: "September 11, 2025",
    title: "Class of 1973 Faculty Award for Research Excellence 2025",
    description:
      "Prof. Swatantra Pratap Singh, Prof. Manoranjan Sahu, and Prof. Pradip Kalbar have been awarded the Class of 1973 Faculty Award for Research Excellence for the year 2025.",
    url: "https://www.esed.iitb.ac.in/"
  },
  {
    type: "NEWS",
    day: "11",
    date: "SEP 2025",
    fullDate: "September 11, 2025",
    title:
      "Departmental Award for Excellence in Teaching to Prof. Swatantra Pratap Singh",
    description:
      "Prof. Swatantra Pratap Singh has been awarded Departmental Awards for Excellence in Teaching 2025.",
    url: "https://www.esed.iitb.ac.in/"
  },
  {
    type: "NEWS",
    day: "11",
    date: "SEP 2025",
    fullDate: "September 11, 2025",
    title: "Congratulations to Prof. Subhankar Karmakar",
    description:
      "Prof. Subhankar Karmakar has been elected as a Fellow of the Indian National Academy of Engineering (INAE), 2025.",
    url: "https://www.esed.iitb.ac.in/"
  }
];

  const featuredDay = section.querySelector("#dept-featured-day");
  const featuredDate = section.querySelector("#dept-featured-date");
  const featuredCategory = section.querySelector(
    "#dept-featured-category"
  );
  const featuredTitle = section.querySelector("#dept-featured-title");
  const featuredDescription = section.querySelector(
    "#dept-featured-description"
  );
  const featuredRead = section.querySelector("#dept-featured-read");
  const featuredExternal = section.querySelector(
    "#dept-featured-external"
  );
  const list = section.querySelector("#dept-updates-list");

  if (
    !featuredDay ||
    !featuredDate ||
    !featuredCategory ||
    !featuredTitle ||
    !featuredDescription ||
    !featuredRead ||
    !featuredExternal ||
    !list
  ) {
    return;
  }

  function renderFeatured(item) {
    featuredDay.textContent = item.day;
    featuredDate.textContent = item.date;
    featuredCategory.textContent = item.type;
    featuredTitle.textContent = item.title;
    featuredDescription.textContent = item.description;

    featuredRead.href = item.url;
    featuredExternal.href = item.url;
  }

  function createUpdateCard(item) {
    const card = document.createElement("a");
    card.className = "dept-updates__item";
    card.href = item.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.setAttribute("aria-label", `${item.title} — ${item.fullDate}`);

    const meta = document.createElement("div");
    meta.className = "dept-updates__item-meta";

    const category = document.createElement("strong");
    category.textContent = item.type;

    const date = document.createElement("span");
    date.textContent = ` · ${item.fullDate}`;

    meta.append(category, date);

    const title = document.createElement("h4");
    title.textContent = item.title;

    const arrow = document.createElement("span");
    arrow.className = "dept-updates__arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";

    card.append(meta, title, arrow);

    return card;
  }

  function renderUpdates(type = "NEWS") {
  // Select only News or Events
  const filteredUpdates = updates.filter(
    item => item.type === type
  );

  list.replaceChildren();

  // Handle an empty category
  if (filteredUpdates.length === 0) {
    featuredDay.textContent = "—";
    featuredDate.textContent = "";
    featuredCategory.textContent = type;
    featuredTitle.textContent = `No ${type.toLowerCase()} available`;
    featuredDescription.textContent =
      "Please check back for department updates.";

    featuredRead.removeAttribute("href");
    featuredExternal.removeAttribute("href");
    return;
  }

  // First item becomes the large featured card
  const [featured, ...remaining] = filteredUpdates;

  renderFeatured(featured);

  // Remaining items become the smaller cards
  remaining.slice(0, 3).forEach(item => {
    list.appendChild(createUpdateCard(item));
  });
}

// Connect the News and Events buttons
const tabs = section.querySelectorAll(".dept-updates__tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const selectedType = tab.dataset.type.toUpperCase();

    // Update active button styling and accessibility state
    tabs.forEach(button => {
      const isActive = button === tab;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    // Render the selected category
    renderUpdates(selectedType);
  });
});

// Initial category
renderUpdates("NEWS");

  renderUpdates();
})();
