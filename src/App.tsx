import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/common/Layout';
import LandingPage from './app/page';
import ApplyPage from './app/apply/page';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
