import React from 'react';
import cover from "../../assets/images/cover.jpg";

function Buy(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">Buy Gods of Aumin</h1>
      <p>
        Buy the Gods of Aumin Hardcover Book on Amazon
        </p>
      <img src={cover} className="my-2" style={{ width: "50%", height: "50%" }} alt="Gods of Aumin" title="Gods of Aumin" />
      <div className="my-2 mx-2">
        
      </div>
    </section>
  );
}

export default Buy;