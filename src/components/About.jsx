import React from "react";

//About component - displays blog logo and description
//Receives: image and about props from App.jsx
function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;