import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  // const [isMobileOpen, setIsMobileOpen] = useState(false);
  // const location = useLocation();

  // const handleMobileOpen = () => {
  //   setIsMobileOpen(true);
  //   document.body.style.overflow = 'hidden';
  // };

  // const handleMobileClose = () => {
  //   setIsMobileOpen(false);
  //   document.body.style.overflow = 'auto';
  // };

  return (
    <header className="sticky top-0 z-50 bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">
          Social Support Portal
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
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

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          {/* <button
            type="button"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handleMobileOpen}
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button> */}
        </div>
      </div>

      {/* Mobile side drawer */}
      {/* Overlay */}
      {/* <div
        aria-hidden="true"
        onClick={handleMobileClose}
        className={`md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity ${
          isMobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      /> */}

      {/* Drawer panel */}
      {/* <aside
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed right-0 top-0 z-50 h-screen w-full max-w-[100vw]  bg-background border-l shadow-lg transition-transform duration-300 ease-out ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-16 px-6 flex items-center justify-between border-b">
          <span className="font-semibold">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            className="p-2 text-foreground/80 hover:text-foreground"
            onClick={handleMobileClose}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="px-6 py-4 flex flex-col gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium' : 'text-foreground'
            }
            onClick={handleMobileClose}
          >
            Home
          </NavLink>
          <a
            href="#about"
            className="text-foreground hover:text-primary"
            onClick={handleMobileClose}
          >
            About
          </a>
          <a
            href="#how"
            className="text-foreground hover:text-primary"
            onClick={handleMobileClose}
          >
            How It Works
          </a>
          <NavLink
            to="/apply"
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium' : 'text-foreground'
            }
            onClick={handleMobileClose}
          >
            Apply Now
          </NavLink>
        </nav>
      </aside> */}
    </header>
  );
}
