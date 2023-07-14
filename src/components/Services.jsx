import React from "react";
import { FaWallet, FaTree, FaSocks } from "react-icons/fa";
const Services = () => {
  return (
    <section className="bg-grey" id="services">
      <h2 className="section-title">
        Our <span>Services</span>
      </h2>
      <div className="section-center services-center">
        <article className="service">
          <FaWallet className="service-icon" />

          <div className="service-info-cont">
            <h4 className="service-title">saving money</h4>
            <p className="service-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
        <article className="service">
          <FaTree className="service-icon" />
          <div className="service-info-cont">
            <h4 className="service-title">endless hiking</h4>
            <p className="service-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
        <article className="service">
          <FaSocks className="service-icon" />
          <div className="service-info-cont">
            <h4 className="service-title">amazing comfort</h4>
            <p className="service-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
