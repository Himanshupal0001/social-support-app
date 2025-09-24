export default function AIHighlight() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32">
      <h2 className="text-3xl md:text-5xl font-bold">
        Get Help Writing Your Application
      </h2>
      <p className="mt-4 text-muted-foreground max-w-3xl">
        Our AI can suggest clear, supportive language for your application so
        you can express your situation confidently.
      </p>
      <div className="mt-6 border card-radius card-padding bg-subtle text-left">
        <div className="text-sm text-muted-foreground mb-2">Suggested text</div>
        <p>
          "I am currently facing financial hardship due to recent changes in my
          employment and household expenses. Support from this program would
          help me maintain essential needs such as housing, utilities, and food
          while I work toward stability."
        </p>
      </div>
    </section>
  );
}
