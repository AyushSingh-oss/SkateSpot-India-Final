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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/searchspot" element={<SearchSpot />} />
        <Route path="/addspot" element={<AddSpot />} />
        <Route path="/viewnearby" element={<ViewNearby />} />
        <Route path="/spotcardpage/:id" element={<SpotCardPage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/community" element={<Community />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
