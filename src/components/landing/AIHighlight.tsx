export default function AIHighlight() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-32">
      <div className="grid items-start gap-6 md:gap-10 md:grid-cols-2">
        {/* Left: Copy */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Get Help Writing Your Application
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Our AI suggests clear, supportive language so you can express your
            situation with confidence.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Tailored to your answers
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Edit anytime before submitting
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Private and secure
            </li>
          </ul>
        </div>

        {/* Right: AI Suggestion card */}
        <div className="rounded-2xl border border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-md shadow-sm">
          <div className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background/60">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                AI suggestion
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-xs text-primary cursor-pointer"
                >
                  Regenerate
                </button>
                <button
                  type="button"
                  className="text-xs text-primary cursor-pointer"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 dark:border-white/5 bg-background/50 p-4">
              <p className="text-sm leading-relaxed text-foreground/90 ">
                “I am currently facing financial hardship due to recent changes
                in my employment and household expenses. Support from this
                program would help me maintain essential needs such as housing,
                utilities, and food while I work toward stability.”
              </p>
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              Tip: Make it yours. Adjust names, dates, and specifics to reflect
              your situation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
