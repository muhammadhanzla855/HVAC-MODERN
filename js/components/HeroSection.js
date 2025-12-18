// js/components/HeroSection.js

export function HeroSection() {
  console.log("HeroSection loaded");

  const section = document.createElement("section");

  section.innerHTML = `
    <section class="w-full bg-[#f7f8fa] py-24">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 bg-white rounded-3xl p-12">

        <!-- LEFT — IMAGE -->
        <div class="w-full h-[420px] lg:h-full">
          <img 
            src="https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="HVAC Technician"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <!-- RIGHT — CONTENT -->
        <div class="flex flex-col justify-center">

          <span class="text-orange-500 font-semibold uppercase tracking-widest text-sm">
            — Who We Are
          </span>

          <h1 class="mt-4 text-5xl font-extrabold text-gray-900 leading-tight">
            Efficient Heating <br /> and Cooling Systems
          </h1>

          <p class="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            At <span class="font-semibold text-gray-800">Climafix</span>, we believe that every
            home and business deserves perfect comfort. With over
            <span class="font-semibold text-gray-800"> [X] years</span> of experience in HVAC services,
            we provide reliable heating and cooling solutions you can trust.
          </p>

          <!-- BUTTON -->
          <div class="mt-10">
            <button
              class="group flex items-center gap-4 bg-orange-500 text-white
              px-8 py-4 rounded-full text-base font-semibold tracking-wide
              transition-all duration-500 ease-in-out hover:bg-black">

              LEARN MORE

              <span
                class="w-8 h-8 flex items-center justify-center rounded-full bg-white
                transition-all duration-500 ease-in-out group-hover:bg-orange-500">

                <img
                  src="./assets/icons/arrow.svg"
                  alt="Arrow"
                  class="w-4 h-4 transform -rotate-[45deg]
                  transition-transform duration-500 ease-in-out
                  group-hover:rotate-0 group-hover:invert" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  `;

  document.body.appendChild(section);
}
