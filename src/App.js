import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero2 from "./components/Hero2";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route element={<Intro />} path={"/"} />
          <Route element={<Hero2 />} path={"//"} />
          <Route element={<Gallery />} path={"/gallery"} />
          <Route element={<Category />} path={"/category"} />
          <Route element={<Gallery />} path={"/gallery"} />
          <Route element={<Testimonial />} path={"/testimonial"} />
          <Route element={<Services />} path={"/services"} />
          <Route element={<About />} path={"/about"} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
