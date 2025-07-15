function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle('open');
    icon.classList.toggle('open');

}
var typed = new Typed("#typed-role", {
  strings: ["FRONTEND DEVELOPER", "FULLSTACK DEVELOPER", "WEB DEVELOPER", "BACKEND DEVELOPER"],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1000,
  loop: true
});




