import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { TErrors } from '@/localization/types/errors';
import type { TGeneralNavigation } from '@/localization/types/genral-navigation';
import { ValidErrorStatus } from '@/services/api/api-services';

const DynamicError = () => {
  const { status } = useParams<{ status: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const errors = t('errors', { returnObjects: true }) as TErrors;
  const generalNavigation = t('generalNavigation', {
    returnObjects: true,
  }) as TGeneralNavigation;

  const handleGoHome = () => {
    navigate('/');
  };

  const errorMap: Record<number, () => unknown> = {
    [ValidErrorStatus.BAD_REQUEST]: () => errors.error400,
    [ValidErrorStatus.UNAUTHORIZED]: () => errors.error401,
    [ValidErrorStatus.NOT_FOUND]: () => errors.error404,
    [ValidErrorStatus.INTERNAL_SERVER_ERROR]: () => errors.error500,
  };

  const getErrorData = (statusCode: string) => {
    const statusNum = parseInt(statusCode, 10);
    const errorGetter = errorMap[statusNum];
    return errorGetter ? errorGetter() : errors.error500;
  };

  const errorData = getErrorData(
    status || ValidErrorStatus.INTERNAL_SERVER_ERROR.toString()
  );

  return (
    <div className="h-[50dvh] md:h-[60dvh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-9xl sm:text-[12rem] font-bold text-primary/20">
            {errorData.code}
          </h1>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              {errorData.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {errorData.message}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button onClick={handleGoHome} className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            {generalNavigation.goHome}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DynamicError;
