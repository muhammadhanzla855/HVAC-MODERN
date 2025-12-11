export function BookingFormSection() {
  const section = document.createElement("section");
  section.className = "bg-gray-50";

  section.innerHTML = `
    <div class="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">

      <!-- LEFT -->
      <div class="md:w-1/2 w-full mb-12 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10">
          Book Your HVAC<br />Service Now
        </h1>

        <div class="space-y-3 text-sm text-gray-600">
          <p><span class="font-medium">Office Address:</span> 123 Cool Air Blvd, New York, NY 10001</p>
          <p><span class="font-medium">Email Address:</span> support@Heatfix.com</p>
          <p><span class="font-medium">Phone Number:</span> (800) 123-4567</p>
        </div>

        <hr class="my-8 border-gray-200">

        <p class="text-sm font-medium text-gray-700 mb-4">FOLLOW US:</p>
        <div class="flex space-x-3">
          <span class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200">S</span>
          <span class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200">f</span>
          <span class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200">t</span>
        </div>
      </div>

      <!-- FORM -->
      <div class="md:w-1/2 w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:ml-auto">
        <form id="hvacBookingForm" class="space-y-5">

          <div>
            <label class="block text-sm text-gray-700 mb-2">Full Name</label>
            <input type="text" placeholder="Your full name"
              class="w-full bg-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none" required>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-2">Email Address</label>
            <input type="email" placeholder="Type your email address"
              class="w-full bg-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none" required>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-2">Phone Number</label>
            <input type="tel" placeholder="xxx-xxx-xxxx"
              class="w-full bg-gray-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none" required>
          </div>

          <button type="submit"
            class="w-full flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full transition">
            GET A CALL BACK
            <span class="bg-white text-orange-500 w-7 h-7 rounded-full flex items-center justify-center">→</span>
          </button>

        </form>
      </div>
    </div>
  `;

  document.body.appendChild(section);

  // Form submit logic
  section.querySelector("#hvacBookingForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Callback request submitted!");
    e.target.reset();
  });
}
