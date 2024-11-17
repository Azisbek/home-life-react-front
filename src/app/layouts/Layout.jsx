import { Outlet } from "react-router-dom";
import "../../styles/global.scss";
import { Header } from "../../components/Header";
import { AnimatedWrapper } from "../../components/ui/animated-wrapper/AnimatedWrapper";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <AnimatedWrapper>
          <Outlet />
        </AnimatedWrapper>
      </main>
      <footer>Footer</footer>
    </>
  );
};
