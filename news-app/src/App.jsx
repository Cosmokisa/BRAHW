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
import { Link, Element, animateScroll } from "react-scroll";
import Search from "./components/search.jsx";

function App() {
  const options = {
    duration: 2000,
    smooth: true,
  };
  return (
    <div className="newspaper-container">
      <div className="newspaper-page">
        <Header />
        <Navbar />
        <Search />
        <Element>
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
        </Element>
        <Footer />
      </div>
      <button
        onClick={() => {
          animateScroll.scrollToTop(options);
        }}
        className="Scroll-to-top"
      >
        Scroll to top
      </button>
    </div>
  );
}

export default App;
