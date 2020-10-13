import React from "react";
import logo from "../../assets/cartrader_logo2.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__section">
        <ul>
          <li>
            <img className="footer__logo" src={logo} alt="cartrader__logo" />
          </li>
          <li>Help</li>
          <li>Contact</li>
          <li>Advertisment</li>
          <li>Privacy policy</li>
          <li>CarTrade Regulations</li>
          <li>Partners</li>
        </ul>
        <ul>
          <li>
            <span>Services & Tools</span>
          </li>
          <li>CarTrader financing</li>
          <li>Sale & purchase agreement</li>
        </ul>
        <ul>
          <li>
            <span>Additional information</span>
          </li>
          <li>Car tests</li>
          <li>World Car Contest 2020</li>
          <li>Internet Car Contest 2020</li>
          <li>Categories map</li>
          <li>Important Information</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li>
            <span>Customer Service</span>
          </li>
          <li>+01 234 567 890</li>
          <li>help@cartrader.com</li>
          <li>(from Monday to Friday, 09:00 - 17:00)</li>
          <li>GET THE MOBILE APP</li>
          <li>
            <img
              className="footer__mobile"
              src="https://statics.otomoto.pl/optimus-storage/a/otomotopl/images/google-play.svg"
              alt="footer__googleplay"
            />
          </li>
          <li>
            <img
              className="footer__mobile"
              src="https://statics.otomoto.pl/optimus-storage/a/otomotopl/images/app-store.svg"
              alt="footer__appstore"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
