window.addEventListener("load", function() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll("#navbar li a");
  navLinks.forEach(function(link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});