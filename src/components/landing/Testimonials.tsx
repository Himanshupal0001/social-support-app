export default function Testimonials() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32">
      <h2 className="text-3xl md:text-5xl font-bold">Testimonials</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <blockquote className="border card-radius card-padding text-sm">
          “The portal made it easy to find support.” — Fatima A
        </blockquote>
        <blockquote className="border card-radius card-padding text-sm">
          “Clear guidance every step of the way.” — Khalid M
        </blockquote>
        <blockquote className="border card-radius card-padding text-sm">
          “I applied in minutes.” — Noor S
        </blockquote>
      </div>
    </section>
  );
}
