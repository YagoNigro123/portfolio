import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logos">
        <a
          href="https://www.linkedin.com/in/yagonigro/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-logo-circle"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/YagoNigro123/YagoNigro"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-logo-circle"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJVtQhgWhzzcfhJFXhNkgnBTfRwwTVDWdDFvJNLLXCFlwmhNSNrhndKbCmWzxGwZNCPlV"
          target="_blank"
          className="footer-logo-circle"
          aria-label="Gmail"
        >
          <SiGmail />
        </a>
      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </p>
    </footer>
  );
};