import projectData from '../utils/Project.json'
import '../styles/Projects.css'

export default function Projects() {
  const { projects } = projectData

  return (
    <section id="projects">
      <div className="proj-header">
        <div className="section-label reveal">Projects</div>
        <h2 className="section-title reveal reveal-delay-1">Things I've Built</h2>
      </div>

      <div className="proj-stack">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="proj-card-sticky"
            style={{ '--i': idx, '--total': projects.length }}
          >
            <div className="proj-card-inner">
              {/* Image Preview */}
              <div className="proj-img-container">
                <img src={proj.image} alt={proj.name} className="proj-img" />
              </div>

              {/* Text Content */}
              <div className="proj-content">
                <div className="proj-num">{String(proj.id).padStart(2, '0')}</div>
                <h3 className="proj-title">{proj.name}</h3>
                <p className="proj-desc">{proj.desc}</p>
                <div className="proj-footer">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link"
                  >
                    {proj.link.includes('github.io') ? 'Live Demo' : 'View on GitHub'}
                    <span className="arrow-icon">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}