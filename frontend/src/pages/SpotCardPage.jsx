import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin, Star, Video, Camera } from "lucide-react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const SpotCardPage = () => {
  const { id } = useParams();

  // Mock spot data (can be fetched later from a backend)
  const spot = {
    id,
    name: "Freedom Park",
    location: "Bangalore, Karnataka",
    type: "Flatground + Rails",
    difficulty: "Intermediate",
    rating: 4.5,
    description:
      "Freedom Park in Bangalore is one of the most popular skate-friendly areas with smooth concrete, rails, and plenty of open space. It’s perfect for flat tricks, manuals, and light stair sessions.",
    coordinates: { lat: 12.9784, lng: 77.5911 },
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1597008533994-87e0b8a86841?auto=format&fit=crop&w=800&q=60",
      },
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/4772/4772.mp4",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1605281984283-4a41df0e6c52?auto=format&fit=crop&w=800&q=60",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1616401789024-885a74d53b48?auto=format&fit=crop&w=800&q=60",
      },
    ],
  };

  const [currentMedia, setCurrentMedia] = useState(0);

  const handleNext = () => {
    setCurrentMedia((prev) => (prev + 1) % spot.media.length);
  };

  const handlePrev = () => {
    setCurrentMedia(
      (prev) => (prev - 1 + spot.media.length) % spot.media.length
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-950 to-neutral-900 text-white px-4 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 mb-6 text-center">
          {spot.name}
        </h1>

        {/* Carousel */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden mb-8 group">
          {spot.media[currentMedia].type === "image" ? (
            <img
              src={spot.media[currentMedia].url}
              alt="Spot Media"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <video
              src={spot.media[currentMedia].url}
              controls
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          )}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-500 text-white p-3 rounded-full transition"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-500 text-white p-3 rounded-full transition"
          >
            ❯
          </button>

          {/* Media Counter */}
          <div className="absolute bottom-3 right-3 bg-black/60 text-xs px-3 py-1 rounded-lg">
            {currentMedia + 1} / {spot.media.length}
          </div>
        </div>

        {/* Spot Info */}
        <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 shadow-lg mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">{spot.name}</h2>
              <p className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                <MapPin size={16} /> {spot.location}
              </p>
            </div>
            <div className="flex items-center gap-2 text-yellow-400 mt-3 md:mt-0">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill={i < Math.floor(spot.rating) ? "currentColor" : "none"}
                  stroke="currentColor"
                  size={20}
                />
              ))}
              <span className="text-gray-300 text-sm ml-1">
                ({spot.rating.toFixed(1)})
              </span>
            </div>
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {spot.description}
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-red-500/20 border border-red-500 text-red-400 px-3 py-1 rounded-full">
              Type: {spot.type}
            </span>
            <span className="bg-red-500/20 border border-red-500 text-red-400 px-3 py-1 rounded-full">
              Difficulty: {spot.difficulty}
            </span>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-neutral-700 mb-10">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "350px" }}
              center={spot.coordinates}
              zoom={14}
            >
              <Marker position={spot.coordinates} />
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Feedback / Report */}
        <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold text-red-500 mb-3">
            Share Your Experience 🛹
          </h3>
          <p className="text-gray-400 mb-4">
            Have you skated here? Drop a review, rating, or report an issue to
            help other skaters!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition">
              Leave Feedback
            </button>
            <button className="bg-neutral-800 hover:bg-neutral-700 px-6 py-3 rounded-lg font-semibold border border-red-500 text-red-400 transition">
              Report Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotCardPage;
