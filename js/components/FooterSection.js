export function FooterSection() {
  const footer = document.createElement("footer");
  footer.className = "bg-black text-gray-400";

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-6 py-20">

      <!-- TOP CONTENT -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 relative">

        <!-- LEFT -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold">
              H
            </div>
            <span class="text-white text-xl font-semibold">HVAC MODERN</span>
          </div>

          <h3 class="text-white text-lg font-semibold mb-3">
            Certified HVAC Experts
          </h3>

          <p class="text-sm leading-relaxed max-w-md mb-8">
            At Heatfix, we take pride in having a team of highly trained HVAC professionals.
          </p>

          <div class="flex items-center gap-10">
            <span class="text-xs text-gray-300 font-semibold">RHYTHM</span>
            <span class="text-xs text-gray-300 font-semibold">CHEMICAL</span>
            <span class="text-xs text-gray-300 font-semibold">SUNSH</span>
            <span class="text-xs text-gray-300 font-semibold">COOPERATE</span>
          </div>
        </div>

        <!-- DIVIDER -->
        <div class="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-800"></div>

        <!-- RIGHT -->
        <div class="md:pl-16">
          <h3 class="text-white text-xl font-semibold mb-4">
            Let’s Talk HVAC Solutions
          </h3>

          <p class="text-sm max-w-md mb-8">
            Whether you need emergency repairs, a quote for a new system, our friendly team is ready to help.
          </p>

          <button
            class="flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
          >
            GET STARTED NOW
            <span class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center">
              →
            </span>
          </button>
        </div>
      </div>

      <!-- BOTTOM DIVIDER -->
      <div class="border-t border-gray-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">

        <!-- LINKS -->
        <div class="flex gap-6 mb-4 md:mb-0">
          <a href="#" class="hover:text-white transition">Home</a>
          <a href="#" class="hover:text-white transition">About Us</a>
          <a href="#" class="hover:text-white transition">Services</a>
          <a href="#" class="hover:text-white transition">Testimonials</a>
          <a href="#" class="hover:text-white transition">Contact</a>
        </div>

        <!-- COPYRIGHT -->
        <p class="text-gray-500">
          © 2025 HVAC MODERN. All rights reserved.
        </p>
      </div>

    </div>
  `;

  document.body.appendChild(footer);
}
