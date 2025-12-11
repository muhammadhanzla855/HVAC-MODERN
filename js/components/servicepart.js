import { NavBar } from "./NavBar.js";

export function servicepart() {
  const section = document.createElement("section");

  section.className = "relative w-full h-[50vh] overflow-hidden";

  section.innerHTML = `
    <!-- BACKGROUND -->
    <div 
      class="absolute inset-0 w-full h-full bg-cover bg-center"
      style="background-image: url('https://framerusercontent.com/images/RhpKA821vWVNI6Sgp1enL5sO0.png?scale-down-to=4096');">
    </div>

    <!-- DARK OVERLAY -->
    <div class="absolute inset-0 "></div>

    <!-- LEFT GRADIENT FADE -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

    <!-- CONTENT -->
    <div id="hero-content" class="relative z-20 w-full h-full"></div>
  `;

  document.body.appendChild(section);

  // Insert Navbar
  const heroContent = section.querySelector("#hero-content");
  heroContent.appendChild(NavBar());

  // Hero text FIXED
  heroContent.insertAdjacentHTML(
    "beforeend",
    `
      <div class="max-w-7xl mx-auto px-6 h-full flex items-start md:items-center">

        <div class="w-full md:w-1/2 mt-32 md:mt-10">

          <!-- Heading -->
          <h1 class="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-10">
            Our Service
          </h1>

          

          <!-- Description -->
          <p class="text-gray-200 mt-10 text-lg leading-relaxed border-l-2 border-white pl-4 max-w-md">
            At Heatfix, we specialize in providing comprehensive HVAC solutions for homes and businesses alike.
          </p>

        </div>

      </div>
    `
  );
}
