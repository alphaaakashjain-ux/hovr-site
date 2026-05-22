"use client";

import { useEffect, useState } from "react";

export default function HovrWebsite() {
  const whatsappLink =
  "https://wa.me/353899652412?text=Hello%20Hindustan%20Helicopters%0A%0AI%20would%20like%20a%20helicopter%20quotation.%0A%0AName%3A%20%0ADestination%3A%20%0ATravel%20Date%3A%20%0ANumber%20of%20Passengers%3A%20%0AAdditional%20Requirements%3A%20";

  // WHY SECTION SLIDESHOW
  const whyImages = [
    "/Kedarnath.png",
    "/Taj Mahal.png",
    "/Hawa Mahal.jpg",
  ];

  const [whyIndex, setWhyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWhyIndex((prev) => (prev + 1) % whyImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/helicopter.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          <div className="max-w-3xl">

            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-7 text-white">
              Hindustan Helicopters
            </h1>

            <p className="text-lg md:text-xl uppercase text-gray-200 mb-8">
              Pilgrimage • Weddings • VIP Travel • Tourism • Emergency Services
            </p>

            <p className="text-sm uppercase tracking-widest text-sky-200 mb-8">
              Book anytime, book anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-4 rounded-2xl font-semibold text-center"
              >
                Get Quote on WhatsApp
              </a>

              <a
                href="tel:+353899652412"
                className="border border-white/40 hover:bg-white hover:text-black transition text-white px-8 py-4 rounded-2xl font-semibold text-center"
              >
                Call Now
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              PAN India Helicopter Services
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We help arrange helicopter charter coordination across India for pilgrimage, travel, and special events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Kedarnath Yatra",
                desc: "Helicopter assistance for Kedarnath pilgrimage routes and Char Dham travel.",
              },
              {
                title: "Wedding Entry",
                desc: "Luxury helicopter entry coordination for weddings and grand events.",
              },
              {
                title: "Private Travel",
                desc: "City-to-city helicopter charter assistance for VIP travel.",
              },
              {
                title: "Emergency Support",
                desc: "Urgent helicopter coordination support depending on availability.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY SECTION */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Simple, Fast & Reliable Helicopter Booking Assistance
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">

              <p>
                • We connect clients with suitable helicopter charter options through verified aviation operator networks across India.
              </p>

              <p>
                • Whether it’s pilgrimage travel, wedding events, or urgent travel needs, we help simplify the coordination process.
              </p>

              <p>
                • Our focus is fast communication, transparent guidance, and helping clients explore available options quickly.
              </p>

            </div>
          </div>

          {/* SLIDESHOW */}
          <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[420px]">

            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{
                backgroundImage: `url('${whyImages[whyIndex]}')`,
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>

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
                a: "We work with operator networks to help clients explore suitable charter options.",
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
                className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.q}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Need a Helicopter Booking?
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Share your travel dates and destination to get available helicopter options.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            className="bg-green-500 hover:bg-green-600 transition px-10 py-5 rounded-2xl text-lg font-semibold inline-block"
          >
            WhatsApp Now
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-8 text-center text-gray-500 text-sm border-t">
        © 2026 A SmartCity Solutions Product.
      </footer>

    </div>
  );
}