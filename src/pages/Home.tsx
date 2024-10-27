// import HeroBanner from '../components/hero-banner/HeroBanner';
// import Amenities from '../components/sections/Amenities';
// import EarnReturns from '../components/sections/EarnReturns';
// import Faq from '../components/sections/Faq';
// import Investment from '../components/sections/Investment';

import Footer from '../components/footer/Footer';
import HeroBanner from '../components/hero-banner/HeroBanner';
import Agents from '../components/sections/Agents';
import HomeOwners from '../components/sections/HomeOwners';
import InvestmentScheme from '../components/sections/InvestmentScheme';
import Investors from '../components/sections/Investors';
import Residency from '../components/sections/Residency';

const Home = () => {
  return (
    <div className="bg-gray-300">
      <HeroBanner />
      <InvestmentScheme />
      <HomeOwners />
      <Agents />
      <Investors />
      <Residency />
      <Footer />
    </div>
  );
};

export default Home;
