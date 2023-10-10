import React from 'react';
import cover from "../../assets/images/cover.jpg";

function About(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">Gods of Aumin</h1>
      <p>
        Gods of Aumin Table Top RPG where characters can progress to become Gods and play as Gods.
        </p>
      <img src={cover} className="my-2" style={{ width: "50%", height: "50%" }} alt="Gods of Aumin" title="Gods of Aumin" />
      <div className="my-2 mx-2">
        
      </div>
    </section>
  );
}

export default About;