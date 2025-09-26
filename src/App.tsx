import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './components/common/Layout';
const LandingPage = lazy(() => import('./components/pages/LandingPage'));
const ApplyPage = lazy(() => import('./components/pages/ApplyPage'));
const Error400Page = lazy(() => import('./components/pages/Error400Page'));
const Error401Page = lazy(() => import('./components/pages/Error401Page'));
const Error500Page = lazy(() => import('./components/pages/Error500Page'));
import { ThemeProvider } from './context/ThemeProvider';
import { Toaster } from 'sonner';
import { I18nextProvider } from 'react-i18next';
import i18n from './localization/i18n';
import ErrorBoundary from './components/Errors/ErrorBoundry';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <BrowserRouter>
          <Layout>
            <Suspense
              fallback={
                <div className="p-6 text-center text-muted-foreground">
                  Loading...
                </div>
              }
            >
              <ErrorBoundary>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/apply" element={<ApplyPage />} />
                  <Route path="/400" element={<Error400Page />} />
                  <Route path="/401" element={<Error401Page />} />
                  <Route path="/500" element={<Error500Page />} />
                </Routes>
              </ErrorBoundary>
            </Suspense>
          </Layout>
          <Toaster position="top-right" richColors />
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
