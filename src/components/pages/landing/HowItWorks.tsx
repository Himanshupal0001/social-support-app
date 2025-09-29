import { Link } from 'react-router-dom';
import { UserRound, Home, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden" id="how">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-12 -right-12 h-52 w-52 rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-32">
        <div className="flex flex-col items-center gap-2 md:gap-3 ">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            {t('howItWorks.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl text-center">
            {t('howItWorks.description')}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StepCard
            icon={<UserRound className="h-4 w-4" />}
            title={t('howItWorks.personalTitle')}
            caption={t('howItWorks.personalCaption')}
            step="1"
          />
          <StepCard
            icon={<Home className="h-4 w-4" />}
            title={t('howItWorks.familyTitle')}
            caption={t('howItWorks.familyCaption')}
            step="2"
          />
          <StepCard
            icon={<FileText className="h-4 w-4" />}
            title={t('howItWorks.describeTitle')}
            caption={t('howItWorks.describeCaption')}
            step="3"
          />
        </div>

        <div className="mt-8 text-center md:text-left">
          <Link to="/apply" className="text-primary font-semibold">
            {t('howItWorks.applyCta')}
          </Link>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  icon,
  title,
  caption,
  step,
}: {
  icon: React.ReactNode;
  title: string;
  caption: string;
  step: string;
}) {
  return (
    <div className="group rounded-xl border border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-md p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <span className="inline-grid place-items-center h-8 w-8 rounded-md bg-primary text-primary-foreground">
          {icon}
        </span>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground">{title}</p>
            <span className="text-xs text-muted-foreground">
              <StepLabel step={step} />
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{caption}</p>
        </div>
      </div>
    </div>
  );
}

function StepLabel({ step }: { step: string }) {
  const { t } = useTranslation();
  return <>{t('howItWorks.stepLabel', { step })}</>;
}
