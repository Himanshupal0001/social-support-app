import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32 text-center">
      <h2 className="text-3xl md:text-5xl font-bold">
        Take the First Step Toward Support
      </h2>
      <p className="mt-2 text-muted-foreground">
        Start your application today and access the support you deserve.
      </p>
      <div className="mt-6">
        <Link
          to="/apply"
          className="bg-primary text-primary-foreground btn-radius btn-padding font-semibold"
        >
          Start Application
        </Link>
      </div>
    </section>
  );
}
