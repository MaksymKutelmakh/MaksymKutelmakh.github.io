/**
 * Template Name: Regna
 * Template URL: https://bootstrapmade.com/regna-bootstrap-onepage-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

// (function () {
//   "use strict";

const popup = document.getElementById("language_popup");
function scrollDownClick() {
  if (window.screen.width < 750) {
    window.scrollTo({
      top: document.body.parentElement.scrollTop + 800,
      behavior: "smooth",
    });
  }
}
function setDefaultTab(id) {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.classList.remove("show");
    item.classList.remove("active");
  });
  const selectedTab = document.getElementById(id);
  selectedTab.classList.add("show");
  selectedTab.classList.add("active");
}
// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = langData[key];
  });
}
// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

async function fetchLanguageData(lang) {
  const response = await fetch(`assets/languages/${lang}.json`);
  return response.json();
}

async function changeLanguage(lang) {
  await setLanguagePreference(lang);

  const langData = await fetchLanguageData(lang);
  updateContent(langData);
  var modal = document.getElementById("myModal");

  modal.style.display = "none";
}

// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "en";
  const langData = await fetchLanguageData(userPreferredLanguage);
  const lang_data = {
    en: "uk-flag-button_header",
    ua: "ua-button",
    it: "it-button",
  };
  const form_i18n = {
    en: { name: "Name", subject: "Subject", message: "Message" },
    ua: { name: "Ім'я", subject: "Тема", message: "Повідомлення" },
    it: { name: "Nome", subject: "Soggetto", message: "Messaggio" },
  };
  updateContent(langData);
  !localStorage.getItem("language") && openFAB();
  let selected_lang = document.getElementById("selected_lang");
  let selected_lang_mobile = document.getElementById("selected_lang_mobile");
  let name_form = document.getElementById("name");
  let subject_form = document.getElementById("subject");
  let message_form = document.getElementById("message");
  let summary_of_the_year = document.getElementById("summary_of_the_year");
  summary_of_the_year.src = `assets/img/summary_of_the_year_of_the_oratorio_of_Saint_Dominic_Savio_${userPreferredLanguage}.webp`;
  name_form.placeholder = form_i18n[userPreferredLanguage].name;
  subject_form.placeholder = form_i18n[userPreferredLanguage].subject;
  message_form.placeholder = form_i18n[userPreferredLanguage].message;
  selected_lang.classList.add(lang_data[userPreferredLanguage]);
  selected_lang_mobile.classList.add(lang_data[userPreferredLanguage]);
});

function openFAB() {
  let modal = document.getElementById("myModal");
  modal.style.display = "flex";
}

/**
 * Apply .scrolled class to the body as the page is scrolled down
 */
function toggleScrolled() {
  const selectBody = document.querySelector("body");
  const selectHeader = document.querySelector("#header");
  const logo = document.getElementById("logo");
  const logo_cut = document.getElementById("logo_cut");

  if (
    !selectHeader.classList.contains("scroll-up-sticky") &&
    !selectHeader.classList.contains("sticky-top") &&
    !selectHeader.classList.contains("fixed-top")
  )
    return;
  window.scrollY > 100
    ? selectBody.classList.add("scrolled")
    : selectBody.classList.remove("scrolled");
  window.scrollY > 100
    ? (logo.style.display = "none")
    : (logo.style.display = "block");
  window.scrollY > 100
    ? (logo_cut.style.display = "block")
    : (logo_cut.style.display = "none");
}

document.addEventListener("scroll", toggleScrolled);
window.addEventListener("load", toggleScrolled);

/**
 * Mobile nav toggle
 */
const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

function mobileNavToogle() {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  mobileNavToggleBtn.classList.toggle("bi-list");
  mobileNavToggleBtn.classList.toggle("bi-x");
}
mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll("#navmenu a").forEach((navmenu) => {
  navmenu.addEventListener("click", () => {
    if (document.querySelector(".mobile-nav-active")) {
      mobileNavToogle();
    }
  });
});

/**
 * Toggle mobile nav dropdowns
 */
