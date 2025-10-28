import { Link } from 'react-router-dom';

const HeaderPage = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="container mx-auto flex items-center justify-center py-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Centro Hiperbárico y Estético Temuco"
            className="h-40 sm:h-52 md:h-60 lg:h-72 xl:h-80 w-auto"
          />
        </Link>
      </div>
    </header>
  );
};

export default HeaderPage;