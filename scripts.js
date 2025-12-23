// scripts.js

document.addEventListener("DOMContentLoaded", function() {

  // ===== 汉堡菜单切换 =====
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".site-header nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function() {
      nav.classList.toggle("active");
    });
  }

  // ===== 点击导航链接自动收起（移动端） =====
  const navLinks = document.querySelectorAll(".site-header nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      if (window.innerWidth <= 768 && nav.classList.contains("active")) {
        nav.classList.remove("active");
      }
    });
  });

  // ===== 平滑滚动到锚点 =====
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===== Hero / Page-Hero 渐显动画 =====
  const hero = document.querySelector(".hero, .page-hero");
  if (hero) {
    const heroTitle = hero.querySelector("h1");
    const heroText = hero.querySelector("p");

    // 初始样式已在 CSS 设置 opacity:0 和 translateY(20px)

    // 延迟 300ms 后添加 active 类触发 CSS transition
    setTimeout(() => {
      if (heroTitle) heroTitle.classList.add("active");
      if (heroText) heroText.classList.add("active");
    }, 300);
  }

});
