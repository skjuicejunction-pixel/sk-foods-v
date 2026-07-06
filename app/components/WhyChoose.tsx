export default function WhyChoose() {
  const features = [
    {
      icon: "🍽️",
      title: "Fresh & Hygienic Food",
      description:
        "Every meal is prepared fresh using quality ingredients with strict hygiene practices.",
    },
    {
      icon: "🛡️",
      title: "FSSAI Licensed",
      description:
        "Our operations follow FSSAI food safety standards to ensure quality and customer confidence.",
    },
    {
      icon: "🏢",
      title: "Corporate Catering Specialists",
      description:
        "Professional catering solutions for IT companies, offices, business parks and corporate events.",
    },
    {
      icon: "☕",
      title: "Pantry Management",
      description:
        "Complete pantry management including tea, coffee, beverages and office snacks.",
    },
    {
      icon: "📦",
      title: "Bulk Orders & Events",
      description:
        "Corporate lunches, conferences, meetings, birthday celebrations and special occasions.",
    },
    {
      icon: "🛒",
      title: "E-commerce Food Supplies",
      description:
        "Branded food products, healthy snacks, bakery items and customized food packs.",
    },
    {
      icon: "🚚",
      title: "On-Time Delivery",
      description:
        "Reliable delivery with consistent service and timely execution for every order.",
    },
    {
      icon: "⭐",
      title: "Quality Assurance",
      description:
        "Dedicated team focused on quality, taste, customer satisfaction and continuous improvement.",
    },
  ];

  return (
    <section id="whychoose" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700">
            Why Choose SK Foods?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">
            We provide complete corporate food solutions with a strong focus on
            quality, hygiene, customer satisfaction and reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-xl font-bold text-green-700 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-white rounded-2xl shadow-md p-8">

          <h3 className="text-2xl font-bold text-center text-green-700 mb-8">
            Trusted Corporate Food Partner
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div>
              <div className="text-4xl mb-2">🛡️</div>
              <p className="font-semibold">FSSAI Licensed</p>
            </div>

            <div>
              <div className="text-4xl mb-2">🥗</div>
              <p className="font-semibold">Fresh Ingredients</p>
            </div>

            <div>
              <div className="text-4xl mb-2">🏢</div>
              <p className="font-semibold">Corporate Solutions</p>
            </div>

            <div>
              <div className="text-4xl mb-2">🚚</div>
              <p className="font-semibold">Reliable Delivery</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}