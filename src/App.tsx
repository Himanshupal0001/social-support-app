import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/common/Layout';
import {
  LandingPage,
  ApplyPage,
  Error400Page,
  Error401Page,
  Error500Page,
} from './components/pages';
import { ThemeProvider } from './context/ThemeProvider';
import { Toaster } from 'sonner';
import { I18nextProvider } from 'react-i18next';
import i18n from './localization/i18n';
import ErrorBoundary from './components/Errors/ErrorBoundry';

function App() {
  return (
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/apply" element={<ApplyPage />} />
                <Route path="/400" element={<Error400Page />} />
                <Route path="/4001" element={<Error401Page />} />
                <Route path="/500" element={<Error500Page />} />
              </Routes>
            </Layout>
            <Toaster position="top-right" richColors />
          </BrowserRouter>
        </ThemeProvider>
      </I18nextProvider>
    </ErrorBoundary>
  );
}

export default App;
