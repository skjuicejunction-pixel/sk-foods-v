export default function Clients() {
  const clients = [
    "AMD",
    "Ather Energy",
    "Exentrix Studios",
    "TeamLease",
    "Indegene",
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-green-700 mb-10">
        Our Clients
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {clients.map((client) => (
          <div
            key={client}
            className="bg-white shadow-lg rounded-xl px-8 py-6 text-xl font-semibold"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  );
}