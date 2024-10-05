import { Outlet } from "react-router-dom";
import "../../styles/global.scss";
import { Header } from "../../components/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};
