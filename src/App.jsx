import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Catering from "./pages/Catering";
import CommunityProgram from "./pages/CommunityProgram";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-black">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/community-program" element={<CommunityProgram />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
