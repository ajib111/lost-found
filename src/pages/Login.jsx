import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="form-page">
      <div className="container">
        <div className="form-intro">
          <h1>Login</h1>
          <p>Sign in to report items and manage your saved submissions.</p>
        </div>

        <form className="report-form" onSubmit={handleSubmit}>
          {isSubmitted && (
            <div className="form-success">
              This is a UI-only login form for now. Hook it up to your auth
              backend when you're ready.
            </div>
          )}

          <div className="form-grid">
            <div className="form-field full">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="form-field full">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                required
                placeholder="Enter your password"
              />
            </div>
          </div>
          <br>
          </br>

          <button className="button button-primary button-small" type="submit">
            Sign in
          </button>

          <p style={{ marginTop: '16px', color: 'var(--muted)' }}>
            New here? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login
