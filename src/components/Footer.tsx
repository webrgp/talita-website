import { Link } from 'gatsby'

import AlignableSVG from '../assets/images/alignable-logo.svg'
import FacebookSVG from '../assets/images/facebook-square-brands.svg'
import InstagramSVG from '../assets/images/instagram-square-brands.svg'
import LinkedInSVG from '../assets/images/linkedin-brands.svg'
import MapMarkerSVG from '../assets/images/map-marker-alt-solid.svg'
import LogoSVG from '../assets/images/talita-logo-horizontal-white.svg'

import '../assets/styles/Footer.scss'
import Nav from './Nav'

interface Props {
  icon: any
  children: any
}

const FooterCard = ({ icon, children }: Props) => (
  <div className="Footer--card">
    <div className="Footer--card--box">
      <div className="Footer--card--icon">
        <img src={icon} alt="Card Icon" />
      </div>
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
            <img src={LogoSVG} alt="TC Professional Services Logo" />
          </Link>
        </div>
        <div className="Footer--social-links">
          <a
            href="https://www.facebook.com/TalitaCamiloProfessionalServices/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={FacebookSVG} alt="Facebook Icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/talita-camilo-professional-services-inc/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={LinkedInSVG} alt="LinkedIn Icon" />
          </a>
          <a
            href="https://www.instagram.com/tcproservices/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={InstagramSVG} alt="Instagram Icon" />
          </a>
          <a
            href="https://www.alignable.com/barnstable-ma/talita-camilo-professional-services-2"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={AlignableSVG} alt="Alignable Icon" />
          </a>
        </div>
      </div>
      <div className="Footer--cards">
        <FooterCard icon={MapMarkerSVG}>
          <a
            href="https://www.google.com/maps/place/Talita+Camilo+Professional+Services/@41.6480776,-70.3028527,17z/data=!3m1!4b1!4m5!3m4!1s0x89fb3108094854e5:0xb6303ff1e0e51944!8m2!3d41.6480398!4d-70.3006558"
            target="_blank"
            rel="noopener noreferrer"
          >
            HYANNIS
          </a>
          <br />
          100 West Main Street, Unit 4<br />
          Hyannis, MA - 02601
          <br />
          (508) 790-7014
        </FooterCard>
        <FooterCard icon={MapMarkerSVG}>
          <a
            href="https://www.google.com/maps/place/Talita+Camilo+Professional+Services/@42.3847796,-71.0736007,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3718a1fa49d2b:0xcf1b759f8a04e34c!8m2!3d42.3847796!4d-71.071412"
            target="_blank"
            rel="noopener noreferrer"
          >
            CHARLESTOWN
          </a>
          <br />
          529 Main Street Powerhouse Bldg
          <br />
          2nd floor, Room 239
          <br />
          Charlestown, MA
          <br />
          (508) 790-7014
        </FooterCard>
        <FooterCard icon={MapMarkerSVG}>
          <a
            href="https://www.google.com/maps/place/7065+Westpointe+Blvd+STE+308,+Orlando,+FL+32835/@28.5167183,-81.4845356,17z/data=!3m1!4b1!4m5!3m4!1s0x88e778dca9a88349:0xf340a1ea7cbff2d7!8m2!3d28.5167183!4d-81.4823469"
            target="_blank"
            rel="noopener noreferrer"
          >
            ORLANDO
          </a>
          <br />
          9100 Conroy Windermere Rd
          <br />
          Windermere, FL
          <br />
          (508) 790-7014
        </FooterCard>
      </div>

      <nav>
        <Nav onLinkClick={null} additionalNavItems={[
          { url: `/privacy-policy/`, title: `Privacy Policy` },
        ]} />
      </nav>

      <div className="copy">
        &copy; {new Date().getFullYear()} TC Professional Services
      </div>
    </div>
  </footer>
)

export default Footer
