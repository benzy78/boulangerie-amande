// headerのハンバーガーメニューの開閉
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".header__menu-toggle");
  const navLinks = document.querySelector(".header__nav");
  const navItems = document.querySelectorAll(".header__nav-links a"); 

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active"); 
    });
  });
});
// headerのハンバーガーメニューの開閉 end