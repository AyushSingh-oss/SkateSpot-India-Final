import React, { useState } from "react";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");
  const [report, setReport] = useState("");

  const handleContactChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting us! We'll reply soon 🤙");
    setContactData({ name: "", email: "", message: "" });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your feedback! You’re helping improve the Indian skate scene 🛹🇮🇳");
    setFeedback("");
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    alert("Spot report submitted! We’ll review it ASAP 🚨");
    setReport("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white flex flex-col items-center px-6 py-16">
      
      {/* Page Header */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 tracking-tight">
          Connect & Contribute 🛹
        </h1>
        <p className="text-gray-300 mt-4 leading-relaxed">
          Welcome to <span className="text-red-400 font-semibold">SkateSpot India</span> — 
          a movement to unite skaters from every corner of India.  
          Whether you want to get in touch, drop feedback, or report an issue, this is your hub.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        
        {/* Contact Section */}
        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl shadow-xl p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-red-500 mb-4">📩 Contact Us</h2>
          <p className="text-gray-400 text-sm mb-6">
            Collaborations, events, partnerships — or just say hey 👋
          </p>

          <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contactData.name}
              onChange={handleContactChange}
              required
              className="bg-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactData.email}
              onChange={handleContactChange}
              required
              className="bg-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={contactData.message}
              onChange={handleContactChange}
              rows="4"
              required
              className="bg-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Feedback Section */}
        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl shadow-xl p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-red-500 mb-4">💬 Feedback</h2>
          <p className="text-gray-400 text-sm mb-6">
            Help us make SkateSpot India better for every skater out there.
          </p>

          <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-4">
            <textarea
              name="feedback"
              placeholder="Share your thoughts about the platform, new features, or user experience..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="5"
              required
              className=" h-62 bg-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>

      {/* Report Section */}
      <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl shadow-xl p-8 w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-bold text-red-500 mb-4">🚨 Report a Spot</h2>
        <p className="text-gray-400 text-sm mb-6">
          Found a spot that’s unsafe, vandalized, or incorrectly listed?  
          Help keep the community clean and updated by reporting it here.
        </p>

        <form onSubmit={handleReportSubmit} className="flex flex-col gap-4">
          <textarea
            name="report"
            placeholder="Describe the issue (include location name or URL if possible)..."
            value={report}
            onChange={(e) => setReport(e.target.value)}
            rows="5"
            required
            className="bg-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Report Spot
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="mt-16 text-center text-gray-400">
        <h3 className="text-lg font-semibold text-white mb-3">Follow Our Journey</h3>
        <p>
          📸 Instagram:{" "}
          <a
            href="https://instagram.com/skatespotindia"
            target="_blank"
            rel="noreferrer"
            className="text-red-400 hover:underline"
          >
            @skatespotindia
          </a>
        </p>
        <p className="mt-2 text-sm text-gray-500">
          SkateSpot India © {new Date().getFullYear()} — Built for skaters, by skaters 🇮🇳
        </p>
      </div>
    </div>
  );
}

export default Contact;
