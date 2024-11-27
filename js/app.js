document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header-container");

  if (!header) {
    console.error("Header container topilmadi.");
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > header.offsetHeight) {
      header.classList.add("white-header");
    } else {
      header.classList.remove("white-header");
    }
  });

  console.log("JavaScript muvaffaqiyatli yuklandi.");
});
