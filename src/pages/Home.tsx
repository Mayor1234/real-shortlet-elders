import Footer from '../components/footer/FooterComponent';
import HeroBanner from '../components/hero-banner/HeroBanner';
import About from '../components/sections/About';
import Agents from '../components/sections/Agents';
import HomeOwners from '../components/sections/HomeOwners';
import InvestmentScheme from '../components/sections/InvestmentScheme';
import Investors from '../components/sections/Investors';
import Residency from '../components/sections/Residency';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div className="bg-gray-300 font-Montserrat">
      <HeroBanner />
      <Element name="investment">
        <InvestmentScheme />
      </Element>
      <Element name="home-owner">
        <HomeOwners />
      </Element>
      <Element name="agent">
        <Agents />
      </Element>
      <Element name="investor">
        <Investors />
      </Element>
      <Residency />
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Footer />
      </Element>
    </div>
  );
};

export default Home;
