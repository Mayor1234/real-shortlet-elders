import { Outlet, ScrollRestoration } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
