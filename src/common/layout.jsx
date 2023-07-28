import { Outlet } from "react-router-dom";
import Navigation from "./navigation/navigation";

const Layout = () => {
  return (
    <>
      <header>
        <div className="container">
          <Navigation />
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
};

export default Layout;
