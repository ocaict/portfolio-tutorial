import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent. I\'ll get back to you soon.' })
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Unable to connect. Please try again later or reach me on WhatsApp.' })
    } finally {
      setLoading(false)
    }
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

      <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status.message && (
        <p style={{ color: status.type === 'success' ? 'var(--accent)' : '#ef4444', fontSize: '0.9rem' }}>
          {status.message}
        </p>
      )}
    </form>
  )
}
