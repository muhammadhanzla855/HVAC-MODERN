// js/components/BookingProcess.js

export function BookingProcess() {
    console.log("Booking Process Section Loaded");

    const section = document.createElement("section");

    section.innerHTML = `
    <section class="w-full py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">

            <!-- TITLE -->
            <div class="mb-12">
                <h2 class="text-5xl font-extrabold text-gray-900 leading-tight">
                    Our Simple <br /> Booking Process
                </h2>
                <p class="mt-4 text-gray-600 text-lg">
                    Scheduling a service with Climafix is simple and fast.
                    <br/>  
                    Follow these easy steps to get the expert.
                </p>
            </div>

            <!-- GRID -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                <!-- LEFT IMAGE -->
                <div>
                    <img 
                        src="https://framerusercontent.com/images/9a3u7MAIQgsZirTS3xGK00UnIyo.png?scale-down-to=1024" 
                        class="w-full h-full rounded-3xl object-cover"
                        alt="Booking process"
                    />
                </div>

                <!-- RIGHT CARDS -->
                <div class="flex flex-col gap-8 self-start lg:-mt-20">

                    <!-- CARD 1 -->
                    <div class="bg-[#f7f7f7] p-10 rounded-3xl shadow-sm">
                        <div class="text-orange-500 text-4xl mb-4">🚨</div>
                        <h3 class="text-2xl font-semibold text-gray-900">
                            24/7 Emergency Support
                        </h3>
                        <p class="mt-3 text-gray-600 text-lg">
                            HVAC problems don’t follow business hours.
                            That's why our emergency team is available 24/7 to respond.
                        </p>
                    </div>

                    <!-- CARD 2 -->
                    <div class="bg-[#f7f7f7] p-10 rounded-3xl shadow-sm">
                        <div class="text-orange-500 text-4xl mb-4">⭐</div>
                        <h3 class="text-2xl font-semibold text-gray-900">
                            Expert Technicians
                        </h3>
                        <p class="mt-3 text-gray-600 text-lg">
                            Your satisfaction is our priority.  
                            We ensure every detail is handled with care.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>


    <!-- ⭐ NEW SECTION YOU REQUESTED ⭐ -->
    <section class="w-full py-24 bg-white border-t mt-10">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

            <!-- Item -->
            <div class="text-center">
                <div class="text-5xl mb-4">📅</div>
                <h3 class="text-xl font-semibold text-gray-900">Book Your Service</h3>
                <p class="mt-3 text-gray-600">
                    Choose a date and time that’s most convenient.
                </p>
            </div>

            <!-- Item -->
            <div class="text-center">
                <div class="text-5xl mb-4">⏱️</div>
                <h3 class="text-xl font-semibold text-gray-900">We Arrive on Time</h3>
                <p class="mt-3 text-gray-600">
                    Our certified technician arrives as scheduled.
                </p>
            </div>

            <!-- Item -->
            <div class="text-center">
                <div class="text-5xl mb-4">🛠️</div>
                <h3 class="text-xl font-semibold text-gray-900">Flexible Scheduling</h3>
                <p class="mt-3 text-gray-600">
                    From AC repairs to installations — we do it all.
                </p>
            </div>

            <!-- Item -->
            <div class="text-center">
                <div class="text-5xl mb-4">🏅</div>
                <h3 class="text-xl font-semibold text-gray-900">Satisfaction Guaranteed</h3>
                <p class="mt-3 text-gray-600">
                    Confirm your service details and book instantly.
                </p>
            </div>

        </div>
    </section>
    `;

    document.body.appendChild(section);
}
