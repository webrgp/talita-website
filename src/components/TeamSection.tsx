import { StaticImage } from 'gatsby-plugin-image'

import '../assets/styles/TeamSection.scss'

const TeamSection: React.FC = () => {
  return (
    <section className="TeamSection">
      <div className="container">
        <div className="row">
          <div className="col-12 rich-text">
            <h3>Our Team</h3>
          </div>

          <div className="col-6 col-lg-4">
            <div className="TeamCard">
              <StaticImage
                src="../assets/images/talita-profile.jpg"
                quality={100}
                width={640}
                aspectRatio={1 / 1}
                formats={[`auto`, `webp`, `avif`]}
                loading="lazy"
                placeholder="blurred"
                alt="Talita Camilo Headshot"
              />
              <h4>
                Talita Camilo
                <small>President & Senior Accountant</small>
              </h4>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <div className="TeamCard">
              <StaticImage
                src="../assets/images/kellen-francescon-profile.jpg"
                quality={100}
                width={640}
                aspectRatio={1 / 1}
                formats={[`auto`, `webp`, `avif`]}
                loading="lazy"
                placeholder="blurred"
                alt="Kellen Francescon Headshot"
              />
              <h4>
                Kellen Francescon
                <small>Account Manager</small>
              </h4>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <div className="TeamCard">
              <StaticImage
                src="../assets/images/matheus-miranda-profile.jpg"
                quality={100}
                width={640}
                aspectRatio={1 / 1}
                formats={[`auto`, `webp`, `avif`]}
                loading="lazy"
                placeholder="blurred"
                alt="Talita Camilo Headshot"
              />
              <h4>
                Matheus Miranda
                <small>Executive Administrative Assistant</small>
              </h4>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <div className="TeamCard">
              <StaticImage
                src="../assets/images/andressa-costa-profile.jpg"
                quality={100}
                width={640}
                aspectRatio={1 / 1}
                formats={[`auto`, `webp`, `avif`]}
                loading="lazy"
                placeholder="blurred"
                alt="Andressa Costa Headshot"
              />
              <h4>
                Andressa Costa
                <small>Account Manager</small>
              </h4>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <div className="TeamCard">
              <StaticImage
                src="../assets/images/raquel-crepaldi-profile.jpg"
                quality={100}
                width={640}
                aspectRatio={1 / 1}
                formats={[`auto`, `webp`, `avif`]}
                loading="lazy"
                placeholder="blurred"
                alt="Raquel Crepaldi Headshot"
              />
              <h4>
                Raquel Crepaldi
                <small>Account Manager</small>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
