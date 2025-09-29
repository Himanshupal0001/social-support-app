import { useTranslation } from 'react-i18next';

export default function AIHighlight() {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto px-6 py-12 lg:py-32">
      <div className="grid items-start gap-6 md:gap-10 md:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold">
            {t('aiHighlights.title')}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            {t('aiHighlights.description')}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              {t('aiHighlights.bullet1')}
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              {t('aiHighlights.bullet2')}
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              {t('aiHighlights.bullet3')}
            </li>
          </ul>
        </div>

        {/* Right: AI card */}
        <div className="rounded-2xl border border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-md shadow-sm">
          <div className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background/60">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                {t('aiHighlights.aiSuggestionLabel')}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-xs text-primary cursor-pointer"
                >
                  {t('aiHighlights.regenerate')}
                </button>
                <button
                  type="button"
                  className="text-xs text-primary cursor-pointer"
                >
                  {t('aiHighlights.copy')}
                </button>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 dark:border-white/5 bg-background/50 p-4">
              <p className="text-sm leading-relaxed text-foreground/90 ">
                {t('aiHighlights.sampleText')}
              </p>
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              {t('aiHighlights.tip')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
