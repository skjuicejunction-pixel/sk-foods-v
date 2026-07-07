import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/about.jpg"
              alt="SK Foods"
              width={500}
              height={500}
              priority
              className="rounded-3xl shadow-2xl object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Content */}
          <div>

            <p className="text-yellow-500 uppercase tracking-[4px] font-semibold mb-3">
              OUR EXPERTISE
            </p>

            <h2 className="text-5xl font-bold text-green-700 leading-tight mb-6">
              Complete Food <br />
              & Catering Solutions
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              SK Foods is a trusted Corporate Catering & Workplace Food
              Solutions company delivering fresh, hygienic and delicious
              food for Corporate Offices, IT Parks, Business Parks and
              Institutions across
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
              Corporate Cafeteria, Tuck Shop Services, Fresh Juices,
              Healthy Snacks, Bakery Products, Event Catering,
              Birthday Celebrations and customized food solutions.
            </p>

            {/* Our Vision */}
            <div className="mt-8 bg-green-50 border-l-4 border-yellow-400 rounded-xl p-6 shadow-sm">

              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Our Vision
              </h3>

              <p className="text-gray-700 leading-8">
                At SK Foods, our vision is to become one of India's most trusted
                food solution brands by delivering exceptional corporate catering
                services and introducing premium branded food products.
                We are expanding into Homemade Pickles, Andhra Podis,
                Special Spice Powders and other authentic food products,
                bringing traditional flavours, uncompromising quality and
                trusted taste to homes and businesses across India.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}