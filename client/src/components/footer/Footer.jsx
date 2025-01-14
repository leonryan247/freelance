import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Video & Animation</span>
            <span>Programming & Tech</span>
            <span>Business</span>
            <span>Photography</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Gigsly</span>
            <span>Buying on Gigsly</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Community hub</span>
            <span>Events</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Gigsly</h2>
            <span>Gigsly Business</span>
            <span>Gigsly Pro</span>
            <span>Gigsly Select</span>
            <span>ClearVoice</span>
            <span>Gigsly Workspace</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Gigsly</h2>
            <span>© Gigsly Co. Ltd. 2024</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <span>English</span>
            </div>
            <div className="link">
              <p> ₹ INR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
