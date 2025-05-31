import "./styles/App.css";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
