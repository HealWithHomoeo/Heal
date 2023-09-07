import React from "react";
import logoImage from "../images/Logo.png";
import colImage from "../images/colImage.png";
import "./LP.css";

function LP() {
  return (
    <div className="wrapper">
      
      <section className="Landingpage">
        <div className="logoContainer">
          <img src={logoImage} alt="Logo" className="Logo" />
        </div>

        <div className="LandingContainer">
          <div className="col1">
            <h1 className="Heading">
              We Are <br /> Coming Soon
            </h1>
            <p className="Para">
              We're coming with extraordinary <br /> homoeopathic services to
              bring you the <br /> power of nature's remedies at your <br />{" "}
              fingertips.
            </p>
          </div>
          <div className="col2">
            <img src={colImage} alt="colImage" className="colImage" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LP;