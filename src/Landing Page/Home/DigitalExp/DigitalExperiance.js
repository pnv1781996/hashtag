import React from "react";
import "./DigitalExperiance.scss";
import Button from "@mui/material/Button";
import { HasTagBubble } from "../../../assets";

export default function DigitalExperiance() {
  return (
    <div className="hero-section">
      <div class="container-fluid">
        <div class="info-text">
          <h1>
            We craft great <span>digital</span> experiences
          </h1>
          <p>
            Hashtag is a full-service agency, building beautiful design,
            development and identity for your product.
          </p>
          <div>
            <a
              title="Case Studies"
              href="case-studies.html"
              className="btn-casestudy"
            >
              <Button variant="text" className="casestudies-btn">
                Our Case Studies <span className="caseStudy-arrow"></span>
              </Button>
            </a>
          </div>
        </div>
        <div class="hastag-bubble">
          <HasTagBubble className="hash-bubble-img" />
        </div>
      </div>
    </div>
  );
}
