import { Link } from 'react-router-dom';

const HeaderPage = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="container mx-auto flex items-center justify-center py-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Centro Hiperbárico y Estético Temuco"
            className="h-[184px] sm:h-[239px] md:h-[276px] lg:h-[331px] xl:h-[368px] w-auto rounded-full"
          />
        </Link>
      </div>
    </header>
  );
};

export default HeaderPage;