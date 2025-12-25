/* =====================================================
   KOYINTA Website - Final scripts.js
   Author: Production-ready version
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     Mobile Navigation (Hamburger)
     =============================== */
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".site-header nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("show"); // 与 CSS 统一
    });

    // 点击导航链接后自动关闭菜单（移动端体验更好）
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("show");
      });
    });
  }

  /* ===============================
     Hero / Page Hero Text Animation
     =============================== */
  const heroSections = document.querySelectorAll(".hero, .page-hero");

  heroSections.forEach(heroSection => {
    const heroTitle = heroSection.querySelector("h1");
    const heroText = heroSection.querySelector("p");

    setTimeout(() => {
      if (heroTitle) heroTitle.classList.add("active");
      if (heroText) heroText.classList.add("active");
    }, 200);
  });

  /* ===============================
     Safety Debug (optional)
     =============================== */
  // console.log("KOYINTA scripts.js loaded successfully");

});
