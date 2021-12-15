import { Button } from "@mui/material";
import React from "react";
import { CaseStudy, ClassThumb, EqsrThumb } from "../../../assets";
import "./Ourwork.scss";

export default function Ourwork() {
  return (
    <div className="block">
      <div class="container">
        <div class="title-tag">
          <h2>Our</h2>
          <h2>Work</h2>
        </div>
        <div class="info-text">
          <h4>
            We harness the power of digital and help brands connect with
            consumers at every digital interaction. Our end to end digital
            service offerings &amp; global experience helps us to scale
            businesses and sustain growth.
          </h4>
          <div>
            <a title="Case Studies" href="case-studies.html" class="btn">
              <Button variant="outlined" className="ourwork-btn">
                Our Work <span className="ourwork-arrow"></span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
