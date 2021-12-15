import { Button } from "@mui/material";
import React from "react";
import { StartUp } from "../../../assets";
import "./Startup.scss";
export default function Startup() {
  return (
    <div className="startup-business">
      <div className="container-fluid">
        <div className="inner-detail">
          <div className="business-content">
            <h2>
              We are help to grow your <p>startup!</p> business.
            </h2>
            <a title="Contact Us" href="contact.php" className="btn light">
              <Button variant="outlined" className="contactus-btn">
                Contact Us <span className="contactus-arrow"></span>
              </Button>
            </a>
            {/* <a title="Contact Us" href="contact.php" className="btn light">
              Contact Us <span></span>
            </a> */}
          </div>
          <div className="business-graphic">
            <img src={StartUp} alt="Startup Business" />
          </div>
        </div>
      </div>
    </div>
  );
}
