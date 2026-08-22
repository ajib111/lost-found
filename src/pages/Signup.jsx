import { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="form-page">
      <div className="container">
        <div className="form-intro">
          <h1>Create account</h1>
          <p>Set up a simple account to start reporting lost and found items.</p>
        </div>

        <form className="report-form" onSubmit={handleSubmit}>
          {isSubmitted && (
            <div className="form-success">
              This is a UI-only signup form for now. Connect it to your backend
              when you're ready.
            </div>
          )}

          <div className="form-grid">
            <div className="form-field full">
              <label htmlFor="name">Full name *</label>
              <input id="name" required placeholder="Your name" />
            </div>

            <div className='form-field full'>
                <label htmlFor='contact'>Contact Number * </label>
                <input id = "contact" required placeholder="Contact number"/>
            </div>

            <div className="form-field full">
              <label htmlFor="signup-email">Email address * </label>
              <input
                id="signup-email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="form-field full">
              <label htmlFor="signup-password">Password *</label>
              <input
                id="signup-password"
                type="password"
                required
                placeholder="Choose a password"
              />
            </div>
          </div>
          <br/>
          <button className="button button-primary button-large" type="submit">
            Create account
          </button>

          <p style={{ marginTop: '16px', color: 'var(--muted)' }}>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Signup
