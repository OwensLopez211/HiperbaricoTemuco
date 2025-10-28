const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 bg-black/60 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <p className="text-white text-sm">
          © 2025. Todos los derechos reservados.
        </p>
        
        <div className="flex items-center space-x-4">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/hiperbaricotemuco/" 
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2ZM16.25 20.5c2.9 0 5.25-2.35 5.25-5.25v-8.5c0-2.9-2.35-5.25-5.25-5.25h-8.5c-2.9 0-5.25 2.35-5.25 5.25v8.5c0 2.9 2.35 5.25 5.25 5.25h8.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7ZM17.25 7a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;