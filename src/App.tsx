import Home from './pages/Home';

import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './layout';
import Faqs from './pages/Faqs';
import WhyChooseUs from './pages/WhyChooseUs';
import Privacy from './pages/Privacy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="why-choose-us" element={<WhyChooseUs />} />
        <Route path="faq" element={<Faqs />} />
        <Route path="privacy-policy" element={<Privacy />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
