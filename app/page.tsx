"use client";

import { useEffect, useState } from "react";

export default function HovrWebsite() {
  const whatsappLink =
    "https://wa.me/919664088876?text=Hello%20Hindustan%20Helicopters%0A%0AI%20would%20like%20a%20helicopter%20quotation.%0A%0AName%3A%20%0ADestination%3A%20%0ATravel%20Date%3A%20%0ANumber%20of%20Passengers%3A%20%0AAdditional%20Requirements%3A%20";

  // SLIDESHOW IMAGES
  const whyImages = [
    "/Kedarnath.png",
    "/taj-mahal.png",
    "/hawa-mahal.jpg",
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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Ladakh.webp')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        {/* CONTENT */}
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          <div className="max-w-3xl">

            {/* LOGO */}
            <img
              src="/HH.png"
              alt="Hindustan Helicopters Logo"
              className="h-50 w-auto mb-10"
            />

            <p className="text-sm uppercase tracking-[0.25em] text-sky-200 mb-6">
              PAN India Helicopter Assistance
            </p>

            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Hindustan Helicopters
            </h1>

            <p className="text-lg md:text-xl uppercase text-gray-200 mb-10 leading-relaxed">
              Pilgrimage • Weddings • VIP Travel • Tourism • Emergency Services
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-4 rounded-2xl font-semibold text-center shadow-lg"
              >
                Get Quote on WhatsApp
              </a>

              <a
                href="tel:+919664088876"
                className="border border-white/40 hover:bg-white hover:text-black transition text-white px-8 py-4 rounded-2xl font-semibold text-center"
              >
                Call Now
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-4">
              PAN India Helicopter Services
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We help arrange helicopter charter coordination across India for pilgrimage travel, wedding events, tourism, and private helicopter requirements.
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
                desc: "Luxury helicopter entry coordination for weddings and grand celebrations.",
              },
              {
                title: "Private Travel",
                desc: "City-to-city helicopter charter assistance for VIP and private travel.",
              },
              {
                title: "Emergency Support",
                desc: "Urgent helicopter coordination support depending on route and availability.",
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

          {/* TEXT */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              Simple, Fast & Reliable
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">

              <p>
                • Fast communication and transparent booking assistance for helicopter travel across India.
              </p>

              <p>
                • We connect clients with verified charter operators for pilgrimage, weddings, VIP travel, and tourism.
              </p>

              <p>
                • Our goal is to simplify the booking process and help you explore suitable options quickly.
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

      {/* CTA SECTION */}
      <section className="bg-black text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Need a Helicopter Booking?
          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Share your travel destination, passenger count, and preferred dates to explore available helicopter charter options.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition px-10 py-5 rounded-2xl text-lg font-semibold inline-block shadow-lg"
          >
            WhatsApp Now
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-8 text-center text-gray-500 text-sm border-t">
        © 2026 Hindustan Helicopters. All rights reserved.
      </footer>

    </div>
  );
}