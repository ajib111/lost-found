import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close the mobile menu when a navigation link is selected.
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <Link className="brand" to="/" onClick={closeMenu}>
        <span className="brand-mark">L</span>
        Lost &amp; Found
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/lost" onClick={closeMenu}>
          Lost
        </NavLink>
        <NavLink to="/found" onClick={closeMenu}>
          Found
        </NavLink>
      </nav>

      <div className="nav-actions">
        <Link
          className="button button-secondary"
          to="/login"
          onClick={closeMenu}
        >
          Login
        </Link>
        <Link
          className="button button-secondary"
          to="/report/found"
          onClick={closeMenu}
        >
          Report Found
        </Link>
        <Link
          className="button button-primary"
          to="/report/lost"
          onClick={closeMenu}
        >
          Report Lost
        </Link>
      </div>

      <button
        className="mobile-menu"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
    </header>
  )
}

export default Navbar
