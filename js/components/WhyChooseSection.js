// js/components/WhyChooseSection.js

export function WhyChooseSection() {
  console.log("Why Choose Section Loaded");

  const section = document.createElement("section");

  section.innerHTML = `
  <section class="w-full py-24">
    <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- LEFT TEXT SIDE -->
      <div>
        <h2 class="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-16">
          Why Choose <br /> Heatfix Services?
        </h2>

        <!-- ITEM 1 -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Trusted Professionals</h3>
          <p class="text-gray-600 text-lg leading-relaxed max-w-xl">
            At Heatfix, our team is made up of certified HVAC technicians who
            bring years of hands-on experience and professionalism.
          </p>
        </div>

        <hr class="border-gray-200 mb-8" />

        <!-- ITEM 2 -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold text-gray-900">On-Time & Reliable</h3>
        </div>

        <hr class="border-gray-200 mb-8" />

        <!-- ITEM 3 -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold text-gray-900">100% Satisfaction</h3>
        </div>

        <hr class="border-gray-200" />
      </div>

      <!-- RIGHT IMAGE -->
      <div class="w-full">
        <img 
          src="https://framerusercontent.com/images/iGLR7F3oZBEAJbWwiM8HAYI.png?scale-down-to=1024"
          class="w-full h-[650px] object-cover rounded-3xl"
          alt="HVAC Technician Working"
        />
      </div>

    </div>
  </section>
  `;

  document.body.appendChild(section.firstElementChild);
}
