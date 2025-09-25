export default function HeroVisual() {
  return (
    <div className="relative hidden md:block">
      <div className="relative mx-auto h-[340px] w-full max-w-md">
        <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-tr from-primary/25 via-primary/10 to-secondary/25 blur-2xl" />
        <div className="relative z-10 h-full w-full rounded-3xl border border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-xl shadow-xl">
          <div className="p-5 h-full flex flex-col justify-between">
            <div className="inline-flex items-center gap-2 self-start rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background/60">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Smart guidance
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Your application, simplified
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Follow clear steps, save progress, and come back anytime. We
                keep things simple and secure.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg border p-3 bg-background/60">
                  <div className="text-base font-semibold">Step 1</div>
                  <div className="text-xs text-muted-foreground">Personal</div>
                </div>
                <div className="rounded-lg border p-3 bg-background/60">
                  <div className="text-base font-semibold">Step 2</div>
                  <div className="text-xs text-muted-foreground">Details</div>
                </div>
                <div className="rounded-lg border p-3 bg-background/60">
                  <div className="text-base font-semibold">Step 3</div>
                  <div className="text-xs text-muted-foreground">Review</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Encrypted
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
                24/7 Help
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
                Fast Track
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
