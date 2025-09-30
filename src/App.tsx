import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './components/common/Layout';
const LandingPage = lazy(() => import('./components/pages/LandingPage'));
const ApplyPage = lazy(() => import('./components/pages/ApplyPage'));
const DynamicError = lazy(
  () => import('./components/pages/Errors/DynamicError')
);
import { ThemeProvider } from './context/ThemeProvider';
import { Toaster } from 'sonner';
import { I18nextProvider } from 'react-i18next';
import i18n from './localization/i18n';
import ErrorBoundary from './components/pages/Errors/ErrorBoundary';
import { EStorageKey, ETheme } from './lib/enums/enum';

function App() {
  return (
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider
          defaultTheme={ETheme.SYSTEM}
          storageKey={EStorageKey.UI_THEME}
        >
          <BrowserRouter>
            <Layout>
              <Suspense
                fallback={
                  <div className="p-6 text-center text-muted-foreground">
                    Loading...
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/apply" element={<ApplyPage />} />
                  <Route path="/error/:status" element={<DynamicError />} />
                </Routes>
              </Suspense>
            </Layout>
            <Toaster position="top-right" richColors />
          </BrowserRouter>
        </ThemeProvider>
      </I18nextProvider>
    </ErrorBoundary>
  );
}

export default App;
