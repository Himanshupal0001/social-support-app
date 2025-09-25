import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">
          Social Support Portal
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium' : 'text-muted-foreground'
            }
          >
            Home
          </NavLink>
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </a>
          <a
            href="#how"
            className="text-muted-foreground hover:text-foreground"
          >
            How It Works
          </a>
          <NavLink
            to="/apply"
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium' : 'text-muted-foreground'
            }
          >
            Apply Now
          </NavLink>
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
