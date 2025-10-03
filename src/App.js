import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* Main content */}
      <div className="pt-20">
        {" "}
        {/* padding so fixed navbar doesn't cover content */}
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
