import React from "react";
import SearchBar from "./SearchBar";
import NearbyButton from "./NearbyButton";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate=useNavigate()
  return (
    <section className="h-90 mt-4 mb-4 relative flex flex-col items-center justify-center text-center bg-neutral-950 text-white px-6 py-20 md:py-32">
      {/* === Background Glow / Accent === */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-red-500/20 blur-[120px] rounded-full" />

      {/* === Main Content === */}
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
        Discover the Best <span className="text-red-500">Skate Spots</span> in
        India
      </h1>

      <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-8">
        Explore, add, and share the coolest skateboarding spots across the
        country. Join the community that’s building India’s skate map 🛹
      </p>

      {/* === Search Bar === */}
      <div className="w-full max-w-lg">
        <SearchBar />
      </div>

      {/* === Nearby Button === */}
      <NearbyButton onNearby={() => navigate("/viewnearby")} />
    </section>
  );
};

export default HeroSection;
