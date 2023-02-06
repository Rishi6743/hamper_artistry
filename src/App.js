import React from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";


function App() {
  return (<>
    <div>
      <Navbar />
      <Intro />
      <Gallery />
      <Testimonial/>
      <Footer/>
    </div>
  </>

  );
}

export default App;
