import certData from '../utils/Cert&Participations.json'
import '../styles/Cert&Participation.css'

export default function CertParticipations() {
  return (
    <section id="certifications">
      <div className="cert-header">
        <div className="section-label reveal">Certifications &amp; Participations</div>
        <h2 className="section-title reveal reveal-delay-1">Credentials</h2>
      </div>

      <div className="cert-grid">
        {certData.map((cert, idx) => (
          <div
            key={cert.id}
            className={`cert-card reveal reveal-delay-${(idx % 3) + 1}`}
          >
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-name">{cert.name}</div>
            <div className="cert-issuer"> {cert.issuer}</div>
            <span className="cert-type-badge">{cert.type}</span>
          </div>
        ))}
      </div>
    </section>
  )
}