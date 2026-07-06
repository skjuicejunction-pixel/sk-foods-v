export default function Stats() {
  const stats = [
    {
      number: "9+",
      title: "Years of Experience",
      icon: "🏆",
    },
    {
      number: "50+",
      title: "Corporate Clients",
      icon: "🏢",
    },
    {
      number: "500+",
      title: "Corporate Events",
      icon: "🎉",
    },
    {
      number: "50K+",
      title: "Meals Served",
      icon: "🍱",
    },
  ];

  return (
    <section className="py-20 bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Achievements
          </h2>

          <p className="mt-4 text-green-100 max-w-3xl mx-auto">
            We take pride in delivering quality food and reliable catering
            solutions for corporate workplaces and special events.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white text-gray-800 rounded-2xl p-8 text-center shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-green-700">
                {item.number}
              </h3>

              <p className="mt-3 font-semibold">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}