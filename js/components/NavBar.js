export function NavBar() {
  const header = document.createElement("header");
  header.className = "absolute top-0 left-0 w-full bg-transparent z-20";

  header.innerHTML = `
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

      <!-- Logo only -->
      <div class="flex items-center">
        <img src="./assets/icons/logo.svg" alt="Logo" class="w-22 h-12">
      </div>

      <!-- Desktop Navigation Links + Contact Button -->
      <div class="hidden md:flex items-center gap-6">
        <nav class="flex items-center gap-6 text-sm font-medium text-white">

          <!-- Home -->
          <a href="./index.html" class="cursor-pointer hover:text-orange-400 transition">Home</a>

          <!-- About Us -->
          <a href="./aboutus.html" class="cursor-pointer hover:text-orange-400 transition">About Us</a>

          <!-- Services with professional dropdown -->
          <div class="relative group cursor-pointer">
            <span class="flex items-center gap-1 text-white font-medium hover:text-orange-400 transition">
              Services
              <svg class="w-3 h-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </span>
            <div class="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-30 py-2">
              <a href="./services/service1.html" class="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white rounded-lg transition">HVAC Installation</a>
              <a href="./services/service2.html" class="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white rounded-lg transition">Maintenance & Repair</a>
              <a href="./services/service3.html" class="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white rounded-lg transition">Air Quality Solutions</a>
            </div>
          </div>

          <!-- Blogs -->
          <a href="./blogs.html" class="cursor-pointer hover:text-orange-400 transition">Blogs</a>
        </nav>

        <!-- Contact Button -->
        <button
          class="group flex items-center gap-3 bg-white text-black px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white active:scale-95"
        >
          CONTACT US
          <span
            class="w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-black group-hover:rotate-0 active:scale-90"
          >
            <img 
              src="./assets/icons/arrow.svg" 
              alt="arrow icon"
              class="w-4 h-4 transition-all duration-300 transform -rotate-[45deg] group-hover:rotate-0 group-hover:invert"
            />
          </span>
        </button>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <button id="mobile-menu-button" class="text-white focus:outline-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-white text-black shadow-lg z-20 flex flex-col md:hidden">
      <a href="./index.html" class="px-6 py-3 border-b border-gray-200 hover:bg-orange-500 hover:text-white transition">Home</a>
      <a href="./aboutus.html" class="px-6 py-3 border-b border-gray-200 hover:bg-orange-500 hover:text-white transition">About Us</a>

      <!-- Mobile Services dropdown -->
      <div class="border-b border-gray-200">
        <button class="w-full flex justify-between items-center px-6 py-3 hover:bg-orange-500 hover:text-white transition" id="mobile-services-btn">
          Services
          <svg class="w-4 h-4 transform transition-transform" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
        <div id="mobile-services-menu" class="hidden flex flex-col bg-gray-50">
          <a href="./services/service1.html" class="px-6 py-2 hover:bg-orange-500 hover:text-white transition">HVAC Installation</a>
          <a href="./services/service2.html" class="px-6 py-2 hover:bg-orange-500 hover:text-white transition">Maintenance & Repair</a>
          <a href="./services/service3.html" class="px-6 py-2 hover:bg-orange-500 hover:text-white transition">Air Quality Solutions</a>
        </div>
      </div>

      <a href="./blogs.html" class="px-6 py-3 border-b border-gray-200 hover:bg-orange-500 hover:text-white transition">Blogs</a>
      <a href="#" class="px-6 py-3 hover:bg-orange-500 hover:text-white transition">Contact Us</a>
    </div>

    <!-- Mobile menu toggle script -->
    <script>
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      const mobileServicesBtn = document.getElementById('mobile-services-btn');
      const mobileServicesMenu = document.getElementById('mobile-services-menu');
      mobileServicesBtn.addEventListener('click', () => {
        mobileServicesMenu.classList.toggle('hidden');
        mobileServicesBtn.querySelector('svg').classList.toggle('rotate-180');
      });
    </script>
  `;

  return header;
}
