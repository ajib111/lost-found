import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/">
              <span className="brand-mark">L</span>
              Lost &amp; Found
            </Link>
            <p>
              Helping our community reconnect with the belongings that matter,
              one report at a time.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="footer-links">
              <Link to="/lost">Lost items</Link>
              <Link to="/found">Found items</Link>
              <Link to="/report/lost">Report an item</Link>
            </div>
          </div>
          <div>
            <h3>Need help?</h3>
            <div className="footer-links">
              <a href="mailto:help@lostandfound.example">Contact support</a>
              <a href="mailto:help@lostandfound.example">Safety tips</a>
              <a href="mailto:help@lostandfound.example">How it works</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright 2026 Lost &amp; Found. A community-first platform.
        </div>
      </div>
    </footer>
  )
}

export default Footer
