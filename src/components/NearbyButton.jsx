import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const NearbyButton = ({ onNearby }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={onNearby}
      className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-5 rounded-lg w-3/5 mx-auto mt-4 shadow-md transition-all duration-200 active:scale-95"
    >
      <FaMapMarkerAlt className="text-lg" />
      <span>View Nearby</span>
    </button>
  );
};

export default NearbyButton;
