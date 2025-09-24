import { CheckCircle, Languages, PenLine, Smartphone } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32" id="about">
      <h2 className="text-3xl md:text-5xl font-bold">
        What is the Social Support Portal?
      </h2>
      <p className="mt-4 text-muted-foreground max-w-3xl">
        The Social Support Portal is a government-backed initiative designed to
        make applying for financial help straightforward and stress-free. Our
        mission is to ensure that every individual and family facing hardship
        can access the support they need without unnecessary complications. By
        combining user-friendly design with AI-powered assistance, we make the
        process more accessible, transparent, and supportive than ever before.
      </p>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        <li className="flex items-center gap-3">
          <CheckCircle className="text-primary" size={20} /> Simple step-by-step
          application
        </li>
        <li className="flex items-center gap-3">
          <Languages className="text-primary" size={20} /> Multi-language
          support
        </li>
        <li className="flex items-center gap-3">
          <PenLine className="text-primary" size={20} /> AI writing assistance
        </li>
        <li className="flex items-center gap-3">
          <Smartphone className="text-primary" size={20} /> Mobile-friendly
          design
        </li>
      </ul>
    </section>
  );
}
