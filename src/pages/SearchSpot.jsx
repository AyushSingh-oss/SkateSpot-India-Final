import React, { useState } from "react";
import { Search, Filter, MapPin } from "lucide-react";

const SearchSpot = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const spots = [
    {
      id: 1,
      name: "Freedom Park",
      location: "Bangalore, Karnataka",
      type: "Flatground",
      image:
        "https://images.unsplash.com/photo-1597008533994-87e0b8a86841?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Marine Drive Skate Strip",
      location: "Mumbai, Maharashtra",
      type: "Street Spot",
      image:
        "https://images.unsplash.com/photo-1605281984283-4a41df0e6c52?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "India Gate Plaza",
      location: "Delhi",
      type: "Open Plaza",
      image:
        "https://images.unsplash.com/photo-1533157961141-9deae2f2d9c0?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Cubbon Park Rails",
      location: "Bangalore, Karnataka",
      type: "Rails & Stairs",
      image:
        "https://images.unsplash.com/photo-1598811168383-4f2a4e63dff0?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Goa Beach Promenade",
      location: "Goa",
      type: "Cruise Spot",
      image:
        "https://images.unsplash.com/photo-1616401789024-885a74d53b48?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      name: "Saket Plaza",
      location: "Delhi NCR",
      type: "Street Ledges",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const filteredSpots = spots.filter(
    (spot) =>
      spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-950 to-neutral-900 text-white px-4 md:px-10 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 mb-4">
          Find Your Next Skate Spot 🛹
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Welcome to <span className="text-white font-semibold">SkateSpot India</span> — 
          your one-stop map for the most iconic skate locations across the country.  
          Search by city, explore fresh spots, or add your own to inspire others!
        </p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
        <div className="relative w-full md:w-2/3 lg:w-1/2">
          <input
            type="text"
            placeholder="Search for a city, spot name, or type (e.g. skatepark, plaza)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 pl-12 rounded-xl bg-neutral-800 border border-neutral-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
          />
          <Search className="absolute left-4 top-4 text-gray-400" size={22} />
        </div>

        <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold transition-all shadow-md">
          <Filter size={18} />
          Filters
        </button>
      </div>

      {/* Results Grid (No inner scroll) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pb-10">
        {filteredSpots.map((spot) => (
          <div
            key={spot.id}
            className="bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
          >
            <img
              src={spot.image}
              alt={spot.name}
              className="h-48 w-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{spot.name}</h3>
              <p className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                <MapPin size={16} /> {spot.location}
              </p>
              <p className="text-gray-500 text-sm">Type: {spot.type}</p>
              <button className="mt-4 w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-semibold transition">
                View Details
              </button>
            </div>
          </div>
        ))}

        {filteredSpots.length === 0 && (
          <p className="text-gray-500 col-span-full text-center py-10">
            No spots found. Try searching for a different city or type.
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Can’t find your favorite spot?
        </h2>
        <p className="text-gray-400 mb-6">
          Be part of the movement — add your own skate spot and help the Indian skate
          community grow stronger! 🇮🇳
        </p>
        <a
          href="/addspot"
          className="inline-block bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition"
        >
          + Add a New Spot
        </a>
      </div>
    </section>
  );
};

export default SearchSpot;
