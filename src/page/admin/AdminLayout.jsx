import React from "react";
import AdminPanel from "./ui/adminPanel";
import s from "./AdminLayout.module.scss";
import { AnimatedWrapper } from "../../components/ui/animated-wrapper/AnimatedWrapper";
import { Outlet } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const AdminLayout = React.memo(() => {
  return (
    <div className={s.adminLayout}>
      <aside className={s.sidebar}>
        <AdminPanel />
      </aside>
      <div className={s.content}>
        <div className={s.head}>
          <span>
            <FaRegUserCircle />
          </span>
        </div>
        <AnimatedWrapper>
          <Outlet />
        </AnimatedWrapper>
      </div>
    </div>
  );
});

export default AdminLayout;
