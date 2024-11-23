import { Link, Outlet } from "react-router-dom";
import "../../styles/global.scss";
import { Header } from "../../components/Header";
// import { AnimatedWrapper } from "../../components/ui/animated-wrapper/AnimatedWrapper";
import React from "react";

export const Layout = React.memo(() => {
  return (
    <>
      <Header />
      <main className='container'>
        {/* <AnimatedWrapper> */}
          <Outlet  />
        {/* </AnimatedWrapper> */}
      </main>
      <footer>Footer <Link to={"/admin"}>go admin</Link></footer>
    </>
  );
});
