import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-4 bg-neutral-950 text-gray-300 py-10 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* --- Logo & About --- */}
        <div>
          <h2 className="text-2xl font-extrabold text-red-500 mb-3">SkateSpot India</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Discover, share, and explore the best skateboarding spots across India.  
            Built by skaters, for skaters. 🛹
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Add Spot</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Nearby Spots</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Community</a></li>
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-500" />  
              <a href="mailto:info@skatespot.in" className="hover:text-red-500 transition">
                info@skatespot.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />  
              <span>New Delhi, India</span>
            </li>
          </ul>
        </div>

        {/* --- Social Media --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <FaYoutube />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* --- Divider --- */}
      <div className="border-t border-neutral-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white font-medium">SkateSpot India</span>.  
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
