import { useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import '../styles/Style.css'

const navLinks = [
  { label: 'Home',                  href: '#home' },
  { label: 'About',                 href: '#about' },
  { label: 'Education',             href: '#education' },
  { label: 'Cert & Participations', href: '#certifications' },
  { label: 'Projects',              href: '#projects' },
]

export default function Navbar({ isDark, setIsDark }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu  = () => setMenuOpen(false)

  return (
    <>
      <nav>
        {/* Logo */}
        <div className="nav-logo">D<span className="logo-last">Vincent</span><span className="logo-dot">.</span></div>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={() => setIsDark(prev => !prev)}
            title="Toggle theme"
          >
            {isDark ? <MdDarkMode />  : <MdLightMode />}
          </button>
          <a href="#contact" className="btn-contact">Contact Me</a>

          {/* Hamburger */}
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </>
  )
}