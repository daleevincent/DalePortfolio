import educationData from '../utils/Education.json'
import '../styles/Education.css'

export default function Education() {
  return (
    <section id="education">
      <div className="edu-header">
        <div className="section-label reveal">Education</div>
        <h2 className="section-title reveal reveal-delay-1">Academic Journey</h2>
      </div>

      <div className="edu-list">
        {educationData.map((edu, idx) => (
          <div
            key={edu.id}
            className={`edu-card reveal reveal-delay-${(idx % 3) + 1}`}
          >
            {/* Logo */}
            <div className="edu-logo">
              <img
                src={edu.image}
                alt={edu.school}
                onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.textContent = edu.fallback }}
              />
            </div>

            {/* Info */}
            <div className="edu-body">
              <div className="edu-school">{edu.school}</div>
              {edu.degree && <div className="edu-degree">{edu.degree}</div>}
              <div className="edu-meta">
                <span>{edu.years}</span>
                <span>{edu.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}