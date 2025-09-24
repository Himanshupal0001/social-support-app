import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        Financial Support, Made Simple.
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        This portal is designed to help you apply for financial assistance
        quickly, easily, and with guidance every step of the way.
      </p>
      <div className="mt-8 flex justify-center gap-6">
        <Link
          to="/apply"
          className="bg-primary text-primary-foreground btn-radius btn-padding font-semibold"
        >
          Start Application
        </Link>
        <a href="#how" className="border btn-radius btn-padding font-medium">
          Learn More
        </a>
      </div>
    </section>
  );
}
