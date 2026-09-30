import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="section-label">Contact</span>
          <h1>Get In Touch</h1>
          <p>Have a project in mind? Let's talk about how I can help.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out.
              </p>

              <div className="contact-detail">
                <strong>Name</strong>
                <span>Oluegwu Chigozie</span>
              </div>
              <div className="contact-detail">
                <strong>Phone</strong>
                <a href="tel:+2348165321429">08165321429</a>
              </div>
              <div className="contact-detail">
                <strong>Email</strong>
                <a href="mailto:ocatestemail@gmail.com">ocatestemail@gmail.com</a>
              </div>
              <div className="contact-detail">
                <strong>Location</strong>
                <span>62 New Market Road, Onitsha, Anambra State, Nigeria</span>
              </div>

              <div style={{ marginTop: '32px' }}>
                <a
                  href="https://wa.me/2348165321429?text=Hi%20Oluegwu%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
