import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SpotList from "./components/SpotList";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import SearchSpot from "./pages/SearchSpot";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SpotList />

      <Routes>
        <Route path="/searchspot" element={<SearchSpot />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
