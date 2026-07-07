import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-12 gap-10">

          {/* Company */}
          <div className="md:col-span-6">

            <div className="flex items-center gap-4 mb-5">

              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400 bg-white">
                <Image
                  src="/about.jpg"
                  alt="SK Foods"
                  width={64}
                  height={64}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-4xl font-extrabold whitespace-nowrap">
                  <span className="text-yellow-400">SK</span>{" "}
                  <span className="text-white">Foods</span>
                </h2>

                <p className="text-yellow-300 text-sm tracking-wide">
                  Corporate Catering & Food Solutions
                </p>
              </div>

            </div>

            <div className="space-y-5">

              <p className="text-xl italic text-yellow-300 leading-8">
                "Fresh Food. Trusted Service. Lasting Partnerships."
              </p>

              <p className="text-green-100 leading-8 max-w-xl">
                We believe every meal should inspire trust, quality and
                satisfaction. SK Foods delivers hygienic, customized and
                reliable catering solutions that help organizations create
                exceptional workplace dining experiences.
              </p>

              <a
                href="https://www.linkedin.com/in/bathala-kodanda-reddy-5215652b1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-200 font-semibold transition"
              >
                💼 Follow us on LinkedIn
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">

            <h3 className="text-xl font-bold text-yellow-400 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-green-100">

              <li>
                <a href="#" className="hover:text-yellow-300 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-yellow-300 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-yellow-300 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-yellow-300 transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-300 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div className="md:col-span-4">

            <h3 className="text-xl font-bold text-yellow-400 mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-green-100">

              <p>
                📍 No.38, 1st Floor,<br />
                Ashwini Layout,<br />
                2nd Main Road,<br />
                Ejipura,<br />
                Bengaluru - 560047
              </p>

              <p>
                📞{" "}
                <a
                  href="tel:+919603022970"
                  className="hover:text-yellow-300 transition"
                >
                  +91 96030 22970
                </a>
              </p>

              <p>
                📞{" "}
                <a
                  href="tel:+919606117074"
                  className="hover:text-yellow-300 transition"
                >
                  +91 96061 17074
                </a>
              </p>

              <p>
                📧{" "}
                <a
                  href="mailto:skjuicejunction@gmail.com"
                  className="hover:text-yellow-300 transition"
                >
                  skjuicejunction@gmail.com
                </a>
              </p>

              <p>
                🕒 Monday – Sunday
                <br />
                8:00 AM – 8:00 PM
              </p>

            </div>

          </div>

        </div>

        <hr className="my-10 border-green-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p className="text-green-200">
            © 2026
            <span className="text-yellow-400 font-bold"> SK</span>
            <span className="text-white font-bold"> Foods</span>. All Rights Reserved.
          </p>

          <p className="text-yellow-300 text-center">
            ⭐ FSSAI Licensed • GST Registered • Trusted Corporate Catering Partner
          </p>

        </div>

      </div>
    </footer>
  );
}