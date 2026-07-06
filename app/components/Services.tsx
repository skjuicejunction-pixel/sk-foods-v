export default function Services() {
  const services = [
    "Corporate Catering",
    "Corporate Cafeteria",
    "Pantry Management",
    "Bulk Food Orders",
    "Corporate Events",
    "Birthday Parties",
    "Breakfast",
    "Lunch",
    "Andhra Meals",
    "Fresh Juices",
    "Healthy Sprouts",
    "Healthy Snacks",
    "Chaats",
    "Sandwiches",
    "Pastries",
    "Bakery Products",
    "Tuck Shop Services",
    "E-commerce Food Supplies",
    "Customized Food Packages",
    "Office Tea & Coffee Services",
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-700">
          Our Specialties
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12 max-w-3xl mx-auto">
          SK Foods provides complete workplace food solutions with fresh,
          hygienic, and high-quality catering services for offices, corporate
          campuses, events, and special occasions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {services.map((service) => (
            <div
              key={service}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 text-center"
            >
              <div className="text-4xl mb-4">🍽️</div>

              <h3 className="font-semibold text-green-700 text-lg">
                {service}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}