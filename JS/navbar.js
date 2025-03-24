document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
  
    const navElement = document.createElement("nav");
    navElement.className = "navbar navbar-expand-lg bg-dark sticky-top navbar-dark";
    navElement.innerHTML = `
    <div class="container-fluid">
      <a class="navbar-brand" href="/BrightSwahnFlowerAgency/index.html">Bright Swahn Flower <img src="/BrightSwahnFlowerAgency/Media/Images/logo.png" style="width:65px" alt="BSF" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav nav-fill">
          <li class="nav-item">
            <a class="nav-link mx-lg-4" href="/BrightSwahnFlowerAgency/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-lg-4" href="/BrightSwahnFlowerAgency/Pages/About.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-lg-4" href="/BrightSwahnFlowerAgency/Pages/Showcase.html">Portfolio</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      `;
  
    document.body.prepend(navElement);
  
    const navLinks = document.querySelectorAll(".navbar-nav a");
  
    navLinks.forEach((link) => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === currentPath) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  });