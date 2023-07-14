import React from "react";
import tour1 from "../assets/images/tour-1.jpeg";
import tour2 from "../assets/images/tour-2.jpeg";
import tour3 from "../assets/images/tour-3.jpeg";
import tour4 from "../assets/images/tour-4.jpeg";
import { FaFlag } from "react-icons/fa";
const Tours = () => {
  return (
    <section className="featured-section" id="featured">
      <h2 className="section-title">
        Featured <span>tours</span>
      </h2>
      <div className="section-center tours-center">
        <article className="featured-tour">
          <div className="tour-img-cont">
            <img src={tour1} alt="featured-tour" className="featured-img" />
            <p className="featured-date">September 15th, 2020</p>
          </div>
          <div className="featured-info-cont">
            <div className="featured-info">
              <h4>Explore Hong Kong</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis
              </p>
            </div>
            <div className="featured-footer">
              <p className="flag-cont">
                <FaFlag />
                hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>
        <article className="featured-tour">
          <div className="tour-img-cont">
            <img src={tour2} alt="featured-tour" className="featured-img" />
            <p className="featured-date">September 15th, 2020</p>
          </div>
          <div className="featured-info-cont">
            <div className="featured-info">
              <h4>Explore Hong Kong</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis
              </p>
            </div>
            <div className="featured-footer">
              <p className="flag-cont">
                <FaFlag />
                hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>
        <article className="featured-tour">
          <div className="tour-img-cont">
            <img src={tour3} alt="featured-tour" className="featured-img" />
            <p className="featured-date">September 15th, 2020</p>
          </div>
          <div className="featured-info-cont">
            <div className="featured-info">
              <h4>Explore Hong Kong</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis
              </p>
            </div>
            <div className="featured-footer">
              <p className="flag-cont">
                <FaFlag />
                hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>
        <article className="featured-tour">
          <div className="tour-img-cont">
            <img src={tour4} alt="featured-tour" className="featured-img" />
            <p className="featured-date">September 15th, 2020</p>
          </div>
          <div className="featured-info-cont">
            <div className="featured-info">
              <h4>Explore Hong Kong</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis
              </p>
            </div>
            <div className="featured-footer">
              <p className="flag-cont">
                <FaFlag />
                hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>
      </div>
      <div className="featured-btn">
        <a className="btn">all tours</a>
      </div>
    </section>
  );
};

export default Tours;
