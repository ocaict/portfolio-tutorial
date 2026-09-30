import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { technologies } from '../data/technologies'

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="section-label">About</span>
          <h1>About Me</h1>
          <p>Get to know me, my background, and what drives my work.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-preview">
            <div className="about-preview-image">
              <img src="/oluegwuc.png" alt="Oluegwu Chigozie" />
            </div>
            <div className="about-preview-text">
              <span className="section-label">My Story</span>
              <h2 className="section-title">Full-Stack Developer & Software Solutions Developer</h2>
              <p>
                I'm Oluegwu Chigozie, a Full-Stack Developer and software solutions developer
                based in Onitsha, Anambra State, Nigeria. I work with modern web technologies
                to create practical digital solutions for businesses, organizations,
                entrepreneurs, and individuals.
              </p>
              <p>
                My development capabilities include frontend development, backend development,
                databases, APIs, business applications, AI-powered applications, automation,
                mobile applications, and desktop applications.
              </p>
              <p>
                I believe in building software that makes a real difference — solving actual
                problems and creating value for the people who use it. Every project I take on
                is an opportunity to learn something new and deliver something meaningful.
              </p>
              <p>
                I'm also associated with OCATECH DIGITAL SOLUTION, a technology and ICT
                training brand dedicated to building digital skills and empowering the next
                generation of developers.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to the
                developer community, or helping others learn to code.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-page-section">
        <div className="container">
          <SectionHeading
            label="Technologies"
            title="My Technical Toolkit"
            subtitle="The technologies I use to bring ideas to life."
          />
          <div className="tech-grid">
            {technologies.map((group) => (
              <div className="tech-card" key={group.category}>
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
          <Link to="/contact" className="btn btn-primary">Contact Me</Link>
        </div>
      </section>
    </>
  )
}
