import React from "react";
import { Helmet } from "react-helmet";

import ContactUs from "../ContactUs/ContactUs";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>À PROPOS</title>
        <link rel="canonical" />
      </Helmet>
      <h1 className="About">À PROPOS DE NOUS</h1>

      <div className="descriptionNormed2">
        <div className="descriptionNormed">
          <p className="textdescription">
           
            <span className="descrNostech">NOSTECH</span> 
          </p>
          
          <p className="textdescription">

          <span className="destxt"> It's an e-commerce website </span> 
          specializing in selling laptops allows
        you to easily browse through the selection of products, choose
        the best one that fits your needs, and add it to your shopping
        cart. To finalize your purchase, you'll need to bring your receipt
         to the local store and pay in person.
          </p>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default AboutUs;
