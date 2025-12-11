export function NavBar() {
  const header = document.createElement("header");
  header.className = "absolute top-0 left-0 w-full bg-transparent z-20";

  header.innerHTML = `
    <div class="max-w-7xl mx-auto flex items-center px-6 py-6 text-white">

      <a class="flex items-center gap-3 font-semibold text-lg">
        <div class="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold">
          H
        </div>
        <a href="./index.html"<span>HVAC MODERN</span>
      </a>

      <nav class="ml-auto hidden md:flex items-center gap-6 text-sm font-medium">
        <div class="flex items-center gap-1 cursor-pointer hover:text-orange-400 transition">
          All Pages
          <span class="text-xs">▾</span>
        </div>
        <a href="./aboutus.html" class="cursor-pointer hover:text-orange-400 transition">About Us</a>
        <a href="./services.html" class="cursor-pointer hover:text-orange-400 transition">
  Services
</a>
      </nav>

      <button class="ml-6 flex items-center gap-3 bg-white text-black px-5 py-2 rounded-full text-sm font-semibold">
        CONTACT US
        <span class="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center">→</span>
      </button>

    </div>
  `;

  return header;
}
