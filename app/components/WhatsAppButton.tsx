import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919603022970?text=Hello%20SK%20Foods,%20I%20am%20interested%20in%20your%20Corporate%20Catering%20Services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SK Foods on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex items-center gap-3">

        {/* Message Bubble */}
        <div className="hidden md:block bg-white text-green-700 px-4 py-2 rounded-full shadow-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
          Get a Free Quote
        </div>

        {/* WhatsApp Icon */}
        <div className="w-16 h-16 rounded-full bg-white shadow-2xl p-2 hover:scale-110 transition duration-300">
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={64}
            height={64}
            className="w-full h-full object-contain"
            priority
          />
        </div>

      </div>
    </a>
  );
}