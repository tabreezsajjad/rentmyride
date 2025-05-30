const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Banner Image */}
        <img
          src="/images/about-us.jpg"
          alt="About RentMyRide"
          className="rounded-lg shadow-lg mb-8 w-full h-64 object-cover"
        />

        {/* Intro */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-green-600 mb-4">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to <strong>RentMyRide</strong> — your trusted car rental partner.
            We’re a proudly local company committed to providing clean, high-quality, well-maintained vehicles at fair prices.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you need a stylish sedan for a quick business trip, a spacious SUV for family getaways, or a compact hatchback for city drives — we’ve got you covered.
          </p>
          <p className="text-gray-700">
            We’re passionate about convenience, cleanliness, and cost transparency. No hidden charges. No hassle. Just drive.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: "🚗",
              title: "Diverse Fleet",
              text: "Choose from economy cars, sedans, SUVs, and luxury rides.",
            },
            {
              icon: "💰",
              title: "Affordable Pricing",
              text: "Transparent pricing with no hidden fees.",
            },
            {
              icon: "🧼",
              title: "Clean & Reliable",
              text: "All vehicles are sanitized and quality-checked before handoff.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
