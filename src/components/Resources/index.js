import React from 'react';
import cover from "../../assets/images/cover.jpg";

function Resources(props) {
  return (
    <section>
      <h1 className="mx-2" id="resources">Gods of Aumin Resources</h1>
      <p>
        Get resources to support your Gods of Aumin Game.
        </p>
      <img src={cover} className="my-2" style={{ width: "50%", height: "50%" }} alt="Gods of Aumin" title="Gods of Aumin" />
      <div className="my-2 mx-2">
        
      </div>
    </section>
  );
}

export default Resources;