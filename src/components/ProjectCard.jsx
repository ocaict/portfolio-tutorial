export default function ProjectCard({ project }) {
  return (
    <div className="service-card">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{ borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}
        />
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.technologies && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: '0.75rem',
                padding: '4px 10px',
                background: 'var(--accent-glow)',
                borderRadius: '50px',
                color: 'var(--accent)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
