import { motion } from "framer-motion";
import { MapPin, Users, PlusCircle } from "lucide-react";

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white flex flex-col items-center justify-center px-6 py-20">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl text-center space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
          Welcome to <span className="text-white">Skate India</span> 🛹
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          <strong>Skate India</strong> is the heart of India’s skateboarding movement —  
          a space for riders to <strong>connect</strong>, <strong>explore</strong>, and  
          <strong> build community</strong> from the ground up.
        </p>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Discover new skate spots, share your favorite locations, and meet  
          skaters who ride with your same energy. Whether you’re just starting  
          or already ripping, this is your home on wheels.
        </p>
      </motion.div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mt-20">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700 shadow-lg text-center space-y-4 hover:shadow-orange-400/20"
        >
          <MapPin className="w-12 h-12 mx-auto text-orange-400" />
          <h2 className="text-2xl font-semibold text-white">Find Skate Spots</h2>
          <p className="text-gray-400">
            Discover skate spots across India — from Delhi’s busy streets to Goa’s coastal parks.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700 shadow-lg text-center space-y-4 hover:shadow-pink-400/20"
        >
          <Users className="w-12 h-12 mx-auto text-pink-400" />
          <h2 className="text-2xl font-semibold text-white">Join the Community</h2>
          <p className="text-gray-400">
            Connect with skaters near you. Learn, share, and grow together in a nation-wide skate network.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700 shadow-lg text-center space-y-4 hover:shadow-yellow-400/20"
        >
          <PlusCircle className="w-12 h-12 mx-auto text-yellow-400" />
          <h2 className="text-2xl font-semibold text-white">Add New Spots</h2>
          <p className="text-gray-400">
            Found a hidden gem? Add your local spot and help others discover it.  
            Every post builds our skate map together.
          </p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 text-center space-y-6"
      >
        <h3 className="text-2xl font-semibold text-white">
          Ready to roll with the community?
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="/spots"
            className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white text-lg font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-orange-500/40"
          >
            Explore Spots
          </a>
          <a
            href="/add-spot"
            className="border border-pink-500 text-pink-400 hover:bg-pink-500/20 transition-all duration-300 text-lg font-semibold px-6 py-3 rounded-2xl"
          >
            Add a Spot
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
