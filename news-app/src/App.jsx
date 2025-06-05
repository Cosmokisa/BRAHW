import "./styles/app.css";
import Home from "./pages/home";
import Saved from "./pages/saved";
import Business from "./pages/business.jsx";
import Navbar from "./components/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Technology from "./pages/technology.jsx";
import Health from "./pages/health.jsx";
import Sport from "./pages/sport.jsx";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";

function App() {
  return (
    <div className="newspaper-container">
      <div className="newspaper-page">
        <Header />
        <Navbar />
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
