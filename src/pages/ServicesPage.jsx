import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="section-label">Services</span>
          <h1>My Services</h1>
          <p>Comprehensive software development services to help you build, grow, and automate your business.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            label="What I Offer"
            title="Services"
            subtitle="From concept to deployment, I provide end-to-end development services."
          />
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-icon">
                  <Icon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-block',
                    marginTop: '16px',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                  }}
                >
                  Discuss a Project →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Get Started</span>
          <h2 className="section-title">Have a Project in Mind?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Let's discuss your project and see how I can help bring your ideas to life.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary">Contact Me</Link>
            <a href="https://wa.me/2348165321429?text=Hi%20Oluegwu%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you." target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
