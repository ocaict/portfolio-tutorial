import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="section-label">Projects</span>
          <h1>My Projects</h1>
          <p>A showcase of my work and the solutions I've built.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
            subtitle="A selection of work that demonstrates my capabilities and approach."
          />
          {projects.length === 0 ? (
            <div className="projects-empty">
              <h3>Projects Coming Soon</h3>
              <p>
                I'm currently preparing projects for publication. In the meantime, feel free
                to reach out if you'd like to discuss a project idea.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>
                Get In Touch
              </Link>
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
    </>
  )
}
