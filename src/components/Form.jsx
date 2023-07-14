import React from "react";

const Form = () => {
  return (
    <section className="bg-primary">
      <div className="section-center form-center">
        <div className="form-header">
          <h3>Want Latest Tour Info And Updates?</h3>
          <p>Sign up for newsletter and stay up to date</p>
        </div>
        <div className="form-cont">
          <input type="text" className="form-input" placeholder="your email" />
          <button className="btn form-btn" type="button">
            submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
