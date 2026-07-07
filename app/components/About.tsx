import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Image */}
          <div>
            <Image
              src="/about.png"
              alt="SK Foods Corporate Catering"
              width={650}
              height={650}
              priority
              className="w-full rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Right Side */}
          <div>

            <p className="text-yellow-500 uppercase tracking-[4px] font-semibold mb-2">
              ABOUT SK FOODS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight mb-6">
              Complete Food <br />
              & Corporate Catering Solutions
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-5">
              SK Foods is a trusted Corporate Catering &
              Workplace Food Solutions company delivering
              fresh, hygienic and delicious meals for
              Corporate Offices, IT Parks, Business Parks,
              Educational Institutions and Events across
              <span className="font-semibold text-green-700">
                {" "}Bengaluru, Hyderabad
              </span>
              {" "}and
              <span className="font-semibold text-green-700">
                {" "}Chennai.
              </span>
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              We specialize in Corporate Catering,
              Pantry Management, Corporate Cafeterias,
              Tuck Shop Services, Fresh Juices,
              Healthy Snacks, Bakery Products,
              Event Catering, Birthday Celebrations
              and customized food solutions tailored
              to every client's requirements.
            </p>

            {/* Vision */}
            <div className="bg-green-50 border-l-4 border-yellow-400 rounded-2xl p-6 shadow-md">

              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Our Vision
              </h3>

              <p className="text-gray-700 leading-8">
                Our vision is to become one of India's most trusted
                Corporate Catering & Food Solution brands by
                delivering exceptional quality, consistency and
                innovation. As part of our growth, SK Foods is
                expanding into premium branded food products
                including Homemade Pickles, Andhra Podis,
                Special Spice Powders and authentic Indian food
                products, bringing traditional flavours and trusted
                quality to homes across India.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}