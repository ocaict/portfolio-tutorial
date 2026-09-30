export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle" style={{ margin: '0 auto' }}>{subtitle}</p>}
    </div>
  )
}
