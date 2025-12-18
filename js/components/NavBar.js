export function NavBar() {
  const header = document.createElement("header");

  // FIXED NAVBAR (NO BACKGROUND EVER)
  header.className =
    "fixed top-0 left-0 w-full z-30 bg-transparent";

  header.innerHTML = `
    <div class="max-w-7xl mx-auto grid grid-cols-3 items-center px-6 py-4">

      <!-- LOGO -->
      <div class="flex items-center">
        <img src="./assets/icons/image.png" alt="Logo" class="w-22 h-12">
      </div>

      <!-- NAV LINKS (CENTER) -->
      <div class="hidden md:flex justify-center">
        <nav class="flex items-center gap-8 text-sm font-medium text-orange-500">
          <a href="./index.html">Home</a>
          <a href="./aboutus.html">About Us</a>

          <div class="relative group cursor-pointer">
            <span class="flex items-center gap-1">
              Services
              <svg class="w-3 h-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" />
              </svg>
            </span>

            <div class="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
              <a href="./services/service1.html" class="block px-4 py-2 hover:bg-orange-500 hover:text-white">HVAC Installation</a>
              <a href="./services/service2.html" class="block px-4 py-2 hover:bg-orange-500 hover:text-white">Maintenance</a>
              <a href="./services/service3.html" class="block px-4 py-2 hover:bg-orange-500 hover:text-white">Air Quality</a>
            </div>
          </div>

          <a href="./blogs.html">Blogs</a>
        </nav>
      </div>

      <!-- BUTTON -->
      <div class="hidden md:flex justify-end">
        <button
          class="group flex items-center gap-3 bg-white text-black px-5 py-2 rounded-full text-sm font-semibold
          transition-all duration-500 ease-in-out hover:bg-orange-500 hover:text-white">
          CONTACT US

          <span
            class="w-7 h-7 flex items-center justify-center rounded-full bg-orange-500
            transition-all duration-500 ease-in-out group-hover:bg-black">
            <img
              src="./assets/icons/arrow.svg"
              class="w-4 h-4 transform -rotate-[45deg]
              transition-transform duration-500 ease-in-out
              group-hover:rotate-0 group-hover:invert" />
          </span>
        </button>
      </div>

      <!-- MOBILE BUTTON -->
      <div class="md:hidden flex justify-end">
        <button id="mobile-menu-button" class="text-orange-500">
          <svg id="hamburger-icon" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>

          <svg id="close-icon" class="w-8 h-8 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-black bg-opacity-95 text-orange-500 rounded-b-2xl shadow-lg px-6 py-6 space-y-4">
      <button id="mobile-close-inside" class="absolute top-3 right-4 text-orange-500">
        ✕
      </button>

      <a href="./index.html" class="block py-2 border-b border-gray-700">Home</a>
      <a href="./aboutus.html" class="block py-2 border-b border-gray-700">About Us</a>

      <a href="./blogs.html" class="block py-2 border-b border-gray-700">Blogs</a>
      <a href="#" class="block py-2">Contact Us</a>
    </div>
  `;

  // SCRIPT (mobile only)
  setTimeout(() => {
    const mobileMenuButton = header.querySelector("#mobile-menu-button");
    const mobileMenu = header.querySelector("#mobile-menu");
    const hamburger = header.querySelector("#hamburger-icon");
    const closeIcon = header.querySelector("#close-icon");
    const insideClose = header.querySelector("#mobile-close-inside");

    function toggleMenu() {
      mobileMenu.classList.toggle("hidden");
      hamburger.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    }

    mobileMenuButton.addEventListener("click", toggleMenu);
    insideClose.addEventListener("click", toggleMenu);
  }, 0);

  return header;
}
