import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [tab, setTab] = useState("inquiry");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Inquiry sent successfully!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            course: "",
            message: "",
          });
        },
        () => {
          alert("Failed to send inquiry. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-10">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Get in Touch with Delta Academy
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Have questions about courses, admissions, or guidance?
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT INFO */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">📍 Visit Our Campus</h3>
            <p className="text-sm text-slate-300">
              Shri Bhekrai Mata Madhyamik Vidyalaya Road,<br />
              Bhekrai Nagar, Hadapsar,<br />
              Pune – 412308
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">📞 Contact</h3>
            <ul className="text-sm text-slate-300 space-y-2">
              <li><b className="text-white">Mobile:</b> +91 93712 91136</li>
              <li><b className="text-white">Office:</b> +91 93712 91137</li>
              <li><b className="text-white">Email:</b> info@deltaacademy.edu</li>
            </ul>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
            <p className="text-lg font-semibold text-emerald-400">Open 24/7</p>
            <p className="text-sm text-slate-300">Guidance available anytime.</p>
          </div>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/919371291137"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 font-semibold"
          >
            WhatsApp
          </a>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border p-8">

          {/* TABS */}
          <div className="flex gap-8 mb-8 border-b">
            <button
              onClick={() => setTab("inquiry")}
              className={`pb-3 font-semibold ${
                tab === "inquiry"
                  ? "text-sky-600 border-b-2 border-sky-600"
                  : "text-slate-500"
              }`}
            >
              Quick Inquiry
            </button>
          </div>

          {/* FORM */}
          {tab === "inquiry" && (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="border rounded-lg px-4 py-3"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="border rounded-lg px-4 py-3"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="md:col-span-2 border rounded-lg px-4 py-3"
              />

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="md:col-span-2 border rounded-lg px-4 py-3"
              >
                <option value="">Select Course</option>
                <option>JEE</option>
                <option>NEET</option>
                <option>Foundation</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Message (Optional)"
                className="md:col-span-2 border rounded-lg px-4 py-3"
              />

              <button
                type="submit"
                className="md:col-span-2 bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg font-semibold"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>

      {/* MAP */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <iframe
          title="Delta Academy Location"
          src="https://www.google.com/maps?q=Delta+Education+Academy+Bhekrai+Nagar+Hadapsar+Pune+412308&output=embed"
          className="w-full h-[420px] rounded-2xl shadow-xl"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Contact;
