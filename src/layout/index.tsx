import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/footer/FooterComponent';
import { Element } from 'react-scroll';
import Header from '../components/header/Headers';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Element name="contact">
        <Footer />
      </Element>
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
