import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/common/Layout';
import LandingPage from './app/page';
import ApplyPage from './app/apply/page';
import { ThemeProvider } from './context/ThemeProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from './localization/i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/apply" element={<ApplyPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
