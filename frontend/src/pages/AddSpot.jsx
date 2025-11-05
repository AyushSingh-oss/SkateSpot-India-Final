import React, { useState } from "react";
import { FaCamera, FaMapMarkerAlt, FaSkating } from "react-icons/fa";

function AddSpot() {
  const [spotType, setSpotType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🛹 Spot Added: ${spotType} - ${city}`);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center py-12 px-4">
      {/* Header Section */}
      <div className="text-center max-w-2xl mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-3">
          Add Your Favorite Skate Spot
        </h1>
        <p className="text-gray-400 text-lg">
          Help the community discover amazing skate locations across India.
          Upload photos, describe the vibe, and share your go-to spot!
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-2xl bg-neutral-900 p-8 rounded-2xl shadow-lg border border-red-500/20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 text-gray-200"
        >
          {/* Upload Section */}
          <label className="border-2 border-dashed border-red-500 rounded-xl p-6 text-center cursor-pointer hover:bg-neutral-800 transition">
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              hidden
              required
            />
            <div className="flex flex-col items-center gap-2">
              <FaCamera className="text-4xl text-red-500" />
              <p className="text-gray-300">
                {files.length
                  ? `${files.length} file(s) selected`
                  : "Upload Photos or Videos"}
              </p>
            </div>
          </label>

          {/* Spot Type */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-red-400">
              Spot Type
            </label>
            <div className="flex items-center bg-neutral-800 rounded-md px-3">
              <FaSkating className="text-red-500 mr-3" />
              <input
                type="text"
                placeholder="e.g. Flat Ground, Skate Park, Stair Set"
                value={spotType}
                onChange={(e) => setSpotType(e.target.value)}
                required
                className="w-full bg-transparent py-3 focus:outline-none placeholder-gray-400 text-white"
              />
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-red-400">
              Difficulty Level
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              required
              className="w-full p-3 bg-neutral-800 rounded-md border border-neutral-700 focus:ring-2 focus:ring-red-500 outline-none text-gray-300"
            >
              <option value="" disabled>
                Select Difficulty
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-red-400">
              City / Location
            </label>
            <div className="flex items-center bg-neutral-800 rounded-md px-3">
              <FaMapMarkerAlt className="text-red-500 mr-3" />
              <input
                type="text"
                placeholder="e.g. Mumbai, Delhi, Bangalore"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full bg-transparent py-3 focus:outline-none placeholder-gray-400 text-white"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-red-400">
              Description
            </label>
            <textarea
              placeholder="Describe the spot — surface, obstacles, vibe..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full p-3 bg-neutral-800 rounded-md border border-neutral-700 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-400 text-white resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 transition font-semibold py-3 rounded-md text-lg w-full shadow-md"
          >
            + Add Spot
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSpot;
