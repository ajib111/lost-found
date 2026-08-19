import ReportItemForm from '../components/ReportItemForm'

function ReportLost() {
  return (
    <section className="form-page">
      <div className="container">
        <div className="form-intro">
          <h1>Report a lost item</h1>
          <p>
            Share enough detail to help your community recognize your item.
            We'll keep this simple and respectful.
          </p>
        </div>
        <ReportItemForm type="lost" />
      </div>
    </section>
  )
}

export default ReportLost
