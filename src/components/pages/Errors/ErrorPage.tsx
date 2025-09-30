import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { TGeneralNavigation } from '@/localization/types/genral-navigation';

const ErrorPage = () => {
  const { t } = useTranslation();

  const generalNavigation = t('generalNavigation', {
    returnObjects: true,
  }) as TGeneralNavigation;

  return (
    <div className="h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-9xl sm:text-[12rem] font-bold text-primary/20">
            !
          </h1>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              {t('errors.somethingWentWrong')}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {t('errors.somethingWentWrong')}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button
            onClick={() => (window.location.href = '/')}
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            {generalNavigation.goHome}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
