import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewNearby = () => {
  const [range, setRange] = useState(20);
  const navigate = useNavigate();

  // Dummy data for now
  const dummySpots = [
    {
      id: 1,
      name: "Freedom Skatepark",
      city: "Bangalore",
      distance: 8,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1600181953057-3c9a9f758f5e?q=80&w=800",
    },
    {
      id: 2,
      name: "DLF Skate Plaza",
      city: "Delhi",
      distance: 15,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=800",
    },
    {
      id: 3,
      name: "Goa Street Spot",
      city: "Goa",
      distance: 32,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1511193311914-7c9a75a2e512?q=80&w=800",
    },
    {
      id: 4,
      name: "Marine Drive Skate Zone",
      city: "Mumbai",
      distance: 65,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800",
    },
    {
      id: 5,
      name: "SkateAdda Park",
      city: "Pune",
      distance: 90,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1543164904-8b643e6f3c56?q=80&w=800",
    },
  ];

  // Filter spots based on the slider range
  const filteredSpots = dummySpots.filter((spot) => spot.distance <= range);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white px-6 md:px-20 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-red-500 mb-8">
        🛹 View Nearby Skate Spots
      </h1>

      {/* Range Filter */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
        <label className="text-lg font-semibold">Search within range:</label>
        <input
          type="range"
          min="20"
          max="100"
          step="5"
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
          className="w-64 accent-red-500 cursor-pointer"
        />
        <span className="text-lg font-medium">{range} km</span>
      </div>

      {/* Spot Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSpots.length > 0 ? (
          filteredSpots.map((spot) => (
            <div
              key={spot.id}
              className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/40"
            >
              <img
                src={spot.image}
                alt={spot.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-5 space-y-2">
                <h2 className="text-2xl font-bold text-red-400">
                  {spot.name}
                </h2>
                <p className="text-gray-400">{spot.city}</p>
                <div className="flex justify-between text-sm text-gray-300">
                  <p>
                    Distance:{" "}
                    <span className="font-semibold">{spot.distance} km</span>
                  </p>
                  <p className="text-yellow-400 font-semibold">
                    ⭐ {spot.rating}
                  </p>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => navigate(`/spotcardpage/${spot.id}`)}
                  className="mt-4 w-full bg-red-500 hover:bg-red-600 transition text-white py-2 rounded-md font-semibold"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full text-lg">
            No skate spots found within this range. Try increasing the distance!
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewNearby;
