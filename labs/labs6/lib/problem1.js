document.addEventListener("DOMContentLoaded", function () {

  const facultyImage = document.getElementById("faculty-image");


  facultyImage.src =
    "https://www.en.kku.ac.th/web/wp-content/uploads/2020/09/119251435_321814239045994_7332192677894296447_n.jpg";
  facultyImage.alt = "Faculty of Engineering";


  const welcomeParagraph = document.createElement("div");
  welcomeParagraph.innerHTML = "We hope you enjoy learning";
  welcomeParagraph.className = "welcome-message";


  const section = document.querySelector("section");
  const existingWelcome = section.querySelector(".welcome-message");
  if (!existingWelcome.getAttribute("data-created")) {
    existingWelcome.setAttribute("data-created", "true");
  }


  document.title = "KKU Engineering";


  facultyImage.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "https://www.en.kku.ac.th";
  });


  const facultyLink = document.getElementById("faculty-link");
  facultyLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "https://www.en.kku.ac.th";
  });
});
