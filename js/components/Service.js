export function Service() {
    console.log("Why Choose Section Loaded");

    const section = document.createElement("section");
    section.className = "w-full py-24 bg-[#f9fafb]";

    section.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <!-- LEFT IMAGE -->
            <div>
                <img 
                    src="https://framerusercontent.com/images/gQ2IgeI51Ou4BIGJGCZ3wi4vNc.png"
                    class="w-full h-[600px] object-cover rounded-3xl"
                    alt="Technician Working"
                />
            </div>

            <!-- RIGHT CONTENT -->
            <div>
                <h2 class="text-5xl font-bold mb-6 leading-tight">
                    Why People Choose<br> Houseplus?
                </h2>

                <p class="text-gray-600 text-lg leading-relaxed max-w-xl">
                    Guiding principles that shape our approach to HVAC services,
                    ensuring unparalleled service and exceptional experiences for our
                    discerning clientele.
                </p>

                <!-- FEATURES GRID -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">

                    <!-- FEATURE 1 -->
                    <div class="flex gap-4">
                        <span class="text-orange-500 text-4xl">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='none' stroke='%23f97316' stroke-width='2' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 5 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 5c.69 0 1.3-.4 1.51-1H11a2 2 0 1 1 4 0h-.09c.21.6.82 1 1.51 1 .69 0 1.3-.4 1.51-1l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19 9c0 .69.4 1.3 1 1.51H21a2 2 0 1 1 0 4h-.09c-.6.21-1 .82-1.51 1z'/%3E%3C/svg%3E" />
                        </span>
                        <div>
                            <h3 class="text-xl font-semibold">Lower Energy Bills</h3>
                            <p class="text-gray-600 pt-1 text-sm">
                                Regular servicing helps your AC run efficiently, reducing electricity.
                            </p>
                        </div>
                    </div>

                    <!-- FEATURE 2 -->
                    <div class="flex gap-4">
                        <span class="text-orange-500 text-4xl">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='none' stroke='%23f97316' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M4 3h16v6H4zM4 15h16v6H4zM4 9v6'/%3E%3C/svg%3E" />
                        </span>
                        <div>
                            <h3 class="text-xl font-semibold">Better Air Quality</h3>
                            <p class="text-gray-600 pt-1 text-sm">
                                Cleaning filters removes dust, allergens, and bacteria.
                            </p>
                        </div>
                    </div>

                    <!-- FEATURE 3 -->
                    <div class="flex gap-4">
                        <span class="text-orange-500 text-4xl">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='none' stroke='%23f97316' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M4 6h16M4 12h16M4 18h16'/%3E%3C/svg%3E" />
                        </span>
                        <div>
                            <h3 class="text-xl font-semibold">Reduced Repair Costs</h3>
                            <p class="text-gray-600 pt-1 text-sm">
                                Routine check-ups catch small issues before they grow.
                            </p>
                        </div>
                    </div>

                    <!-- FEATURE 4 -->
                    <div class="flex gap-4">
                        <span class="text-orange-500 text-4xl">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='none' stroke='%23f97316' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M12 3v18M3 12h18'/%3E%3C/svg%3E" />
                        </span>
                        <div>
                            <h3 class="text-xl font-semibold">Consistent Comfort</h3>
                            <p class="text-gray-600 pt-1 text-sm">
                                Enjoy steady temperature with no fluctuations.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    `;

    document.body.appendChild(section);
}
