import Image from "next/image";

const images = [
  { src: "/gallery-1.jpg", alt: "Dining Area" },
  { src: "/gallery-2.jpg", alt: "Food Court" },
  { src: "/corporate-meals.jpg", alt: "Corporate Meals" },
  { src: "/andhra-meals.jpg", alt: "Andhra Style Meals" },
  { src: "/punugulu.jpg", alt: "Punugulu" },
  { src: "/Chaats.jpg", alt: "Chaats" },
  { src: "/sandwiches.jpg", alt: "Sandwiches" },
  { src: "/bakery.jpg", alt: "Bakery Items" },
  { src: "/fruit-counter.jpg", alt: "Fruit Counter" },
  { src: "/fruit cups.jpg", alt: "Fresh Fruit Cups" },
  { src: "/fresh juice.jpg", alt: "Fresh Juice" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
          Our Gallery
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Take a glimpse into SK Foods' delicious meals, fresh juices,
          snacks, catering services and modern dining experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={350}
                height={350}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />

              <div className="p-4">
                <h3 className="text-center font-semibold text-green-700">
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}