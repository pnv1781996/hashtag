import React from "react";
import { CaseStudy } from "../../../assets";
import "./DFSService.scss";

export default function DFSService() {
  return (
    <div className="case-study-main">
      <div className="container-fluid">
        <div class="case-study-row">
          <div class="case-study-content">
            <h3>DFS Services</h3>
            <div class="tag">
              <span>Website</span>
              <span className="pipe">security</span>
            </div>
            <p>
              Digital Fire and Security Servies(DFS Services) established in
              India in collaboration with MCDI Canada and AJAX Ukraine. Our
              focus is on sharing technology, R&amp;D, product design, solution
              development, and CMS support in security tranche. We endeavor
              mighty, genuine, monitored, and entirely connected security
              service at a fair price.
            </p>
            <div class="bottom-detail">
              <div class="case-study-details">
                <div class="platform">
                  <h4>Platform / Language</h4>
                  <ul>
                    <li>Laravel</li>
                    <li>php</li>
                    <li>wordpress</li>
                  </ul>
                </div>
                <div class="platform">
                  <h4>Delivery services</h4>
                  <ul>
                    <li>UI/UX Design </li>
                    <li>website development</li>
                    <li>Branding</li>
                    <li>SEO / SMO</li>
                  </ul>
                </div>
              </div>
              <div class="readmore-detail">
                <a href="/dfs-case-study" class="read-more">
                  Read more details<span></span>
                </a>
              </div>
            </div>
          </div>
          <div class="case-study-graphic skewElem">
            <img src={CaseStudy} alt="Case-study-dfs" />
          </div>
        </div>
      </div>
    </div>
  );
}
