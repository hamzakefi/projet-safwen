import React from "react";
import "./ContactUs.css";
import messenger from "./messenger.png";
import phone from "./phone.png";
import mail from "./gmail.png";
import map from "./map.png";

const ContactUs = () => {
  return (
    <div>
      <h1 className="normed">CONTACTEZ NOUS</h1>
      <div className="contain" style={{ width: "35rem" }}>
        <a
          target="_blank"
          href="https://www.facebook.com/hamza.kefi1/"
          rel="noreferrer"
        >
          <img className="icon" src={messenger} alt="img" />
        </a>
        <a href="tel:+216-58590717">
          <img className="icon" src={phone} alt="icon" />
        </a>
        <a
          target="_blank"
          href="mailto:kefihamza23.hamza@gmail.com"
          rel="noreferrer"
        >
          <img className="icon" src={mail} alt="img" />
        </a>
      </div>
      <h1 className="normed">RENDEZ NOUS VISITE</h1>
      <div>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/GOMYCODE+Menzah+5/@36.8468867,10.1682541,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd359f19cff1a1:0x71a7d4d04a5b1ef2!8m2!3d36.8468867!4d10.1704428!16s%2Fg%2F11qy9xm8kr"
          rel="noreferrer"
        >
          <img src={map} className="icon2" alt="img" />
        </a>
      </div>

      <div></div>
    </div>
  );
};

export default ContactUs;
