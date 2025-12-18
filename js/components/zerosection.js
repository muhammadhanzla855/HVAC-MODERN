import { NavBar } from "./NavBar.js";

export function zerosection() {
  const section = document.createElement("section");

  // Prevent over-zoom on large screens
  section.className =
    "relative w-full min-h-[600px] h-[100vh] max-h-[900px] overflow-hidden";

  section.innerHTML = `
    <!-- BACKGROUND -->
    <div
      class="absolute inset-0 bg-no-repeat bg-cover bg-center md:bg-[center_30%]"
      style="background-image: url('./assets/icons/img.jpeg');">
    </div>

    <!-- DARK OVERLAY -->
    <div class="absolute inset-0 bg-black/30"></div>

    <!-- LEFT GRADIENT FADE -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

    <!-- CONTENT -->
    <div id="hero-content" class="relative z-20 w-full h-full"></div>
  `;

  document.body.appendChild(section);

  // Insert Navbar
  const heroContent = section.querySelector("#hero-content");
  heroContent.appendChild(NavBar());

  // Hero Content
  heroContent.insertAdjacentHTML(
    "beforeend",
    `
      <div class="max-w-7xl mx-auto px-6 h-full flex items-start md:items-center">

        <div class="w-full md:w-1/2 mt-32 md:mt-10">

          <h1 class="pt-[60px] md:pt-[80px] text-5xl md:text-7xl font-medium leading-tight tracking-tight text-white mb-10">
  Affordable <br />
  HVAC Solution <br />
  in California and New Jersey.
</h1>

          <button class="group bg-white text-black px-7 py-4 rounded-full text-lg font-semibold flex items-center gap-3 shadow-xl hover:bg-gray-200 transition">
            GET STARTED NOW
            <span class="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-all text-xl">
              →
            </span>
          </button>

          <p class="text-gray-200 mt-10 text-lg leading-relaxed border-l-2 border-white pl-4 max-w-md">
            Expert HVAC solutions for homes & businesses — reliable heating,
            cooling, and air quality services you can trust.
          </p>

        </div>

      </div>
    `
  );
}
