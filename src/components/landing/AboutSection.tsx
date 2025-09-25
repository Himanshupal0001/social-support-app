import { CheckCircle, Languages, PenLine, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 py-12 md:py-32">
        <div className="grid items-start md:items-center gap-6 md:gap-10 md:grid-cols-2">
          {/* Left*/}
          <div className="flex flex-col gap-3 md:gap-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              {t('aboutSection.title')}
            </h2>
            <p className="text-justify text-muted-foreground max-w-3xl">
              {t('aboutSection.description')}
            </p>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard
              icon={<CheckCircle className="h-4 w-4" />}
              title={t('aboutSection.featureStepTitle')}
              caption={t('aboutSection.featureStepCaption')}
            />
            <FeatureCard
              icon={<Languages className="h-4 w-4" />}
              title={t('aboutSection.featureLangTitle')}
              caption={t('aboutSection.featureLangCaption')}
            />
            <FeatureCard
              icon={<PenLine className="h-4 w-4" />}
              title={t('aboutSection.featureAiTitle')}
              caption={t('aboutSection.featureAiCaption')}
            />
            <FeatureCard
              icon={<Smartphone className="h-4 w-4" />}
              title={t('aboutSection.featureMobileTitle')}
              caption={t('aboutSection.featureMobileCaption')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  caption,
}: {
  icon: React.ReactNode;
  title: string;
  caption: string;
}) {
  return (
    <div className="group rounded-xl border border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-md p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <span className="inline-grid place-items-center h-8 w-8 rounded-md bg-primary text-primary-foreground">
          {icon}
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground leading-none">
            {title}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{caption}</p>
        </div>
      </div>
    </div>
  );
}
