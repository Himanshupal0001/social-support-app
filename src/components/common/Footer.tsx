import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand + caption */}
          <div>
            <Link to="/" className="font-semibold text-foreground">
              Social Support Portal
            </Link>
            <p className="mt-1 text-xs text-muted-foreground">
              Empowering communities with simple, secure support.
            </p>
          </div>

          {/* Nav */}
          <nav className="text-sm text-muted-foreground">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-start md:justify-center">
              <li>
                <Link to="/" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <a href="#how" className="hover:text-foreground">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground">
                  Contact
                </a>
              </li>
              <li>
                <a href="#accessibility" className="hover:text-foreground">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>

          {/* Tools */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <p className="text-sm text-muted-foreground">© 2025</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-muted-foreground">
          <p>
            Built with care. <span className="hidden md:inline">—</span>{' '}
            <span className="md:hidden block" />
            Need help?{' '}
            <a href="#contact" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
