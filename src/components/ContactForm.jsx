import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Your phone number"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          placeholder="What is this about?"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Tell me about your project..."
        />
      </div>

      <button type="submit" className="btn btn-primary form-submit">
        Send Message
      </button>

      {submitted && (
        <p style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>
          Thank you! Your message has been received. I'll get back to you soon.
        </p>
      )}

      <p className="form-note">
        This form is currently frontend-only. Connect it to a backend or email service to enable delivery.
      </p>
    </form>
  )
}
