import React from "react";
import PoweredBy from "../Images/Powered-by.svg";
import Facebook from "../Images/Facebook.svg";
import Instagram from "../Images/instagram.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={PoweredBy} width="220" height="90" alt="" />
          </div>
          <div className="col">
            <ul className="list-unstyled d-flex justify-content-end">
              <li>
                <a href="#" /> <img src={Facebook} alt="" />
              </li>
              <li>
                <a href="#" />
                <img src={Instagram} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
