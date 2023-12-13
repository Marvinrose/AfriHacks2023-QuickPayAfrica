// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Apple } from "./icons.jsx/apple-icon";
// import { Apple } from "../icons/faApple";
import {
  faApple,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid mt-5 p-4"
        style={{ background: "var(--bg-color)", color: "var(--white)" }}
      >
        <div className="row mb-5">
          <div className="col-3">
            <h2>Resources</h2>
            <p>Market</p>
            <p>Language</p>
            <p>Events</p>
            <p>Blog</p>
          </div>
          <div className="col-3">
            <h2>Company</h2>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Find us at</p>
            <p>FAG</p>
          </div>
          <div className="col-3">
            <h2>Legal</h2>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
            <p>Privacy</p>
          </div>
          <div className="col-3">
            <h2>QUICKPAYAFRICA</h2>
            <p className="mt-3">
              Share what is new and life moments with your friends
            </p>
            <div>
              <FontAwesomeIcon
                style={{ paddingRight: "13px" }}
                icon={faApple}
                size="2x"
              />
              <FontAwesomeIcon
                style={{ paddingRight: "13px" }}
                icon={faTwitter}
                size="2x"
              />
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
