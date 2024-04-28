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

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
