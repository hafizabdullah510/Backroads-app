import React from "react";
import tour1 from "../assets/images/tour-1.jpeg";
import tour2 from "../assets/images/tour-2.jpeg";
import tour3 from "../assets/images/tour-3.jpeg";
import tour4 from "../assets/images/tour-4.jpeg";
import { FaSearch } from "react-icons/fa";
const Gallery = () => {
  return (
    <main className="gallery-cont" id="gallery">
      <div className="gallery-img-cont">
        <img src={tour1} alt="gallery-image" className="gallery-img" />
        <FaSearch className="search-icon" />
      </div>
      <div className="gallery-img-cont">
        <img src={tour2} alt="gallery-image" className="gallery-img" />
        <FaSearch className="search-icon" />
      </div>
      <div className="gallery-img-cont">
        <img src={tour3} alt="gallery-image" className="gallery-img" />
        <FaSearch className="search-icon" />
      </div>
      <div className="gallery-img-cont">
        <img src={tour4} alt="gallery-image" className="gallery-img" />
        <FaSearch className="search-icon" />
      </div>
      <div className="gallery-img-cont">
        <img src={tour1} alt="gallery-image" className="gallery-img" />
        <FaSearch className="search-icon" />
      </div>
      <div className="gallery-img-cont">
        <img src={tour2} alt="gallery-image" className="gallery-img" />
        <FaSearch className="search-icon" />
      </div>
      <div className="gallery-img-cont">
        <img src={tour4} alt="gallery-image" className="gallery-img" />
        <FaSearch className="search-icon" />
      </div>
      <div className="gallery-img-cont">
        <img src={tour3} alt="gallery-image" className="gallery-img" />
        <FaSearch className="search-icon" />
      </div>
    </main>
  );
};

export default Gallery;
