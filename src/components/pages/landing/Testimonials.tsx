import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden">
      {/* Decorative div */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-12 -right-12 h-52 w-52 rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-32">
        <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
          {t('testimonials.title')}
        </h2>
        <p className="mt-3 text-muted-foreground text-center md:text-left max-w-2xl">
          {t('testimonials.subtitle')}
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <TestimonialCard name={t('testimonials.items.0.name')}>
            {t('testimonials.items.0.quote')}
          </TestimonialCard>
          <TestimonialCard name={t('testimonials.items.1.name')}>
            {t('testimonials.items.1.quote')}
          </TestimonialCard>
          <TestimonialCard name={t('testimonials.items.2.name')}>
            {t('testimonials.items.2.quote')}
          </TestimonialCard>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <figure className="rounded-2xl border border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-md p-5 shadow-sm">
      <blockquote className="text-sm leading-relaxed text-foreground/90">
        {children}
      </blockquote>
      <figcaption className="mt-3 text-xs text-muted-foreground">
        — {name}
      </figcaption>
    </figure>
  );
}
