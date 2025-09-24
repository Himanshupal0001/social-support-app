import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-6 py-6 text-sm text-muted-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <nav className="flex gap-4 flex-wrap">
          <Link to="/" className="hover:text-foreground">
            About
          </Link>
          <a href="#how" className="hover:text-foreground">
            How It Works
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
          <a href="#accessibility" className="hover:text-foreground">
            Accessibility
          </a>
          <a href="#privacy" className="hover:text-foreground">
            Privacy Policy
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <p>© 2025 Social Support Portal</p>
        </div>
      </div>
    </footer>
  );
}
