import { Link } from 'react-router-dom';

const HeaderPage = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Centro Hiperbárico y Estético Temuco" 
            className="h-32 sm:h-40 lg:h-48 w-auto"
          />
        </Link>
        <h1 className="flex-1 text-2xl sm:text-4xl lg:text-6xl font-bold text-center text-white uppercase">
          Centro Hiperbárico y Estético Temuco
        </h1>
      </div>
    </header>
  );
};

export default HeaderPage;