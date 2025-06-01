import "./styles/App.css";
import Home from "./pages/home";
import Saved from "./pages/saved";
import Business from "./pages/business.jsx";
import NavBar from "./components/navBar.jsx";
import { Routes, Route } from "react-router-dom";
import Technology from "./pages/technology.jsx";
import Health from "./pages/health.jsx";
import Sport from "./pages/sport.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/health" element={<Health />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
