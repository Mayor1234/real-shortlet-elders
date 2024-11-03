import { Element } from 'react-scroll';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div>
        <Element name="home">
          <Home />
        </Element>
      </div>
    </>
  );
}

export default App;
