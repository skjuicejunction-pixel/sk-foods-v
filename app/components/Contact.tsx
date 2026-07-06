"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    useEffect(() => {
  if (success) {
    const timer = setTimeout(() => {
      setSuccess("");
    }, 5000);

    return () => clearTimeout(timer);
  }
}, [success]);

const [form, setForm] = useState({
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.send(
      "service_qnwwd32",
      "template_ondfm9g",
      {
        name: form.name,
        company: form.company,
        phone: form.phone,
        email: form.email,
        message: form.message,
      },
      "wfjbIn7J8uiLTnHeP"
    );

setSuccess("✅ Thank you! Your enquiry has been sent successfully. Our team will contact you shortly.");
    setForm({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
setSuccess("❌ Failed to send enquiry. Please try again.");  }

  setLoading(false);
};
  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-green-700">
            Contact SK Foods
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">
            Looking for Corporate Catering, Pantry Management,
            Corporate Cafeteria, Tuck Shop Services or Event Catering?
            We'd be happy to discuss your requirements.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">

            <h3 className="text-2xl font-bold text-green-700 mb-6">
              Send an Enquiry
            </h3>
            {success && (
  <div
    className={`mb-6 rounded-lg px-4 py-3 font-medium ${
      success.startsWith("✅")
        ? "bg-green-100 text-green-700 border border-green-300"
        : "bg-red-100 text-red-700 border border-red-300"
    }`}
  >
    {success}
  </div>
)}

           <form onSubmit={sendEmail} className="space-y-5">

             <input
  type="text"
  name="name"
  value={form.name}
  onChange={handleChange}
  required
  placeholder="Your Name"
  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
/>
              <input
  type="text"
  name="company"
  value={form.company}
  onChange={handleChange}
  placeholder="Company Name"
  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
/>
              <input
  type="tel"
  name="phone"
  value={form.phone}
  onChange={handleChange}
  required
  placeholder="Mobile Number"
  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
/>
              <input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  required
  placeholder="Email Address"
  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
/>
              <textarea
  rows={5}
  name="message"
  value={form.message}
  onChange={handleChange}
  required
  placeholder="Tell us about your requirement..."
  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
/>
              <button
  type="submit"
  className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-lg font-bold transition"
>
  Send Enquiry
</button>
            </form>

          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8">

            <h3 className="text-2xl font-bold text-green-700 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-bold text-lg text-green-700">
                  📍 Office Address
                </h4>

                <p className="text-gray-600 leading-7 mt-2">
                  No.38, 1st Floor,
                  <br />
                  Ashwini Layout,
                  <br />
                  2nd Main Road,
                  <br />
                  Ejipura,
                  <br />
                  Bengaluru – 560047
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-green-700">
                  📞 Phone
                </h4>

                <a
                  href="tel:+919603022970"
                  className="block text-gray-600 hover:text-green-700 mt-2"
                >
                  +91 96030 22970
                </a>

                <a
                  href="tel:+919606117074"
                  className="block text-gray-600 hover:text-green-700"
                >
                  +91 96061 17074
                </a>
              </div>

              <div>
                <h4 className="font-bold text-lg text-green-700">
                  📧 Email
                </h4>

                <a
                  href="mailto:skjuicejunction@gmail.com"
                  className="text-gray-600 hover:text-green-700"
                >
                  skjuicejunction@gmail.com
                </a>
              </div>

              <div>
                <h4 className="font-bold text-lg text-green-700">
                  🕒 Working Hours
                </h4>

                <p className="text-gray-600 mt-2">
                  Monday – Sunday
                  <br />
                  8:00 AM – 8:00 PM
                </p>
              </div>

              <div className="pt-6">

                <a
                  href="https://wa.me/919603022970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-lg font-bold transition"
                >
                  WhatsApp Us
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}