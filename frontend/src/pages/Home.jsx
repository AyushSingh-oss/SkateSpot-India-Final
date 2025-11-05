import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import SpotList from "../components/SpotList"

function Home() {
  const navigate = useNavigate();
  const handleSearch = () => {
    
  }
  return (
    <>
      <HeroSection onNearby={() => navigate("/viewnearby")} onSearch={handleSearch} />
      <SpotList />
    </>
  );
}


export default Home;