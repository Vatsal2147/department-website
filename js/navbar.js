const navbar = document.createElement("header");

navbar.className = "site-navbar";

navbar.innerHTML = `
    <div class="nav-logo">
        <a href="index.html">
            <span class="logo-main">ESED</span>
            <span class="logo-sub">IIT BOMBAY</span>
        </a>
    </div>

    <nav class="nav-links">
        <a href="about.html" data-page="about">About</a>
        <a href="academics.html" data-page="academics">Academics</a>
        <a href="research.html" data-page="research">Research</a>
        <a href="faculty.html" data-page="faculty">Faculty</a>
        <a href="staff.html" data-page="staff">Staff</a>
        <a href="contact.html" data-page="contact">Contact</a>
    </nav>
`;

document.body.prepend(navbar);


/* Find which page we're currently on */

const currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");


/* Highlight current page */

document.querySelectorAll(".nav-links a").forEach(link => {

    if (link.dataset.page === currentPage) {
        link.classList.add("active");
    }

});