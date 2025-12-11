export function ServiceHighlights() {
    console.log("Service Cards Section Loaded");

    // Create a wrapper section
    const section = document.createElement("section");
    section.className = "w-full py-24 bg-[#f9fafb]";

    // Insert heading + cards
    section.innerHTML = `
        <div class="max-w-7xl mx-auto px-6">

            <!-- HEADING -->
            <h2 class="text-5xl font-bold text-center mb-12">
                Discover Expert<br/> HVAC Services Today
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

                <!-- CARD 1 -->
                <div class="bg-white border rounded-3xl p-6 flex flex-col md:flex-row gap-6 shadow-sm">
                    <img 
                        src="https://framerusercontent.com/images/u3ObTLZpHUyV9xVSEFCcpifLD0.png" 
                        class="w-full md:w-1/2 h-80 object-cover rounded-2xl" 
                        alt="HVAC Maintenance"
                    />
                    <div class="flex flex-col justify-between">
                        <div>
                            <h2 class="text-3xl font-semibold text-gray-900">HVAC Maintenance</h2>

                            <p class="text-orange-500 text-3xl font-bold mt-4">20% 
                                <span class="text-lg font-medium text-gray-600">OFF</span>
                            </p>

                            <p class="text-gray-600 mt-2">Improve air quality, reduce allergens.</p>
                        </div>

                        <button class="mt-6 flex items-center justify-center border px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                            BOOK NOW <span class="ml-2 text-orange-500 text-xl">↗</span>
                        </button>
                    </div>
                </div>

                <!-- CARD 2 -->
                <div class="bg-white border rounded-3xl p-6 flex flex-col md:flex-row gap-6 shadow-sm">
                    <img 
                        src="https://framerusercontent.com/images/kFhJwu6kZhaO7D8M62bpo4gELcw.png" 
                        class="w-full md:w-1/2 h-80 object-cover rounded-2xl" 
                        alt="AC Installation"
                    />
                    <div class="flex flex-col justify-between">
                        <div>
                            <h2 class="text-3xl font-semibold text-gray-900">AC Installation</h2>

                            <p class="text-orange-500 text-3xl font-bold mt-4">15% 
                                <span class="text-lg font-medium text-gray-600">OFF</span>
                            </p>

                            <p class="text-gray-600 mt-2">New AC installation.</p>
                        </div>

                        <button class="mt-6 flex items-center justify-center border px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                            BOOK NOW <span class="ml-2 text-orange-500 text-xl">↗</span>
                        </button>
                    </div>
                </div>

                <!-- CARD 3 -->
                <div class="bg-white border rounded-3xl p-6 flex flex-col md:flex-row gap-6 shadow-sm">
                    <img 
                        src="https://framerusercontent.com/images/CJClDHqhBQtkHEjgfjGH6rAAJ7M.png" 
                        class="w-full md:w-1/2 h-80 object-cover rounded-2xl" 
                        alt="Air Quality Solutions"
                    />
                    <div class="flex flex-col justify-between">
                        <div>
                            <h2 class="text-3xl font-semibold text-gray-900">Air Quality Solutions</h2>

                            <p class="text-orange-500 text-3xl font-bold mt-4">10% 
                                <span class="text-lg font-medium text-gray-600">OFF</span>
                            </p>

                            <p class="text-gray-600 mt-2">Stay chill, save big.</p>
                        </div>

                        <button class="mt-6 flex items-center justify-center border px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                            BOOK NOW <span class="ml-2 text-orange-500 text-xl">↗</span>
                        </button>
                    </div>
                </div>

                <!-- CARD 4 -->
                <div class="bg-white border rounded-3xl p-6 flex flex-col md:flex-row gap-6 shadow-sm">
                    <img 
                        src="https://framerusercontent.com/images/6BdJQMuKx9vf30GFASuvH8BXE.png" 
                        class="w-full md:w-1/2 h-80 object-cover rounded-2xl" 
                        alt="HVAC System"
                    />
                    <div class="flex flex-col justify-between">
                        <div>
                            <h2 class="text-3xl font-semibold text-gray-900">HVAC System</h2>

                            <p class="text-orange-500 text-3xl font-bold mt-4">30% 
                                <span class="text-lg font-medium text-gray-600">OFF</span>
                            </p>

                            <p class="text-gray-600 mt-2">Friendly service, honest pricing.</p>
                        </div>

                        <button class="mt-6 flex items-center justify-center border px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                            BOOK NOW <span class="ml-2 text-orange-500 text-xl">↗</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    `;

    document.body.appendChild(section);
}
