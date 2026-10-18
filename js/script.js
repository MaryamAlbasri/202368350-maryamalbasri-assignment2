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

/* Contact form with validation and feedback */
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

/* Show an error under one field */
function showError(input, errorId, message) {
  document.getElementById(errorId).textContent = message;
  input.classList.toggle("invalid", message !== "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); /* stop the page from reloading */

  let valid = true;
  formStatus.textContent = "";

  /* Name must not be empty */
  if (nameInput.value.trim() === "") {
    showError(nameInput, "name-error", "Please enter your name.");
    valid = false;
  } else {
    showError(nameInput, "name-error", "");
  }

  /* Email must look like name@example.com */
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === "") {
    showError(emailInput, "email-error", "Please enter your email.");
    valid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, "email-error", "Please enter a valid email address.");
    valid = false;
  } else {
    showError(emailInput, "email-error", "");
  }

  /* Message needs at least 10 characters */
  if (messageInput.value.trim().length < 10) {
    showError(messageInput, "message-error", "Your message should be at least 10 characters.");
    valid = false;
  } else {
    showError(messageInput, "message-error", "");
  }

  if (!valid) return; /* stop here if something is wrong */

  /* Everything is valid: show the confirmation */
  formStatus.textContent = `Thanks, ${nameInput.value.trim()}! Your message has been received.`;
  formStatus.classList.add("show");
  form.reset();
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

const themeToggle = document.getElementById("theme-toggle");

/* Load the saved theme when the page opens */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";

  /* Save the choice so it is still there after a refresh */
  localStorage.setItem("theme", isDark ? "dark" : "light");
});