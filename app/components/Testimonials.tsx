export default function Testimonials() {
  const testimonials = [
    {
      name: "Corporate HR Team",
      company: "IT Company",
      feedback:
        "SK Foods consistently delivers fresh, hygienic, and delicious meals. Their service is always punctual and professional.",
    },
    {
      name: "Office Admin",
      company: "Business Park",
      feedback:
        "Excellent catering service with great menu options. Our employees enjoy the quality and taste every day.",
    },
    {
      name: "Event Coordinator",
      company: "Corporate Event",
      feedback:
        "The team handled our corporate event professionally. Food quality and service exceeded our expectations.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-700">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We are proud to serve corporate clients with quality food and reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-green-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-700 leading-7 italic">
                "{item.feedback}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-green-700">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.company}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}