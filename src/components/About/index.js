import React from 'react';
import cover from "../../assets/images/cover.jpg";

function About(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">Gods of Aumin</h1>
      <img src={cover} className="my-2" style={{ width: "50%", height: "50%" }} alt="Gods of Aumin" title="Gods of Aumin" />
      <div className="my-2 mx-2">
        <p>
        Gods of Aumin Table Top RPG
        </p>
      </div>
    </section>
  );
}

export default About;