import styled from "styled-components";
import { Support } from "../utils/Icon";
import { Typography } from "../theme/AppTypography";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footers = () => {
  return (
    <FooterWrapper>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img
              src="public/auth-images/skynate-logo.jpeg"
              alt="skynate"
              className="logo"
            />

            <p className="tagline">Skynate AI</p>

            <p className="description">
              Skynate is a powerfull chatbot that promises to provide best
              solution
            </p>

            <a href="#" className="cta-btn">
              <Support />
              <div
                style={{
                  display: "flex",
                  flexDirection:'column',
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5Regular" className="getInTouch">GET IN TOUCH</Typography>
               <Typography variant="h4Regular" className="contactUs">Contact Us</Typography>
              </div>
              <span><FaLongArrowAltRight /></span>
            </a>

            <div className="socials">
              <FaSquareFacebook className="social-apps"/>
              <FaLinkedin  className="social-apps"/>
              <IoLogoWhatsapp className="social-apps"/>
              <RiInstagramFill className="social-apps"/>
            </div>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Pricing Plans</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">24-Hour Website</a>
              </li>
              <li>
                <a href="#">Small Business</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Website Development</a>
              </li>
              <li>
                <a href="#">Ecommerce Solutions</a>
              </li>
              <li>
                <a href="#">Mobile Apps</a>
              </li>
              <li>
                <a href="#">SaaS Development</a>
              </li>
              <li>
                <a href="#">WordPress Sites</a>
              </li>
              <li>
                <a href="#">Website as a Service</a>
              </li>
            </ul>
          </div>

          <div className="footer-trust">
            <h4>Trust & Security</h4>

            <div className="trust-card green">
              <span>✔</span>
              <div>
                <strong>100% Secure</strong>
                <p>SSL Protected</p>
              </div>
            </div>

            <div className="trust-card blue">
              <span>$</span>
              <div>
                <strong>Money Back</strong>
                <p>100% Guarantee</p>
              </div>
            </div>

            <div className="trust-card purple">
              <span>🎧</span>
              <div>
                <strong>24/7 Support</strong>
                <p>Always Available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <a href="#">Privacy</a> •<a href="#">Terms</a> •
          <a href="#">Refunds</a>
        </div>
      </footer>
    </FooterWrapper>
  );
};

export default Footers;

const FooterWrapper = styled.div`
  .footer {
    background: ${props=>props.theme.footerBackground};
    color: #cbd5f5;
    padding: 70px 40px 30px;
    font-family: Inter, system-ui, sans-serif;
  }

  .footer-container {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.2fr;
    gap: 50px;
  }
  .logo {
    width: 15%;
  }
  .tagline {
    font-size: 12px;
    letter-spacing: 2px;
    color: #7aa2ff;
    margin: 8px 0 20px;
  }

  .description span {
    color: #3b82f6;
  }

  .cta-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
    border: 1px solid #3b82f6;
    padding: 14px 22px;
    border-radius: 14px;
    color: ${(props) => props.theme.card};
    margin: 25px 0px;
    width: 60%;
    transition: transform 0.3s linear;
  }
    .cta-btn:hover  {
    transform: translateY(-4px);
  }

  .getInTouch {
    color:${(props)=>props.theme.subtitle};
  }
  .contactUs {
  color:${(props)=>props.theme.sliderText};
  }

  .cta-btn span {
  margin-left:30px;
    transition: transform 0.3s;
  }

  .cta-btn:hover span {
    transform: translateX(4px);
  }

  .socials {
    display: flex;
    flex-wrap:wrap;
    gap: 12px;
  }
.social-apps{
font-size:2vw;
}

  .footer-links h4,
  .footer-trust h4 {
    color: #fff;
    margin-bottom: 18px;
  }

  .footer-links ul {
    list-style: none;
    padding: 0;
  }

  .footer-links li {
    margin-bottom: 12px;
  }

  .footer-links a {
    color: #9aa4d6;
    text-decoration: none;
  }

  .footer-links a:hover {
    color: #fff;
  }

  .footer-trust .trust-card {
    display: flex;
    gap: 14px;
    background: rgba(255, 255, 255, 0.05);
    padding: 16px;
    border-radius: 14px;
    margin-bottom: 14px;
  }

  .trust-card span {
    font-size: 20px;
  }

  .trust-card.green {
    border-left: 3px solid #22c55e;
  }
  .trust-card.blue {
    border-left: 3px solid #3b82f6;
  }
  .trust-card.purple {
    border-left: 3px solid #a855f7;
  }

  .footer-bottom {
    margin-top: 50px;
    text-align: center;
    font-size: 14px;
    color: #7c86b8;
  }

  .footer-bottom a {
    color: #7c86b8;
    text-decoration: none;
    margin: 0 6px;
  }

  @media (max-width: 768px) {
    .footer-container {
      grid-template-columns: 1fr;
    }
      .cta-btn {
      width:100%;
      }
  }
`;
