import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const Error401 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-9xl sm:text-[12rem] font-bold text-primary/20">
            401
          </h1>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Unauthorized
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              You are not authorized to access this resource. Please log in or
              check your credentials.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button onClick={handleGoHome} className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error401;
