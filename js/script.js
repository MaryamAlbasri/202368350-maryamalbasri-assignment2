/* Show a greeting based on the current hour */
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning! 👋";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon! 👋";
} else {
  greeting.textContent = "Good evening! 👋";
}




/* Highlight the nav link of the section in the middle of the screen */
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;



        /* Give the "active" class only to the matching link */
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-50% 0px -50% 0px" } /* trigger at the middle of the screen */
);

sections.forEach((section) => observer.observe(section));

/* Show a confirmation message instead of reloading */
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault(); /* stop the page from reloading */

  const name = document.getElementById("name").value.trim();
  formStatus.textContent = `Thanks, ${name}! Your message has been received.`;
  form.reset(); /* clear the fields */
});

/* Open clicked project images in a popup */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");

document.querySelectorAll(".project-card img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
  });
});



function closeLightbox() {
  lightbox.classList.remove("open");
}

/* Close with the ✕ button, a click on the dark background, or the Esc key */
closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});


/* Filter and search the projects */
const filterBtns = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("project-search");
const cards = document.querySelectorAll(".project-card");
const noResults = document.getElementById("no-results");

let activeFilter = "all";

function updateProjects() {
  const text = searchInput.value.trim().toLowerCase();
  let visible = 0;

  cards.forEach((card) => {
    const matchesFilter =
      activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesText = card.textContent.toLowerCase().includes(text);

    if (matchesFilter && matchesText) {
      card.classList.remove("hidden");
      visible++;
    } else {
      card.classList.add("hidden");
    }
  });

  /* Show the empty-state message only when nothing matched */
  noResults.classList.toggle("hidden", visible > 0);
}

/* Filter buttons */
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    updateProjects();
  });
});

/* Live search while typing */
searchInput.addEventListener("input", updateProjects);