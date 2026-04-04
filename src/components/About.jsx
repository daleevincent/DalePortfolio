import { useEffect } from 'react'
import { IoLocation } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'
import { MdScreenshotMonitor } from 'react-icons/md'
import { TbDeviceDesktopCode } from 'react-icons/tb'
import { LuBrainCircuit } from 'react-icons/lu'
import aboutData from '../utils/About.json'
import '../styles/About.css'

export default function About() {
  const { paragraphs, contact, skills } = aboutData

  /* Populate carousel tracks — icon only, no name text */
  useEffect(() => {
    const buildTrack = (id, items, reverse = false) => {
      const track = document.getElementById(id)
      if (!track) return
      track.innerHTML = ''
      const doubled = [...items, ...items]
      doubled.forEach(skill => {
        const pill = document.createElement('span')
        pill.className = 'skill-pill skill-pill--icon-only'
        pill.title = skill.name  // tooltip on hover so name isn't lost

        if (skill.icon) {
          const img = document.createElement('img')
          img.src = skill.icon
          img.alt = skill.name
          img.width = 28
          img.height = 28
          img.onerror = () => img.remove()
          pill.appendChild(img)
        }

        track.appendChild(pill)
      })
      if (reverse) track.classList.add('carousel-track-reverse')
    }

    buildTrack('about-track1', skills)
    buildTrack('about-track2', [...skills].reverse(), true)
  }, [skills])

  return (
    <section id="about">
      <div className="about-content">

        {/* About Text */}
        <div className="about-text">
          <div className="section-label reveal">About</div>
          <h2 className="section-title reveal reveal-delay-1">Who am I?</h2>

          {paragraphs.map((p, i) => (
            <p key={i} className="reveal reveal-delay-2">{p}</p>
          ))}

          <div className="about-info reveal reveal-delay-3">
            <div className="info-item">
              <span className="label"><IoLocation /> Loc</span>
              <span className="value">{contact.location}</span>
            </div>
            <div className="info-item">
              <span className="label"><MdEmail /> Email</span>
              <span className="value">{contact.email}</span>
            </div>
            <div className="info-item">
              <span className="label"><FaPhone /> Phone</span>
              <span className="value">{contact.phone}</span>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="whatido reveal reveal-delay-1">
          <div className="section-label reveal">Experience</div>
          <h2 className="section-title reveal reveal-delay-1">What I Do</h2>
          <div className="whatido-list">
            <div className="whatido-card">
              <div className="whatido-icon"><MdScreenshotMonitor /></div>
              <div className="whatido-title">Frontend Development</div>
              <p className="whatido-desc">I build simple and responsive user interfaces using modern web technologies.</p>
            </div>
            <div className="whatido-card">
              <div className="whatido-icon"><TbDeviceDesktopCode /></div>
              <div className="whatido-title">Backend Development</div>
              <p className="whatido-desc">I create backend systems and APIs to handle data and application logic.</p>
            </div>
            <div className="whatido-card">
              <div className="whatido-icon"><LuBrainCircuit /></div>
              <div className="whatido-title">Machine Learning</div>
              <p className="whatido-desc">I develop basic machine learning models and work with data for predictions.</p>
            </div>
          </div>
        </div>

        {/* Skills carousel — icons only */}
        <div className="skills-below reveal reveal-delay-4">
          <div className="section-label">Skills</div>
          <h2 className="section-title">Techstack</h2>

          <div className="carousel-track-wrap">
            <div className="carousel-track" id="about-track1" />
          </div>

          <div className="carousel-track-wrap">
            <div className="carousel-track" id="about-track2" />
          </div>
        </div>

      </div>
    </section>
  )
}