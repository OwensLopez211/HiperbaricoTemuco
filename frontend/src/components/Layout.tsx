import { Outlet } from 'react-router-dom';
import Navbar from './public-components/Navbar';
import Footer from './public-components/Footer';
import ScrollToTop from './public-components/ScrollToTop';
import TransitionOverlay from './public-components/TransitionOverlay';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ backgroundColor: '#8FD694' }}>
      <ScrollToTop />
      <TransitionOverlay />
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;