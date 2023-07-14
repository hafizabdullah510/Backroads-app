import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-footer">
      <div className="footer-links">
        <AnchorLink href="#hero">Home</AnchorLink>
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#services">Services</AnchorLink>
        <AnchorLink href="#featured">Featured</AnchorLink>
        <AnchorLink href="#gallery">Gallery</AnchorLink>
      </div>
      <div className="social-links footer-social-links">
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
      <p className="footer-info">
        Copyright &copy; Backroads Travel Tours Company 2023. All Rights
        Reserved
      </p>
    </section>
  );
};

export default Footer;
