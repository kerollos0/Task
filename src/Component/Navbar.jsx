import React from "react";
import MEGAKHEIRLogo from "../Images/MEGAKHEIR-Logo.svg";
import Vector from "../Images/Vector.svg";
const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-light bg-light  ">
      <img src={Vector} width="80" height="45" alt="" />
      <img
        src={MEGAKHEIRLogo}
        width="180"
        height="65"
        alt=""
        className="logo"
      />
    </nav>
  );
};

export default Navbar;
