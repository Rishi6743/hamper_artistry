import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={"/"} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
            <span class="ml-3 text-xl logo">hamper_artistry</span>
          </Link>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/"} class="mr-5 hover:text-gray-900">Home</Link>
            <Link to={"/gallery"} class="mr-5 hover:text-gray-900">Explore</Link>
            <Link to={"/testimonial"} class="mr-5 hover:text-gray-900">Experience</Link>
            <Link to={"/services"} class="mr-5 hover:text-gray-900"> Services</Link>
            <Link to={"/about"} class="mr-5 hover:text-gray-900"> About</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
