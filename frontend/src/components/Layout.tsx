import { Outlet } from 'react-router-dom';
import HeaderPage from './public-components/HeaderPage';
import ScrollToTop from './public-components/ScrollToTop';
import TransitionOverlay from './public-components/TransitionOverlay';
import Navbar from './public-components/Navbar';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ backgroundColor: '#8FD694' }}>
      <ScrollToTop />
      <TransitionOverlay />
      <HeaderPage />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
};

export default Layout;