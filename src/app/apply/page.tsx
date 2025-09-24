import { Link } from 'react-router-dom';
import StepperContainer from '../../components/stepper';
import { stepperData } from '../../components/stepper/stepperdata';

export default function ApplyPage() {
  return (
    <section className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">Application Portal</h1>
      <StepperContainer steps={stepperData} />
      <div className="mt-6">
        <Link to="/" className="text-primary font-semibold">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
