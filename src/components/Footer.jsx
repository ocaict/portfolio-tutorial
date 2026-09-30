import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/ocatech logo.png" alt="OCATECH DIGITAL SOLUTION" />
            <p>
              Oluegwu Chigozie — Full-Stack Developer & Software Solutions Developer.
              Building modern digital solutions that solve real-world problems.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">Desktop Apps</Link></li>
              <li><Link to="/services">API Development</Link></li>
              <li><Link to="/services">AI Applications</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>Onitsha, Anambra State, Nigeria</li>
              <li><a href="mailto:ocatestemail@gmail.com">ocatestemail@gmail.com</a></li>
              <li><a href="tel:+2348165321429">08165321429</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Oluegwu Chigozie. All rights reserved.</p>
          <p>OCATECH DIGITAL SOLUTION</p>
        </div>
      </div>
    </footer>
  )
}
