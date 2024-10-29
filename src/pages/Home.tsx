import Footer from '../components/footer/Footer';
import HeroBanner from '../components/hero-banner/HeroBanner';
import Agents from '../components/sections/Agents';
import HomeOwners from '../components/sections/HomeOwners';
import InvestmentScheme from '../components/sections/InvestmentScheme';
import Investors from '../components/sections/Investors';
import Residency from '../components/sections/Residency';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div className="bg-gray-300">
      <HeroBanner />
      <InvestmentScheme />
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
      <Footer />
    </div>
  );
};

export default Home;
