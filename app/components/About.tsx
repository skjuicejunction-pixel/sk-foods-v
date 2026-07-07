import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div>
            <Image
              src="/about.png"
              alt="SK Foods Corporate Catering"
              width={650}
              height={500}
              priority
              className="w-full rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div>

            <p className="text-yellow-500 uppercase tracking-[4px] font-semibold mb-3">
              ABOUT SK FOODS
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-green-700 leading-tight mb-6">
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

            <p className="text-gray-600 leading-8">
              We specialize in Corporate Catering,
              Pantry Management, Corporate Cafeterias,
              Tuck Shop Services, Fresh Juices,
              Healthy Snacks, Bakery Products,
              Event Catering, Birthday Celebrations and
              customized food solutions tailored to every
              client's requirements.
            </p>

          </div>

        </div>

        {/* Our Vision */}
        <div className="mt-16 bg-green-50 rounded-3xl shadow-lg p-10 border-l-4 border-yellow-400">

          <h3 className="text-3xl font-bold text-green-700 mb-5">
            Our Vision
          </h3>

          <p className="text-gray-700 leading-9 text-lg">
            Our vision is to become one of India's most trusted Corporate
            Catering & Food Solution brands by delivering exceptional
            quality, consistency and innovation.
            <br />
            <br />
            As part of our growth, SK Foods is expanding into premium
            branded food products including Homemade Pickles, Andhra
            Podis, Special Spice Powders and authentic Indian food
            products. We are committed to bringing traditional flavours,
            hygienic preparation and trusted quality to homes, offices
            and businesses across India while continuously raising the
            standards of corporate catering excellence.
          </p>

        </div>

      </div>
    </section>
  );
}