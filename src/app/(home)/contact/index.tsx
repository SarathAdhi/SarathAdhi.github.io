import WavyText from "@components/WavyText";
import React from "react";

const ContactSection = () => {
  return (
    <div id="contact" className="sm:space-y-4 min-h-screen">
      <div className="parallax-text">
        <h1>Contact</h1>

        <WavyText as="h2" text="Contact" />
      </div>

      <div className="pd container"></div>
    </div>
  );
};

export default ContactSection;
