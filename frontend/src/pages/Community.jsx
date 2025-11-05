import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Send,
  ImagePlus,
  Users,
  X,
  ArrowUp,
} from "lucide-react";

function Community() {
  const [likedPosts, setLikedPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [newPost, setNewPost] = useState({
    user: "",
    caption: "",
    image: "",
    location: "",
  });
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Aarav Sharma",
      location: "Mumbai Skatepark",
      image:
        "https://images.unsplash.com/photo-1600952841320-b3d7b4a6f79e?auto=format&fit=crop&w=800&q=80",
      caption: "Perfect grind today at Mumbai Skatepark 🔥",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Meera Patel",
      location: "Delhi Street Spot",
      image:
        "https://images.unsplash.com/photo-1520975918318-3e3b0e5cc9ad?auto=format&fit=crop&w=800&q=80",
      caption: "Street session vibes ✨",
      time: "5 hours ago",
    },
  ]);

  // Scroll button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLike = (id) => {
    setLikedPosts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleComment = (id, text) => {
    if (!text.trim()) return;
    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), text],
    }));
  };

  const addNewPost = () => {
    if (!newPost.user || !newPost.caption || !newPost.image) return;
    setPosts([
      {
        id: Date.now(),
        ...newPost,
        time: "Just now",
      },
      ...posts,
    ]);
    setNewPost({ user: "", caption: "", image: "", location: "" });
    setShowModal(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
          Skate Community 🛹
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Share your rides, connect with skaters, and build the skate scene
          across India.
        </p>
      </motion.div>

      {/* Join Section */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800/40 border border-gray-700 rounded-2xl p-8 text-center mb-12 shadow-lg hover:shadow-orange-400/20 max-w-3xl mx-auto"
      >
        <Users className="w-10 h-10 mx-auto text-orange-400 mb-4" />
        <h2 className="text-2xl font-semibold">Join the Skate India Family</h2>
        <p className="text-gray-400 mt-2">
          Be part of India’s fastest-growing skateboarding network. Ride,
          share, and connect.
        </p>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-orange-500/40">
          Join Now
        </button>
      </motion.div>

      {/* Posts Feed */}
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-800/40 border border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-pink-400/20"
          >
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  {post.user.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{post.user}</h3>
                  {post.location && (
                    <p className="text-sm text-gray-400">{post.location}</p>
                  )}
                </div>
              </div>
              <p className="text-xs text-gray-500">{post.time}</p>
            </div>

            {post.image && (
              <img
                src={post.image}
                alt={post.caption}
                className="w-full max-h-[500px] object-cover"
              />
            )}

            <div className="p-4 space-y-4">
              <p className="text-gray-300">{post.caption}</p>

              {/* Like & Comment Buttons */}
              <div className="flex items-center gap-6">
                <button
                  onClick={() => toggleLike(post.id)}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      likedPosts.includes(post.id)
                        ? "text-pink-500 fill-pink-500"
                        : "text-gray-400"
                    }`}
                  />
                  <span>{likedPosts.includes(post.id) ? "Liked" : "Like"}</span>
                </button>

                <div className="flex items-center gap-2 text-gray-400">
                  <MessageCircle className="w-6 h-6" />
                  <span>{(comments[post.id]?.length || 0) + " Comments"}</span>
                </div>
              </div>

              {/* Comment Section */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleComment(post.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                  className="w-full bg-gray-900 border border-gray-700 text-white p-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <div className="mt-2 space-y-1 max-h-32 overflow-y-auto">
                  {(comments[post.id] || []).map((c, i) => (
                    <p key={i} className="text-gray-400 text-sm">
                      💬 {c}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Post Button */}
    {/* Floating Post Button */}
        <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 bg-white-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg z-50"
        >
        <ImagePlus className="w-6 h-6" />
        </motion.button>


      {/* Scroll To Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Create Post Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-lg text-white relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold mb-4">
                Create a New Skate Post 🛹
              </h2>

              <input
                type="text"
                placeholder="Your name"
                value={newPost.user}
                onChange={(e) =>
                  setNewPost({ ...newPost, user: e.target.value })
                }
                className="w-full mb-3 bg-gray-800 border border-gray-700 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="text"
                placeholder="Location (optional)"
                value={newPost.location}
                onChange={(e) =>
                  setNewPost({ ...newPost, location: e.target.value })
                }
                className="w-full mb-3 bg-gray-800 border border-gray-700 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <textarea
                placeholder="Write your caption..."
                value={newPost.caption}
                onChange={(e) =>
                  setNewPost({ ...newPost, caption: e.target.value })
                }
                className="w-full mb-3 bg-gray-800 border border-gray-700 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="text"
                placeholder="Paste image URL here"
                value={newPost.image}
                onChange={(e) =>
                  setNewPost({ ...newPost, image: e.target.value })
                }
                className="w-full mb-3 bg-gray-800 border border-gray-700 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
              />

              {newPost.image && (
                <motion.img
                  src={newPost.image}
                  alt="Preview"
                  className="rounded-xl mb-4 max-h-64 w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}

              <button
                onClick={addNewPost}
                className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 transition-all duration-300 px-6 py-3 rounded-xl font-semibold text-white"
              >
                <Send className="w-5 h-5" /> Post
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Community;
