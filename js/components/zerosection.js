import { NavBar } from "./NavBar.js";

export function zerosection() {
  const section = document.createElement("section");

  section.className = "relative w-full h-[100vh] overflow-hidden";

  section.innerHTML = `
    <!-- BACKGROUND -->
    <div 
      class="absolute inset-0 w-full h-full bg-cover bg-center"
      style="background-image: url('https://framerusercontent.com/images/gvrZUoowU6t5rwpwtONkkVWoFSU.png');">
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
            Affordable <br />
            HVAC Solution <br />
            in New Texas.
          </h1>

          <!-- Button -->
          <button class="group bg-white text-black px-7 py-4 rounded-full text-lg font-semibold flex items-center gap-3 shadow-xl hover:bg-gray-200 transition">
            GET STARTED NOW
            <span class="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-all text-xl">
              →
            </span>
          </button>

          <!-- Description -->
          <p class="text-gray-200 mt-10 text-lg leading-relaxed border-l-2 border-white pl-4 max-w-md">
            Expert HVAC solutions for homes & businesses — reliable heating,
            cooling, and air quality services you can trust.
          </p>

        </div>

      </div>
    `
  );
}
