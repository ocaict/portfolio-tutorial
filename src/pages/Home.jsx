import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/services'
import { technologies } from '../data/technologies'
import { projects } from '../data/projects'

const capabilities = [
  { title: 'Full-Stack Development', description: 'End-to-end web application development' },
  { title: 'API Design & Integration', description: 'RESTful APIs and third-party integrations' },
  { title: 'Database Architecture', description: 'Efficient data modeling and management' },
  { title: 'AI Integration', description: 'Intelligent features and automation' },
  { title: 'Business Automation', description: 'Streamline operations with digital systems' },
  { title: 'Responsive Design', description: 'Pixel-perfect on every device' },
]

const whyItems = [
  { title: 'Practical Problem Solving', description: 'Focus on real-world solutions, not just code.' },
  { title: 'Full-Stack Capability', description: 'From frontend to backend, databases to deployment.' },
  { title: 'Modern Technologies', description: 'Using current tools and best practices.' },
  { title: 'Business-Focused', description: 'Technology that serves your business goals.' },
  { title: 'Scalable Architecture', description: 'Built to grow with your needs.' },
  { title: 'Client-Focused', description: 'Clear communication and reliable delivery.' },
]

const processSteps = [
  { number: '01', title: 'Understand the Problem' },
  { number: '02', title: 'Plan the Solution' },
  { number: '03', title: 'Design the Experience' },
  { number: '04', title: 'Build the Application' },
  { number: '05', title: 'Test & Improve' },
  { number: '06', title: 'Deploy & Support' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div>
            <span className="hero-badge">FULL-STACK DEVELOPER</span>
            <h1 className="hero-title">
              Building <span className="gradient">Digital Solutions</span> That Solve Real Problems.
            </h1>
            <p className="hero-description">
              I build modern web applications, software systems, AI-powered applications,
              APIs, databases, and automation solutions that help businesses and individuals
              solve real-world problems.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Let's Work Together</Link>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/oluegwuc.png" alt="Oluegwu Chigozie — Full-Stack Developer" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-preview-image">
            <img src="/oluegwuc.png" alt="Oluegwu Chigozie" />
          </div>
          <div className="about-preview-text">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Full-Stack Developer & Software Solutions Developer</h2>
            <p>
              I'm Oluegwu Chigozie, a Full-Stack Developer based in Onitsha, Anambra State, Nigeria.
              I work with modern web technologies to create practical digital solutions for
              businesses, organizations, entrepreneurs, and individuals.
            </p>
            <p>
              My development capabilities span frontend development, backend development,
              databases, APIs, business applications, AI-powered applications, automation,
              mobile applications, and desktop applications.
            </p>
            <p>
              I'm also associated with OCATECH DIGITAL SOLUTION, a technology and ICT training brand.
            </p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '16px' }}>
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Technologies"
            title="Technologies I Work With"
            subtitle="A curated set of modern tools and technologies for building digital solutions."
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

      {/* Services */}
      <section className="section services-page-section">
        <div className="container">
          <SectionHeading
            label="Services"
            title="What I Can Build For You"
            subtitle="Comprehensive software development services tailored to your needs."
          />
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-icon">
                  <Icon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Capabilities"
            title="Development Capabilities"
            subtitle="End-to-end development skills across the full technology stack."
          />
          <div className="capabilities-grid">
            {capabilities.map((cap) => (
              <div className="capability-card" key={cap.title}>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section services-page-section">
        <div className="container">
          <SectionHeading
            label="Projects"
            title="Featured Projects"
            subtitle="A selection of work that demonstrates my capabilities."
          />
          {projects.length === 0 ? (
            <div className="projects-empty">
              <h3>Projects Coming Soon</h3>
              <p>
                I'm currently preparing projects for publication. Check back soon to see
                what I've been building.
              </p>
            </div>
          ) : (
            <div className="services-grid">
              {projects.map((project) => (
                <div className="service-card" key={project.id}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="section why-section">
        <div className="container">
          <SectionHeading
            label="Why Me"
            title="Why Work With Me"
            subtitle="What makes me the right choice for your next project."
          />
          <div className="why-grid">
            {whyItems.map((item) => (
              <div className="why-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Process"
            title="How I Work"
            subtitle="A clear, structured approach to every project."
          />
          <div className="process-grid">
            {processSteps.map((step) => (
              <div className="process-step" key={step.number}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="section brand-section">
        <div className="container">
          <img src="/ocatech logo.png" alt="OCATECH DIGITAL SOLUTION" className="brand-logo" />
          <h2 className="brand-name">OCATECH DIGITAL SOLUTION</h2>
          <p className="brand-desc">
            A technology and ICT training brand committed to building digital skills
            and delivering innovative software solutions.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Build Something Great Together</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Have a project in mind? I'd love to hear about it. Let's discuss how we can
            bring your ideas to life.
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
