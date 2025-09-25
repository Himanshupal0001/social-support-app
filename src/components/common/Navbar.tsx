import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import { useEffect } from 'react';

export default function Navbar() {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If the pathname is NOT the root and there's a hash, remove it
    if (location.pathname !== '/' && location.hash) {
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return (
    <header className="sticky top-0 z-50 bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold md:text-lg text-[12px]">
          Social Support Portal
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium' : 'text-muted-foreground'
            }
          >
            {t('navbar.home')}
          </NavLink>
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground"
          >
            {t('navbar.about')}
          </a>
          <a
            href="#how"
            className="text-muted-foreground hover:text-foreground"
          >
            {t('navbar.howItWorks')}
          </a>
          <NavLink
            to="/apply"
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium' : 'text-muted-foreground'
            }
          >
            {t('navbar.applyNow')}
          </NavLink>
          <LanguageToggle />
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
