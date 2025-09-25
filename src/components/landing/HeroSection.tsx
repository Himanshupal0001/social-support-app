import { Link } from 'react-router-dom';
import {
  GoProjectRoadmap,
  GoDiscussionOutdated,
  GoShieldCheck,
} from 'react-icons/go';
import HeroVisual from './HeroVisual';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden">
      {/* Background decorative div */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 py-12 md:py-32">
        <div className="grid items-center gap-6 md:gap-10 md:grid-cols-2">
          {/* left */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              {t('heroSection.mainTitle')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl md:max-w-md mx-auto md:mx-0">
              {t('heroSection.description')}
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-6">
              <Link
                to="/apply"
                className="bg-primary text-primary-foreground btn-radius btn-padding font-semibold"
              >
                {t('heroSection.startBtnText')}
              </Link>
              <a
                href="#how"
                className="border btn-radius btn-padding font-medium"
              >
                {t('heroSection.learnMoreText')}
              </a>
            </div>

            {/* bottom cards left */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              {/* Applications */}
              <div className="group rounded-xl border border-white/10 dark:border-white/5 bg-background/40 backdrop-blur-md p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-center sm:text-left justify-center sm:justify-start">
                  <GoProjectRoadmap className="text-primary" size={20} />
                  <p className="text-sm font-semibold text-foreground leading-none">
                    {t('heroSection.applicationsText')}
                  </p>
                </div>
              </div>

              {/* Guidance */}
              <div className="group rounded-xl border border-white/10 dark:border-white/5 bg-background/40 backdrop-blur-md p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-center sm:text-left justify-center sm:justify-start">
                  <GoDiscussionOutdated className="text-primary" size={20} />
                  <p className="text-sm font-semibold text-foreground leading-none">
                    {t('heroSection.guidanceText')}
                  </p>
                </div>
              </div>

              {/* Security */}
              <div className="group rounded-xl border border-white/10 dark:border-white/5 bg-background/40 backdrop-blur-md p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-center sm:text-left justify-center sm:justify-start">
                  <GoShieldCheck className="text-primary" size={20} />
                  <p className="text-sm font-semibold text-foreground leading-none">
                    {t('heroSection.secureText')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
