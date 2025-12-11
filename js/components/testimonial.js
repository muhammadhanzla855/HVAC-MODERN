export function TestimonialSection() {
    console.log("Testimonial Section Loaded");

    // Create Section Wrapper
    const section = document.createElement("section");
    section.className = "w-full py-20 bg-white";

    // Insert HTML
    section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">

        <!-- Heading -->
        <h2 class="text-4xl font-bold text-center mb-16">
            What Our Clients Say
        </h2>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <!-- CARD 1 -->
            <div class="bg-white rounded-xl shadow p-6">
                <div class="flex items-center gap-3 mb-3">
                    <img src="https://framerusercontent.com/images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?scale-down-to=512" class="w-12 h-12 rounded-full" />
                    <div>
                        <h3 class="font-semibold text-gray-900">SAM LEE</h3>
                        <p class="text-sm text-gray-500">Architect, Manhattan, NY</p>
                    </div>
                    <span class="ml-auto text-orange-500 text-lg">★★★★★</span>
                </div>

                <p class="text-gray-700 text-sm leading-relaxed">
                    From booking to installation, the Heatfix team was friendly,
                    knowledgeable, and efficient. My new HVAC system works perfectly.
                </p>
            </div>

            <!-- CARD 2 -->
            <div class="bg-white rounded-xl shadow p-6">
                <div class="flex items-center gap-3 mb-3">
                    <img src="https://framerusercontent.com/images/Gbcn5UlgSTCqncBqfeCByoXxoVw.png" class="w-12 h-12 rounded-full" />
                    <div>
                        <h3 class="font-semibold text-gray-900">MAX COLE</h3>
                        <p class="text-sm text-gray-500">Homeowner, Brooklyn</p>
                    </div>
                    <span class="ml-auto text-orange-500 text-lg">★★★★★</span>
                </div>

                <p class="text-gray-700 text-sm leading-relaxed">
                    I've used Heatfix for years — heating, cooling, tune-ups,
                    even a full system install. They're affordable, honest, and
                    always show up on time.
                </p>
            </div>

            <!-- CARD 3 -->
            <div class="bg-white rounded-xl shadow p-6">
                <div class="flex items-center gap-3 mb-3">
                    <img src="https://framerusercontent.com/images/X39xUXCCmTWMnLia0TioMZuA4.png" class="w-12 h-12 rounded-full" />
                    <div>
                        <h3 class="font-semibold text-gray-900">LEO PARK</h3>
                        <p class="text-sm text-gray-500">Architect, Manhattan, NY</p>
                    </div>
                    <span class="ml-auto text-orange-500 text-lg">★★★★★</span>
                </div>

                <p class="text-gray-700 text-sm leading-relaxed">
                    Heatfix came out the same day when my AC stopped working.
                    They fixed it fast and didn’t leave a mess. Super impressed!
                </p>
            </div>

            <!-- CARD 4 -->
            <div class="bg-white rounded-xl shadow p-6">
                <div class="flex items-center gap-3 mb-3">
                    <img src="https://i.pravatar.cc/60?img=25" class="w-12 h-12 rounded-full" />
                    <div>
                        <h3 class="font-semibold text-gray-900">JAY KIM</h3>
                        <p class="text-sm text-gray-500">First-Time Homeowner</p>
                    </div>
                    <span class="ml-auto text-orange-500 text-lg">★★★★★</span>
                </div>

                <p class="text-gray-700 text-sm leading-relaxed">
                    Heatfix responded the same day when my heating system failed.
                    Amazing service that saved the day!
                </p>
            </div>

            <!-- CARD 5 -->
            <div class="bg-white rounded-xl shadow p-6">
                <div class="flex items-center gap-3 mb-3">
                    <img src="https://framerusercontent.com/images/BvQnfvT3BdL06aE1jfh1gPi1vcY.png" class="w-12 h-12 rounded-full" />
                    <div>
                        <h3 class="font-semibold text-gray-900">RAY CHO</h3>
                        <p class="text-sm text-gray-500">Architect, Manhattan, NY</p>
                    </div>
                    <span class="ml-auto text-orange-500 text-lg">★★★★★</span>
                </div>

                <p class="text-gray-700 text-sm leading-relaxed">
                    What I appreciated most was the transparent pricing.
                    They explained every charge clearly.
                </p>
            </div>

            <!-- CARD 6 -->
            <div class="bg-white rounded-xl shadow p-6">
                <div class="flex items-center gap-3 mb-3">
                    <img src="https://framerusercontent.com/images/bzSiHwtNAgXiEeBnTDuydPi7c.png" class="w-12 h-12 rounded-full" />
                    <div>
                        <h3 class="font-semibold text-gray-900">KAI WU</h3>
                        <p class="text-sm text-gray-500">Property Manager, NY</p>
                    </div>
                    <span class="ml-auto text-orange-500 text-lg">★★★★★</span>
                </div>

                <p class="text-gray-700 text-sm leading-relaxed">
                    Heatfix handled our HVAC maintenance with great care.
                    Fast, clean, and professional service.
                </p>
            </div>

        </div>
    </div>
    `;

    // Append to body
    document.body.appendChild(section);
}
