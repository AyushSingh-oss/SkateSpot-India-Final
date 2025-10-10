import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaPhotoVideo, FaVideo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const SpotCard = ({
  title = "Flat Ground",
  location = "Greater Noida, India",
  distance = "4 km",
  difficulty = "Kook Level",
  photos = 12,
  videos = 4,
  image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  directions = "#",
}) => {
  const naviagte = useNavigate();
  return (
    <div
      onClick={() => {
        naviagte("/spotcardpage/123");
      }}
      className="flex-shrink-0 w-80 bg-neutral-900 text-white border border-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-red-400/20 transition-all duration-300 cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover border-b border-neutral-800"
      />

      <div className="p-4">
        <h3 className="text-red-500 font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{location}</p>
        <p className="text-gray-500 text-xs mb-2">{distance}</p>

        <div className="inline-block border border-red-500 text-red-500 rounded-md text-xs px-2 py-1 mb-3">
          {difficulty}
        </div>

        <div className="flex items-center justify-start gap-4 text-gray-300 text-sm mb-2">
          <span className="flex items-center gap-1">
            <FaPhotoVideo /> {photos}
          </span>
          <span className="flex items-center gap-1">
            <FaVideo /> {videos}
          </span>
        </div>

        <div className="flex items-center gap-1 text-red-500 mb-3">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
        </div>

        <a
          href={directions}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default SpotCard;