document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
  navmenu.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentNode.classList.toggle("active");
    this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
    e.stopImmediatePropagation();
  });
});

/**
 * Preloader
 */
const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

/**
 * Scroll top button
 */
let scrollTop = document.querySelector(".scroll-top");

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  }
}
scrollTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("load", toggleScrollTop);
document.addEventListener("scroll", toggleScrollTop);

/**
 * Animation on scroll function and init
 */
function aosInit() {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", aosInit);

/**
 * Initiate glightbox
 */
const glightbox = GLightbox({
  selector: ".glightbox",
});

/**
 * Initiate Pure Counter
 */
new PureCounter();

/**
 * Init isotope layout and filters
 */
document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
  let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
  let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
  let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

  let initIsotope;
  imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
    initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
      itemSelector: ".isotope-item",
      layoutMode: layout,
      filter: filter,
      sortBy: sort,
    });
  });

  isotopeItem
    .querySelectorAll(".isotope-filters li")
    .forEach(function (filters) {
      filters.addEventListener(
        "click",
        function () {
          isotopeItem
            .querySelector(".isotope-filters .filter-active")
            .classList.remove("filter-active");
          this.classList.add("filter-active");
          initIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          if (typeof aosInit === "function") {
            aosInit();
          }
        },
        false,
      );
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Знаходимо всі кнопки
  const buttons = document.querySelectorAll("a[data-target]");

  // Додаємо обробник події для кожної кнопки
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Отримуємо значення data-target кнопки
      const targetId = button.getAttribute("data-target");

      // Ховаємо всі блоки
      const items = document.querySelectorAll(".item");
      items.forEach((item) => {
        item.classList.remove("show");
        item.classList.remove("active");
      });

      // Показуємо відповідний блок
      const targetItem = document.getElementById(targetId);
      if (targetItem) {
        targetItem.classList.add("show");
        targetItem.classList.add("active");
      }
    });
  });

  if (window.screen.width > 1200) {
    document.getElementById("navmenu_mobile").style.display = "none";
    document.getElementById("switcher_desktop").style.display = "block";
  } else {
    document.getElementById("navmenu_mobile").style.display = "block";
    document.getElementById("switcher_desktop").style.display = "none";
  }
});
/**
 * Init swiper sliders
 */
function initSwiper() {
  document.getElementById("year").innerHTML = "© " + new Date().getFullYear();
  document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
    let config = {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        991: {
          slidesPerView: 2,
        },
        // desktop >= 991
        1390: {
          slidesPerView: 3,
        },
      },

      height: 360,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination-0",
        type: "bullets",
        clickable: true,
      },
    };

    if (swiperElement.classList.contains("swiper-tab")) {
      initSwiperWithCustomPagination(swiperElement, config);
    } else {
      new Swiper(swiperElement, config);
    }
  });

  for (let i = 1; i < 12; i++) {
    document
      .querySelectorAll(".init-work-swiper-" + i)
      .forEach(function (swiperElement) {
        let config = {
          loop: true,
          speed: 600,
          autoplay: {
            delay: 2000,
          },
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination-" + i,
            type: "bullets",
            clickable: true,
          },
        };
        new Swiper(swiperElement, config);
      });
  }
}

window.addEventListener("load", initSwiper);

/**
 * Correct scrolling position upon page load for URLs containing hash links.
 */
window.addEventListener("load", function (e) {
  if (window.location.hash) {
    if (document.querySelector(window.location.hash)) {
      setTimeout(() => {
        let section = document.querySelector(window.location.hash);
        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop),
          behavior: "smooth",
        });
      }, 100);
    }
  }
});

/**
 * Navmenu Scrollspy
 */
let navmenulinks = document.querySelectorAll(".navmenu a");

function navmenuScrollspy() {
  navmenulinks.forEach((navmenulink) => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      document
        .querySelectorAll(".navmenu a.active")
        .forEach((link) => link.classList.remove("active"));
      navmenulink.classList.add("active");
    } else {
      navmenulink.classList.remove("active");
    }
  });
}
window.addEventListener("load", navmenuScrollspy);
document.addEventListener("scroll", navmenuScrollspy);
// })();
