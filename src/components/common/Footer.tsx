import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
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
              {t('footer.brandCaption')}
            </p>
          </div>

          {/* Nav */}
          <nav className="text-sm text-muted-foreground">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-start md:justify-center">
              <li>
                <Link to="/" className="hover:text-foreground">
                  {t('footer.nav.about')}
                </Link>
              </li>
              <li>
                <a href="#how" className="hover:text-foreground">
                  {t('footer.nav.howItWorks')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground">
                  {t('footer.nav.contact')}
                </a>
              </li>
              <li>
                <a href="#accessibility" className="hover:text-foreground">
                  {t('footer.nav.accessibility')}
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-foreground">
                  {t('footer.nav.privacy')}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-muted-foreground">
          <p>
            {t('footer.builtWithCare')}{' '}
            <span className="hidden md:inline">—</span>{' '}
            <span className="md:hidden block" />
            {t('footer.needHelp')}{' '}
            <a href="#contact" className="text-primary hover:underline">
              {t('footer.contactUs')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
