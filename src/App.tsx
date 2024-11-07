import { Element } from 'react-scroll';
import Home from './pages/Home';
import Header from './components/header/Headers';

function App() {
  return (
    <>
      <div>
        <Header />
        <Element name="home">
          <Home />
        </Element>
      </div>
    </>
  );
}

export default App;
