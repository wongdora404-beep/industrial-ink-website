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
      nav.classList.toggle("active");
    });

    // 点击导航链接后自动关闭菜单（移动端体验更好）
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  }

  /* ===============================
     Hero / Page Hero Text Animation
     =============================== */
  const heroSection = document.querySelector(".hero, .page-hero");

  if (heroSection) {
    const heroTitle = heroSection.querySelector("h1");
    const heroText = heroSection.querySelector("p");

    // 小延迟，确保渲染完成后再触发动画
    setTimeout(() => {
      if (heroTitle) heroTitle.classList.add("active");
      if (heroText) heroText.classList.add("active");
    }, 150);
  }

  /* ===============================
     Safety Debug (可选，确认加载成功)
     =============================== */
  // console.log("KOYINTA scripts.js loaded successfully");

});
