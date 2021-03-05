import * as React from "react"
import { Link } from "gatsby"

import LogoSVG from '../assets/images/talita-logo-horizontal-white.svg'
import FacebookSVG from '../assets/images/facebook-square-brands.svg'
import LinkedInSVG from '../assets/images/linkedin-brands.svg'
import InstagramSVG from '../assets/images/instagram-square-brands.svg'
import MapMarkerSVG from '../assets/images/map-marker-alt-solid.svg'
import PalmTreeSVG from '../assets/images/tree-palm-duotone.svg'

import "../assets/styles/Footer.scss"
import Nav from "./Nav"

interface Props {
  icon?: any,
  children?: any
}

const FooterCard = ({icon, children}: Props) => (
  <div className="Footer--card">
    <div className="Footer--card--box">
      <div className="Footer--card--icon"><img src={icon} alt="Card Icon"/></div>
      <div className="Footer--card--content">{children}</div>
    </div>
  </div>
)

const Footer: React.FC = () => (
  <footer className="Footer">
    <div className="container">
      <div className="Footer--top-row">
        <div className="Footer--logo">
          <Link to="/">
            <img src={LogoSVG} alt="Talita Camilo Professional Services Logo"/>
          </Link>
        </div>
        <div className="Footer--social-links">
          <a href="https://www.facebook.com/TalitaCamiloProfessionalServices/" target="_blank" rel="noreferrer noopener">
            <img src={FacebookSVG} alt="Facebook Icon"/>
          </a>
          <a href="https://www.linkedin.com/company/talita-camilo-professional-services-inc/" target="_blank" rel="noreferrer noopener">
            <img src={LinkedInSVG} alt="LinkedIn Icon"/>
          </a>
          <a href="https://www.instagram.com/tcproservices/" target="_blank" rel="noreferrer noopener">
            <img src={InstagramSVG} alt="Instagram Icon"/>
          </a>
        </div>
      </div>
      <div className="Footer--cards">
        <FooterCard icon={MapMarkerSVG}>
          HYANNIS<br />
          100 West Main Street, Unit 2<br />
          Hyannis, MA - 02601<br />
          (508) 790-7014
        </FooterCard>
        <FooterCard icon={MapMarkerSVG}>
          CHARLESTOWN<br />
          529 Main Street Powerhouse Bldg<br />
          2nd floor, Room 239<br />
          Charlestown, MA<br />
          (508) 790-7014
        </FooterCard>
        <FooterCard icon={PalmTreeSVG}>
          Are you in Florida?<br />
          Visit TPS in Orlando at<br />
          <a href="//tcabusinesssolution.com" target="_blank" rel="noreferrer noopener">tcabusinesssolution.com</a>
        </FooterCard>
      </div>

      <nav>
        <Nav />
      </nav>

      <div className="copy">
        &copy; {new Date().getFullYear()} Talita Camilo Professional Services
      </div>
    </div>
  </footer>
)

export default Footer
