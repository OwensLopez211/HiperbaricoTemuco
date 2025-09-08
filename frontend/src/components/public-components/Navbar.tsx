
import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <nav className={`fixed w-full transition-all duration-300 z-40 top-0 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex flex-col items-center py-2 sm:py-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center mb-2 sm:mb-4">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-20 sm:h-32 lg:h-40 w-auto"
          />
        </Link>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors absolute top-2 sm:top-4 right-4 sm:right-6 ${
            isScrolled ? 'hover:bg-gray-100 text-gray-800' : 'hover:bg-white/20 text-white'
          }`}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <motion.svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({isActive}) => `transition-colors font-medium text-sm relative group ${
              isScrolled 
                ? (isActive ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800')
                : (isActive ? 'text-white' : 'text-gray-200 hover:text-white')
            }`}
          >
            {({isActive}) => (
              <>
                <span style={isActive ? { color: '#8FD694' } : {}}>Inicio</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                  location.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} style={{ backgroundColor: '#8FD694' }} />
              </>
            )}
          </NavLink>
          <NavLink 
            to="/tratamientos" 
            className={({isActive}) => `transition-colors font-medium text-sm relative group ${
              isScrolled 
                ? (isActive ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800')
                : (isActive ? 'text-white' : 'text-gray-200 hover:text-white')
            }`}
          >
            {({isActive}) => (
              <>
                <span style={isActive ? { color: '#8FD694' } : {}}>Tratamientos</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                  location.pathname === '/tratamientos' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} style={{ backgroundColor: '#8FD694' }} />
              </>
            )}
          </NavLink>
          <NavLink 
            to="/nosotros" 
            className={({isActive}) => `transition-colors font-medium text-sm relative group ${
              isScrolled 
                ? (isActive ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800')
                : (isActive ? 'text-white' : 'text-gray-200 hover:text-white')
            }`}
          >
            {({isActive}) => (
              <>
                <span style={isActive ? { color: '#8FD694' } : {}}>Nosotros</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                  location.pathname === '/nosotros' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} style={{ backgroundColor: '#8FD694' }} />
              </>
            )}
          </NavLink>
          <NavLink 
            to="/contacto" 
            className={({isActive}) => `transition-colors font-medium text-sm relative group ${
              isScrolled 
                ? (isActive ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800')
                : (isActive ? 'text-white' : 'text-gray-200 hover:text-white')
            }`}
          >
            {({isActive}) => (
              <>
                <span style={isActive ? { color: '#8FD694' } : {}}>Contacto</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                  location.pathname === '/contacto' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} style={{ backgroundColor: '#8FD694' }} />
              </>
            )}
          </NavLink>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden fixed top-[120px] left-0 right-0 border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-4 bg-white/95 backdrop-blur-sm shadow-lg">
                <a 
                  onClick={() => handleNavigation('/')} 
                  className={`block transition-colors font-medium text-sm py-2 cursor-pointer ${
                    location.pathname === '/' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'
                  }`}
                  style={location.pathname === '/' ? { color: '#8FD694' } : {}}
                >
                  Inicio
                </a>
                <a 
                  onClick={() => handleNavigation('/tratamientos')} 
                  className={`block transition-colors font-medium text-sm py-2 cursor-pointer ${
                    location.pathname === '/tratamientos' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'
                  }`}
                  style={location.pathname === '/tratamientos' ? { color: '#8FD694' } : {}}
                >
                  Tratamientos
                </a>
                <a 
                  onClick={() => handleNavigation('/nosotros')} 
                  className={`block transition-colors font-medium text-sm py-2 cursor-pointer ${
                    location.pathname === '/nosotros' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'
                  }`}
                  style={location.pathname === '/nosotros' ? { color: '#8FD694' } : {}}
                >
                  Nosotros
                </a>
                <a 
                  onClick={() => handleNavigation('/contacto')} 
                  className={`block transition-colors font-medium text-sm py-2 cursor-pointer ${
                    location.pathname === '/contacto' ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'
                  }`}
                  style={location.pathname === '/contacto' ? { color: '#8FD694' } : {}}
                >
                  Contacto
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;