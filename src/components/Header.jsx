import React from "react";
//Header component - displays the blog name
//Receives: name prop from App.jsx
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;