import { useEffect, useRef } from 'react'
import homeData from '../utils/Home.json'
import '../styles/Style.css'

/* ── SVG Icons ── */
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)
const BiSolidDownload = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const socialIconMap = {
  GitHub: <GithubIcon />,
  LinkedIn: <LinkedInIcon />,
  Instagram: <InstagramIcon />,
  Facebook: <FacebookIcon />,
}

/* ── Placeholder SVG when no profile image ── */
const PlaceholderAvatar = () => (
  <svg width="280" height="340" viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="280" height="340" fill="#181818" />
    <circle cx="140" cy="120" r="55" fill="#333" />
    <rect x="60" y="200" width="160" height="140" rx="80" fill="#333" />
  </svg>
)

export default function Home() {
  const { greeting, name, typingPhrases, tagline, profileImage, cvLink, socials } = homeData

  /* Typing effect */
  const typedRef = useRef(null)
  useEffect(() => {
    let phraseIndex = 0, charIndex = 0, isDeleting = false
    let timer

    const type = () => {
      const current = typingPhrases[phraseIndex]
      if (!typedRef.current) return

      if (!isDeleting) {
        typedRef.current.textContent = current.slice(0, charIndex + 1)
        charIndex++
        if (charIndex === current.length) {
          isDeleting = true
          timer = setTimeout(type, 1800)
          return
        }
        timer = setTimeout(type, 65)
      } else {
        typedRef.current.textContent = current.slice(0, charIndex - 1)
        charIndex--
        if (charIndex === 0) {
          isDeleting = false
          phraseIndex = (phraseIndex + 1) % typingPhrases.length
          timer = setTimeout(type, 400)
          return
        }
        timer = setTimeout(type, 35)
      }
    }

    timer = setTimeout(type, 800)
    return () => clearTimeout(timer)
  }, [typingPhrases])

  /* Scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-grid">

        {/* Content */}
        <div className="hero-content">
          <p className="hero-greeting reveal">{greeting}</p>

          <h1 className="hero-name reveal reveal-delay-1">
            {name.split(' ')[0]}<br />{name.split(' ')[1]}
          </h1>

          <div className="hero-subtitle reveal reveal-delay-2">
            <span id="typed-text" ref={typedRef} />
            <span className="cursor-blink" />
          </div>

          <p className="hero-tagline reveal reveal-delay-3">{tagline}</p>

          <div className="hero-cta reveal reveal-delay-4">
            <a href={cvLink} className="btn-primary" download>
              <BiSolidDownload /> Download CV
            </a>
            <a href="#projects" className="btn-outline">View Projects</a>
          </div>

          <div className="hero-socials reveal reveal-delay-4">
            {socials.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="social-link" title={s.name}>
                {socialIconMap[s.name]}
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-image-wrap reveal reveal-delay-2">
          <div className="hero-avatar-ring">
            <img
              src={profileImage}
              alt={name}
              className="hero-avatar-img"
              onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block' }}
            />
            <div className="hero-avatar-fallback" style={{ display: 'none' }}><PlaceholderAvatar /></div>
            {/* Green active status dot — bottom-right of circle */}
            <span className="hero-status-dot" />
          </div>
          <div className="hero-avatar-caption">
            <span className="hero-avatar-degree">BS Computer Science</span>
            <span className="hero-avatar-role">Web Developer</span>
          </div>
        </div>

      </div>
    </section>
  )
}