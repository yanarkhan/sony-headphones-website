/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu Show */
// Validasi jika ada hamburger menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
// Validasi jika ada tombol close
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // ketika klik setiap nav-link, maka menghapus kelas show-menu
  navMenu.classList.remove("show-menu");
};

// menambahkan event listener untuk setiap elemen dalam navLink
navLink.forEach((elemen) => elemen.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // ketika di scroll lebih dari 50 piksel dari atas halaman, tambahkan kelas blur-header ke header
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);

/*=============== SWIPER FAVORITES ===============*/
let swiper = new Swiper(".favorite-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // Ketika scroll lebih tinggi dari 350, tambahkan kelas show-scroll ke tag a dengan kelas scrollup
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1500,
  delay: 300,
  // reset: true, // Animations repeat
});

sr.reveal(".home-social, .favorite-container, .sponsor-container, .footer");
sr.reveal(".home-title span:nth-child(1)", { origin: "left", opacity: 1 });
sr.reveal(".home-title span:nth-child(2)", { origin: "left", opacity: 1 });
sr.reveal(".home-title span:nth-child(3)", { origin: "right", opacity: 1 });
sr.reveal(".home-title span:nth-child(4)", { origin: "right", opacity: 1 });
sr.reveal(".home-tooltip, .home-button, .model-button", { origin: "bottom" });
sr.reveal(".about-data", { origin: "left" });
sr.reveal(".about-img, .model-tooltip", { origin: "right" });
