import { Outlet } from "react-router-dom";
import "../../styles/global.scss";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};
