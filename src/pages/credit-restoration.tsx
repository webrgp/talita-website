import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'
import CreditRepairForm from '../components/CreditRepairForm'

const isBrowser = () => typeof window !== `undefined`

const CreditRestorationPage = () => (
  <article style={{ paddingBottom: `2rem` }}>
    <SEO title="Credit Restoration" />
    <PageHeader title="Credit Restoration" />

    <div className="container-fluid container-lg">
      <div className="row justify-content-center">
        <div className="col col-md-10">
          <p>
            We understand how important your credit is for your future and we
            are here to help you to achieve your financial goals. We work with
            the credit bureaus and your creditors to challenge the negative
            report items that affect your credit score. We have experts that can
            assist you to improve your credit and score faster.
          </p>
          <p>
            Please fill the form below for a consultation and credit audit. We
            are here for you!
          </p>
          {isBrowser() && <CreditRepairForm />}
        </div>
      </div>
    </div>
  </article>
)

export default CreditRestorationPage
