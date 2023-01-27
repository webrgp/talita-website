import { PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import PageHeader from '../components/PageHeader'

import SEO from '../components/SEO'

const services = [
  {
    title: `Translations`,
    Picture: () => (
      <StaticImage
        src="../assets/images/translation.jpg"
        quality={100}
        width={720}
        aspectRatio={255 / 283}
        loading="lazy"
        formats={[`auto`, `webp`, `avif`]}
        alt="Translations"
      />
    ),
    html: `<p>
      We offer certified Portuguese/English translations. Our translators
      are carefully vetted, and each has the qualifications and experience
      required to translate your documents. We use the most rigorous
      third-party translator testing service available, and our three-step
      quality control process ensures that every document is accurate,
      properly formatted, and consistent throughout.
    </p>`
  },
  {
    title: `Taxes &amp; Tax Resolutions`,
    Picture: () => (
      <StaticImage
        src="../assets/images/taxes.jpg"
        quality={100}
        width={720}
        aspectRatio={255 / 283}
        loading="lazy"
        formats={[`auto`, `webp`, `avif`]}
        alt="Taxes & Tax Resolutions"
      />
    ),
    html: `<p>
      We offer tax preparations, planning, compliance, and resolution to
      individuals and businesses. We pride ourselves on being a
      full-service tax company, offering a wide range of tax-related
      services to individuals and businesses. When you have a tax problem,
      you need to take action, and you can count on us to do it. For
      issues big and small, you can get personalized help from an expert
      at TC Professional Services to work with the IRS for you.
    </p>`
  },
  {
    title: `Bookkeeping & Payroll`,
    Picture: () => (
      <StaticImage
        src="../assets/images/bookkeping.jpg"
        quality={100}
        width={720}
        aspectRatio={255 / 283}
        loading="lazy"
        formats={[`auto`, `webp`, `avif`]}
        alt="Bookkeeping & Payroll"
      />
    ),
    html: `<p>
            We take care of your books for you, so you can get back to running
            your business. We provide accurate and efficient bookkeeping and
            payroll services freeing up valuable time. We specialize in
            bookkeeping and payroll services for small and medium-sized
            businesses. We keep your financial data safe on highly secure in our
            client portal. This way, you can focus on what is the most
            important: your business.
          </p>`
  },
  {
    title: `Consulting`,
    Picture: () => (
      <StaticImage
        src="../assets/images/consulting.jpg"
        quality={100}
        width={720}
        aspectRatio={255 / 283}
        loading="lazy"
        formats={[`auto`, `webp`, `avif`]}
        alt="Consulting"
      />
    ),
    html: `<p>
      We can assist you with your business strategies and ventures. No
      matter how complex your business questions, we have the skills and
      experience to deliver the answers you need to move forward. Our
      consulting services focus on our clients most critical issues and
      opportunities. We dive deep into their strategy, organization,
      operations, and corporate finance. Together, we can achieve
      extraordinary outcomes.
    </p>`
  },
  {
    title: `Credit Restoration`,
    Picture: () => (
      <StaticImage
        src="../assets/images/credit-repair.jpg"
        quality={100}
        width={720}
        aspectRatio={255 / 283}
        loading="lazy"
        formats={[`auto`, `webp`, `avif`]}
        alt="Consulting"
      />
    ),
    html: `<p>
      We understand how important your credit is for your future and we
      are here to help you to achieve your financial goals. We work with
      the credit bureaus and your creditors to challenge the negative
      report items that affect your credit score. We have experts that can
      assist you to improve your credit and score faster. Contact us for a
      consultation and credit audit. We are here for you!
    </p>`,
    links: [
      {
        text: `Credit Restoration`,
        url: `https://www.smartcredit.com/?PID=12946`
      },
      {
        text: `Secure Credit Card`,
        url: `https://self.inc/refer/15410699`
      }
    ]
  }
]

const ServicesPage: React.FC<PageProps> = () => (
  <article>
    <SEO title="Services" />
    <PageHeader title="Services">
      <StaticImage
        src="../assets/images/services-cover.jpg"
        quality={100}
        width={1400}
        aspectRatio={1110 / 454}
        formats={[`auto`, `webp`, `avif`]}
        loading="eager"
        placeholder="blurred"
        alt="Services Cover"
      />
    </PageHeader>

    <div className="container rich-text">
      <p>
        TC Professional Services provides individuals and small to medium-size
        businesses in all industries with quality, affordable, and personalized
        professional services and tax solutions.{` `}
      </p>
    </div>

    <div className="container">
      {services &&
        services.map(({ Picture, title, html, links }, index) => (
          <div
            key={`service-${index}`}
            className="row align-items-start align-items-lg-center my-5"
          >
            <div className="col-12 col-sm-5 col-md-3">
              <Picture />
            </div>
            <div className="col-12 col-sm-7 col-md-9">
              <h3 className="mt-4 mt-sm-0">{title}</h3>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              {links && (
                <div className="mt-4">
                  {links.map(({ text, url }, linkIndex) => (
                    <a
                      key={`service-link-${linkIndex}`}
                      href={url}
                      className="btn btn-red"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  </article>
)

export default ServicesPage
