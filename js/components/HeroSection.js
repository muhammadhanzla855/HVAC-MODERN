// js/components/HeroSection.js

export function HeroSection() {
    console.log("HeroSection loaded");

    const section = document.createElement("section");

    section.innerHTML = `
    <section class="w-full bg-[#f7f8fa] py-20">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-10">

        <!-- LEFT — IMAGE -->
        <div class="w-full">
          <img 
            src="https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="HVAC Technician"
            class="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <!-- RIGHT — CONTENT -->
        <div class="flex flex-col justify-center">
          
          <span class="text-orange-500 font-semibold uppercase tracking-wider">
            — Who We Are
          </span>

          <h1 class="mt-3 text-5xl font-extrabold text-gray-900 leading-tight">
            Efficient Heating <br /> and Cooling Systems
          </h1>

          <p class="mt-6 text-gray-600 text-lg leading-relaxed">
            At Climafix, we believe that every home and business deserves perfect comfort. 
            With over <span class="font-semibold text-gray-800">[X] years</span> of experience in HVAC services, 
            we specialize in providing reliable heating and cooling solutions.
          </p>

          <!-- BUTTONS -->
          <div class="mt-10 flex flex-wrap gap-4">

            <button class="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-orange-600 transition">
              Learn More
              <span class="text-xl">→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
    `;

    document.body.appendChild(section);
}
