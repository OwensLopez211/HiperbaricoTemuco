import Hero from '../../components/public-components/Hero'
import MobileHero from '../../components/public-components/MobileHero'
import PageTransition from '../../components/public-components/PageTransition'
import useScreenSize from '../../hooks/useScreenSize'

const HomePage = () => {
  const { isMobile } = useScreenSize();

  return (
    <PageTransition>
      {isMobile ? <MobileHero /> : <Hero />}
    </PageTransition>
  )
}

export default HomePage