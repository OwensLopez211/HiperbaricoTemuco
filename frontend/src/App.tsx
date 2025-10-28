import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/public-pages/HomePage';
import TreatmentsPage from './pages/public-pages/TreatmentsPage';
import AboutUsPage from './pages/public-pages/AboutUsPage';
import ContactPage from './pages/public-pages/ContactPage';
import { Toaster } from 'react-hot-toast';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tratamientos" element={<TreatmentsPage />} />
          <Route path="/nosotros" element={<AboutUsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
