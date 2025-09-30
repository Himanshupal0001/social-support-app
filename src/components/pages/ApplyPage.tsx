import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SocialSupportForm from '../forms/SocialSupportForm';

const ApplyPage = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-6 py-20">
      <h1 className="md:text-3xl text-lg text-center font-bold mb-4">
        {t('applyPage.title')}
      </h1>
      <div className="mt-10">
        <SocialSupportForm />
      </div>
      <div className="mt-6">
        <Link to="/" className="text-primary font-semibold">
          {t('applyPage.goBackHome')}
        </Link>
      </div>
    </section>
  );
};

export default ApplyPage;
