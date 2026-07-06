export default function Hero() {
  return (
    <section
      className="relative pt-20 min-h-[78vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center min-h-[78vh]">

        {/* Company Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold">
          <span className="text-yellow-400">SK</span>{" "}
          <span className="text-white">Foods</span>
        </h1>

        {/* Tagline */}
        <h2 className="mt-5 text-2xl md:text-4xl font-bold text-white">
          Corporate Catering & Food Solutions
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-200 leading-8">
          Delivering fresh, hygienic and delicious food solutions for Corporate
          Offices, IT Parks, Business Campuses, Events and Workplaces across
          Bengaluru, Hyderabad & Chennai.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xl font-bold shadow-xl transition"
          >
            Get a Free Quote
          </a>

          <a
            href="https://wa.me/919603022970?text=Hello%20SK%20Foods,%20I%20am%20interested%20in%20your%20Corporate%20Catering%20Services."
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-xl font-bold transition"
          >
            WhatsApp Us
          </a>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full">

          <div className="bg-green-900/70 backdrop-blur-md rounded-2xl border border-green-500 p-6 hover:scale-105 transition">

            <h3 className="text-amber-300 text-5xl font-extrabold">
              9+
            </h3>

            <p className="text-green-100 mt-3 font-medium">
              Years Experience
            </p>

          </div>

          <div className="bg-green-900/70 backdrop-blur-md rounded-2xl border border-green-500 p-6 hover:scale-105 transition">

            <h3 className="text-amber-300 text-5xl font-extrabold">
              50+
            </h3>

            <p className="text-green-100 mt-3 font-medium">
              Corporate Clients
            </p>

          </div>

          <div className="bg-green-900/70 backdrop-blur-md rounded-2xl border border-green-500 p-6 hover:scale-105 transition">

            <h3 className="text-amber-300 text-5xl font-extrabold">
              500+
            </h3>

            <p className="text-green-100 mt-3 font-medium">
              Corporate Events
            </p>

          </div>

          <div className="bg-green-900/70 backdrop-blur-md rounded-2xl border border-green-500 p-6 hover:scale-105 transition">

            <h3 className="text-amber-300 text-5xl font-extrabold">
              50K+
            </h3>

            <p className="text-green-100 mt-3 font-medium">
              Meals Served
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}