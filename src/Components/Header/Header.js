import React from "react";
import "./Header.scss";
import AddIcon from "@mui/icons-material/Add";
import { HashImage, Logo } from "../../assets";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Logo className="svg-logo" />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a className="nav-link" title="Case Studies" href="case-studies">
              Case Studies
            </a>
          </li>
          <li>
            <a className="nav-link" title="Services" href="services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link" title="Contact" href="contact.php">
              Contact
            </a>
          </li>
          <li className="start-project">
            <a title="Start Your Project" href="contact.php" className="btn">
              Start Your Project <AddIcon className="add-icon" />
            </a>
          </li>
        </ul>
      </div>
      <a title="Our Story" className="has-tag" href="about.html">
        <img src={HashImage} alt="Hashtag Symbol" />
      </a>
    </div>
  );
}
