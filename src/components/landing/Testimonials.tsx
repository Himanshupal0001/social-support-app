export default function Testimonials() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-12 -right-12 h-52 w-52 rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 md:py-32">
        <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
          Testimonials
        </h2>
        <p className="mt-3 text-muted-foreground text-center md:text-left max-w-2xl">
          Real stories from real applicants who found support.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <TestimonialCard name="Fatima A">
            “The portal made it easy to find support.”
          </TestimonialCard>
          <TestimonialCard name="Khalid M">
            “Clear guidance every step of the way.”
          </TestimonialCard>
          <TestimonialCard name="Noor S">
            “I applied in minutes.”
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
