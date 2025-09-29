import type { THeroSectionTranslation } from './hero-section';
import type { TNavbarTranslation } from './navbar';
import type { TAboutSectionTranslation } from './about-section';
import type { THowItWorksTranslation } from './how-it-works';
import type { TAIHighlightsTranslation } from './ai-highlights';
import type { TTestimonialsTranslation } from './testimonials';
import type { TFinalCtaTranslation } from './final-cta';
import type { TFooterTranslation } from './footer';
import type { TFormsTranslation } from './forms';
import type { TApplyPageTranslation } from './apply-page';
import type { TErrors } from './errors';
import type { TGeneralNavigation } from './genral-navigation';

export type TAppTranslation = {
  navbar: TNavbarTranslation;
  heroSection: THeroSectionTranslation;
  aboutSection: TAboutSectionTranslation;
  howItWorks: THowItWorksTranslation;
  aiHighlights: TAIHighlightsTranslation;
  testimonials: TTestimonialsTranslation;
  finalCta: TFinalCtaTranslation;
  footer: TFooterTranslation;
  forms: TFormsTranslation;
  applyPage: TApplyPageTranslation;
  errors: TErrors;
  generalNavigation: TGeneralNavigation;
};
