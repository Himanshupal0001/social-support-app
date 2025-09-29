import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function FinalCTA() {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto px-6 py-20 lg:py-32 text-center">
      <h2 className="text-3xl md:text-5xl font-bold">{t('finalCta.title')}</h2>
      <p className="mt-2 text-muted-foreground">{t('finalCta.description')}</p>
      <div className="mt-6">
        <Link
          to="/apply"
          className="bg-primary text-primary-foreground btn-radius btn-padding font-semibold"
        >
          {t('finalCta.buttonText')}
        </Link>
      </div>
    </section>
  );
}
