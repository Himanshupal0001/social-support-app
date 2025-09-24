import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32" id="how">
      <h2 className="text-3xl md:text-5xl font-bold">How Does It Work?</h2>
      <ol className="mt-8 grid gap-6 md:grid-cols-3 text-left">
        <li className="border card-radius card-padding">
          <div className="text-lg font-semibold">1. Personal Info 👤</div>
          <p className="text-sm text-muted-foreground mt-2">
            Tell us about yourself.
          </p>
        </li>
        <li className="border card-radius card-padding">
          <div className="text-lg font-semibold">
            2. Family & Financial Info 🏠
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Share household and income details.
          </p>
        </li>
        <li className="border card-radius card-padding">
          <div className="text-lg font-semibold">3. Describe Situation ✍️</div>
          <p className="text-sm text-muted-foreground mt-2">
            Explain your circumstances.
          </p>
        </li>
      </ol>
      <div className="mt-8">
        <Link to="/apply" className="text-primary font-semibold">
          Apply Now →
        </Link>
      </div>
    </section>
  );
}
