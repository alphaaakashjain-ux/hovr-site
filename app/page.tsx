export default function HovrWebsite() {
  const whatsappLink = "https://wa.me/353899652412?text=Hi%20HOVR%2C%20I%20want%20a%20helicopter%20quotation";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-sm text-gray-300 mb-4">
              PAN India Helicopter Assistance
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Helicopter Charter Assistance Across India
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Pilgrimage • Weddings • VIP Travel • Tourism • Emergency Services
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl text-lg font-semibold text-center"
              >
                Get Quote on WhatsApp
              </a>

              <a
                href="tel:+353899652412"
                className="border border-white/40 hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl text-lg font-semibold text-center"
              >
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-sm">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                ✅ Fast Quotations
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                ✅ PAN India Network
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                ✅ 24/7 Assistance
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                ✅ Verified Operators
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We help arrange helicopter charter solutions across India through trusted operator networks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Pilgrimage",
              desc: "Kedarnath, Char Dham, Vaishno Devi and spiritual travel assistance.",
            },
            {
              title: "Wedding Entry",
              desc: "Luxury helicopter entry arrangements for weddings and special events.",
            },
            {
              title: "Private Travel",
              desc: "City-to-city helicopter charters for VIP and leisure travel.",
            },
            {
              title: "Emergency Assistance",
              desc: "Urgent helicopter coordination support subject to availability.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY HOVR */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Fast, Reliable & Personalized Coordination
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                HOVR helps connect clients with suitable helicopter charter options through verified aviation operator networks across India.
              </p>

              <p>
                Whether you need pilgrimage travel, wedding arrangements, VIP transportation, or urgent movement assistance — we help simplify the coordination process.
              </p>

              <p>
                Our focus is fast communication, transparent guidance, and helping clients explore available options quickly.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1200&auto=format&fit=crop"
              alt="Helicopter"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* KEDARNATH SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-black text-white rounded-[2rem] overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-10 md:p-16">
              <p className="uppercase tracking-[0.2em] text-sm text-gray-400 mb-4">
                Popular Service
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Kedarnath Helicopter Booking Assistance
              </h2>

              <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                <p>
                  Assistance for helicopter travel planning related to Kedarnath and Char Dham routes.
                </p>

                <p>
                  Pricing depends on travel dates, route availability, operator schedules, and passenger count.
                </p>

                <p>
                  Share your preferred dates and group size to receive available options.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                className="inline-block mt-8 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl text-lg font-semibold"
              >
                Get Kedarnath Quote
              </a>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop"
                alt="Pilgrimage"
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions from customers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How much does helicopter booking cost?",
                a: "Pricing depends on route, helicopter type, passenger count, permissions, and travel duration.",
              },
              {
                q: "Do you own helicopters?",
                a: "HOVR works with operator networks to help clients explore suitable charter options.",
              },
              {
                q: "How quickly can bookings be arranged?",
                a: "Availability depends on scheduling, route permissions, weather, and operator availability.",
              },
              {
                q: "Do you provide wedding helicopter entry services?",
                a: "Yes, wedding and event helicopter coordination assistance is available in select regions.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Need a Helicopter Quote?
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Share your travel requirement, destination, passenger count, and dates. We’ll help you explore available helicopter charter options.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              WhatsApp Us
            </a>

            <a
              href="tel:+353899652412"
              className="border border-white/30 hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8 text-center text-gray-500 text-sm px-6">
        © 2026 HOVR Helicopter Services. All rights reserved.
      </footer>
    </div>
  );
}
