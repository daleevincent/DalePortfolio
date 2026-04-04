import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import CertParticipations from './components/Cert&Participations'
import Projects from './components/Project'
import Contact from './components/Contact'
import homeData from './utils/Home.json'
import './styles/Style.css'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const { profileImage, name } = homeData

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Home />
        <About />
        <Education />
        <CertParticipations />
        <Projects />
        <Contact />
      </main>
      <footer>
        <div className="footer-avatar-ring">
          <img
            src={profileImage}
            alt={name}
            className="footer-avatar-img"
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
        </div>
        <div>Designed &amp; Built by <strong>Dale Vincent</strong></div>
        <div>© {new Date().getFullYear()} All rights reserved</div>
      </footer>
    </>
  )
}

export default App