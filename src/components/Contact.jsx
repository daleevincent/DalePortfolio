import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import homeData from '../utils/Home.json'
import '../styles/Contact.css'

const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)
const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const socialIconMap = {
  GitHub:    <GithubIcon />,
  LinkedIn:  <LinkedInIcon />,
  Instagram: <InstagramIcon />,
  Facebook:  <FacebookIcon />,
}

// Status types
const STATUS = {
  IDLE:    'idle',
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR:   'error',
}

export default function Contact() {
  const { socials } = homeData
  const formRef = useRef(null)

  const [form, setForm]     = useState({ name: '', subject: '', email: '', message: '' })
  const [status, setStatus] = useState(STATUS.IDLE)

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus(STATUS.SENDING)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          subject:   form.subject,
          reply_to:  form.email,
          message:   form.message,
          to_email:  'dalevincent94@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus(STATUS.SUCCESS)
      setForm({ name: '', subject: '', email: '', message: '' })
      setTimeout(() => setStatus(STATUS.IDLE), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus(STATUS.ERROR)
      setTimeout(() => setStatus(STATUS.IDLE), 4000)
    }
  }

  const isSending = status === STATUS.SENDING

  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="section-label reveal">Contact</div>
        <h2 className="section-title reveal reveal-delay-1">Get In Touch</h2>
        <p className="contact-subtext reveal reveal-delay-2">
          Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
        </p>

        {/* Status banners */}
        {status === STATUS.SUCCESS && (
          <div className="contact-banner contact-banner--success">
            ✓ Message sent! I'll get back to you soon.
          </div>
        )}
        {status === STATUS.ERROR && (
          <div className="contact-banner contact-banner--error">
            ✕ Something went wrong. Please try again or reach out directly.
          </div>
        )}

        {/* Form */}
        <form
          ref={formRef}
          className="contact-form reveal reveal-delay-3"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={isSending}
              />
            </div>
            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
                disabled={isSending}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="so I can reply to you"
              value={form.email}
              onChange={handleChange}
              required
              disabled={isSending}
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              required
              disabled={isSending}
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ alignSelf: 'flex-end' }}
            disabled={isSending}
          >
            {isSending
              ? <><span className="contact-spinner" /> Sending…</>
              : <><SendIcon /> Send Message</>
            }
          </button>
        </form>

        {/* Socials */}
        <div className="section-label reveal" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
          Or find me on
        </div>
        <div className="contact-socials reveal reveal-delay-1">
          {socials.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="contact-social-btn"
            >
              {socialIconMap[s.name]}
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}