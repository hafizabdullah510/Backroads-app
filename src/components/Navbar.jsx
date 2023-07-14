import React, { useState, useRef } from "react";
import logo from "../assets/images/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linksStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="nav-logo" className="nav-logo" />
          <FaBars className="fa-bars" onClick={toggleLinks} />
        </div>
        <div className="links-cont" style={linksStyle}>
          <div ref={linksRef} className="nav-links">
            <AnchorLink onClick={toggleLinks} href="#hero">
              Home
            </AnchorLink>
            <AnchorLink onClick={toggleLinks} href="#about">
              About
            </AnchorLink>
            <AnchorLink onClick={toggleLinks} href="#services">
              Services
            </AnchorLink>
            <AnchorLink onClick={toggleLinks} href="#featured">
              Featured
            </AnchorLink>
            <AnchorLink onClick={toggleLinks} href="#gallery">
              Gallery
            </AnchorLink>
          </div>
        </div>
        <div className="social-links">
          <a href="#">
            <FaFacebook className="fa-social" />
          </a>
          <a href="#">
            <FaGithub className="fa-social" />
          </a>
          <a href="#">
            <FaTwitter className="fa-social" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
