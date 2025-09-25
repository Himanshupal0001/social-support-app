import { Link } from 'react-router-dom';
import SocialSupportForm from '../forms/SocialSupportForm';

const ApplyPage = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <h1 className="md:text-3xl text-lg font-bold mb-4">Application Portal</h1>
      <div className="mt-10">
        <SocialSupportForm />
      </div>
      <div className="mt-6">
        <Link to="/" className="text-primary font-semibold">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default ApplyPage;
