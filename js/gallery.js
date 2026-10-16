
(() => {
  const gallery = document.querySelector("#esed-gallery");
  const lightbox = document.querySelector("#esed-lightbox");

  if (!gallery || !lightbox) return;

  const photoButtons = [
    ...gallery.querySelectorAll("[data-photo]")
  ];

  const photos = photoButtons.map(button => ({
    src: button.querySelector("img").getAttribute("src"),
    alt: button.querySelector("img").alt,
    caption:
      button.querySelector(".esed-gallery__photo-title")
        ?.textContent.trim() || "ESED department gallery"
  }));

  const image = document.querySelector("#lightbox-image");
  const caption = document.querySelector("#lightbox-caption");
  const counter = document.querySelector("#lightbox-counter");
  const closeButton = document.querySelector("#lightbox-close");
  const previousButton = document.querySelector("#lightbox-prev");
  const nextButton = document.querySelector("#lightbox-next");

  let currentIndex = 0;
  let previousFocus = null;

  function showPhoto(index) {
    currentIndex = (index + photos.length) % photos.length;

    const photo = photos[currentIndex];

    image.src = photo.src;
    image.alt = photo.alt;
    caption.textContent = photo.caption;
    counter.textContent =
      `${String(currentIndex + 1).padStart(2, "0")} / ` +
      `${String(photos.length).padStart(2, "0")}`;
  }

  function openGallery(index = 0) {
    previousFocus = document.activeElement;

    showPhoto(index);

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    closeButton.focus();
  }

  function closeGallery() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (previousFocus) previousFocus.focus();
  }

  photoButtons.forEach((button, index) => {
    button.addEventListener("click", () => openGallery(index));
  });

  document.querySelector("#gallery-view-all")
    ?.addEventListener("click", () => openGallery(0));

  document.querySelector("#gallery-more")
    ?.addEventListener("click", () => openGallery(0));

  closeButton.addEventListener("click", closeGallery);

  previousButton.addEventListener("click", () => {
    showPhoto(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showPhoto(currentIndex + 1);
  });

  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) closeGallery();
  });

  document.addEventListener("keydown", event => {
    if (!lightbox.classList.contains("is-open")) return;

    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowLeft") showPhoto(currentIndex - 1);
    if (event.key === "ArrowRight") showPhoto(currentIndex + 1);
  });
})();
