const express = require('express')
const nodemailer = require('nodemailer')
const db = require('../db')

const router = express.Router()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

router.post('/', async (req, res) => {
  const { name, email, phone, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Name, email, subject, and message are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  try {
    const stmt = db.prepare(
      'INSERT INTO contact_submissions (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)'
    )
    const result = stmt.run(name, email, phone || '', subject, message)

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    res.status(201).json({ success: true, id: result.lastInsertRowid })
  } catch (err) {
    console.error('Contact form error:', err)
    res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

module.exports = router
