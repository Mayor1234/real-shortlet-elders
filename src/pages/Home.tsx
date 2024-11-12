import HeroBanner from '../components/hero-banner/HeroBanner';
import About from '../components/sections/About';
import Agents from '../components/sections/Agents';
import HomeOwners from '../components/sections/HomeOwners';
import InvestmentScheme from '../components/sections/InvestmentScheme';
import Investors from '../components/sections/Investors';
import JoinCommunity from '../components/sections/JoinCommunity';
import MeetOurTeam from '../components/sections/MeetOurTeam';
import Residency from '../components/sections/Residency';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div>
      <Element name="home">
        <div className="font-Montserrat">
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
          <MeetOurTeam />
          <JoinCommunity />
        </div>
      </Element>
    </div>
  );
};

export default Home;
