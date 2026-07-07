import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/about.png"
              alt="SK Foods Corporate Catering"
              width={650}
              height={500}
              priority
              className="rounded-3xl shadow-2xl object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Content */}
          <div>

            <p className="text-yellow-500 uppercase tracking-[5px] font-semibold mb-3">
              ABOUT SK FOODS
            </p>

            <h2 className="text-5xl font-bold text-green-700 leading-tight mb-6">
              Complete Food <br />
              & Corporate Catering Solutions
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              SK Foods is a trusted Corporate Catering & Workplace Food
              Solutions company delivering fresh, hygienic and delicious
              meals for Corporate Offices, IT Parks, Business Parks,
              Educational Institutions and Events across
              <span className="font-semibold text-green-700">
                {" "}Bengaluru, Hyderabad
              </span>
              {" "}and
              <span className="font-semibold text-green-700">
                {" "}Chennai.
              </span>
            </p>

            <p className="text-gray-600 leading-8 mb-6">
              We specialize in Corporate Catering, Pantry Management,
              Corporate Cafeterias, Tuck Shop Services, Fresh Juices,
              Healthy Snacks, Bakery Products, Event Catering,
              Birthday Celebrations and customized food solutions
              tailored to every client's requirements.
            </p>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg border-l-4 border-yellow-400 p-6 mt-8">

              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Our Vision
              </h3>

              <p className="text-gray-700 leading-8">
                Our vision is to become one of India's most trusted
                Corporate Catering & Food Solution brands by delivering
                exceptional quality, consistent service and innovative
                food experiences. As part of our growth, SK Foods is
                expanding into premium branded food products including
                Homemade Pickles, Andhra Podis, Special Spice Powders
                and authentic Indian food products for homes and
                businesses across India.
              </p>

            </div>

            {/* Quote */}
            <div className="mt-8">

              <p className="text-xl italic text-green-700 font-semibold">
                "Serving Freshness. Building Trust. Creating Lasting Partnerships."
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}