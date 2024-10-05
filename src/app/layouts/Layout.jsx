import { Outlet } from "react-router-dom";
import "../../styles/global.scss";

export const Layout = () => {
  return (
    <>
      <header>Header</header>
      <main className='container'>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};
