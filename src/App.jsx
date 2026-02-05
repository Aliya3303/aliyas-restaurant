import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/contact";
import Index from "./index";

/* HOME PAGE COMPONENT */
function HomePage() {
  const [category, setCategory] = useState("Home");

  return (
    <>
      <Navbar
  selectedCategory={category}
  setSelectedCategory={setCategory}
/>

      <Hero />
      <Menu selectedCategory={category} />
      <About />
      <Contact />
    </>
  );
}

/* MAIN APP */
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        {/* INDEX / LANDING PAGE */}
        <Route path="/" element={<Index />} />

        {/* HOME / MENU PAGE */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
