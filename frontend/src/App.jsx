import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import SearchSpot from "./pages/SearchSpot";
import AddSpot from "./pages/AddSpot";
import ViewNearby from "./pages/ViewNearby";
import SpotCardPage from "./pages/SpotCardPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Community from "./pages/Community";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/searchspot" element={<SearchSpot />} />
        <Route path="/viewnearby" element={<ViewNearby />} />
        <Route path="/spotcardpage/:id" element={<SpotCardPage />} />
        <Route path="/about" element={<About />} />

        {/* Protected Routes */}
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        <Route
          path="/addspot"
          element={
            <ProtectedRoute>
              <AddSpot />
            </ProtectedRoute>
          }
        />
        <Route
          path="/community"
          element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
