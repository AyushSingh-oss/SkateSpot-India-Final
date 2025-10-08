import React from "react";
import SpotCard from "./SpotCard";

const spots = [
  {
    title: "Flat Ground",
    location: "Greater Noida, India",
    distance: "4 km",
    difficulty: "Kook Level",
    photos: 12,
    videos: 4,
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Rail Spot",
    location: "Delhi, India",
    distance: "10 km",
    difficulty: "Amateur",
    photos: 8,
    videos: 2,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mini Ramp",
    location: "Noida, India",
    distance: "6 km",
    difficulty: "Intermediate",
    photos: 15,
    videos: 5,
    image: "https://images.unsplash.com/photo-1533228100844-51d9b830b1ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Street Gap",
    location: "Gurugram, India",
    distance: "15 km",
    difficulty: "Pro Level",
    photos: 20,
    videos: 8,
    image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Street Gap",
    location: "Gurugram, India",
    distance: "15 km",
    difficulty: "Pro Level",
    photos: 20,
    videos: 8,
    image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Street Gap",
    location: "Gurugram, India",
    distance: "15 km",
    difficulty: "Pro Level",
    photos: 20,
    videos: 8,
    image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Street Gap",
    location: "Gurugram, India",
    distance: "15 km",
    difficulty: "Pro Level",
    photos: 20,
    videos: 8,
    image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Street Gap",
    location: "Gurugram, India",
    distance: "15 km",
    difficulty: "Pro Level",
    photos: 20,
    videos: 8,
    image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Street Gap",
    location: "Gurugram, India",
    distance: "15 km",
    difficulty: "Pro Level",
    photos: 20,
    videos: 8,
    image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Street Gap",
    location: "Gurugram, India",
    distance: "15 km",
    difficulty: "Pro Level",
    photos: 20,
    videos: 8,
    image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Street Gap",
    location: "Gurugram, India",
    distance: "15 km",
    difficulty: "Pro Level",
    photos: 20,
    videos: 8,
    image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=800&q=80",
  },
];

const SpotList = () => {
  return (
    <section className="py-10 bg-black">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
        Nearby Skate Spots 🛹
      </h2>

      <div
        className="
          flex overflow-x-auto overflow-y-hidden 
          space-x-5 px-5 pb-4 snap-x snap-mandatory
          scroll-smooth 
          scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-neutral-800
        "
      >
        {spots.map((spot, index) => (
          <div key={index} className="snap-start">
            <SpotCard {...spot} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpotList;
