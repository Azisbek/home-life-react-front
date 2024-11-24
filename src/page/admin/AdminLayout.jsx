import AdminPanel from "./ui/adminPanel";
import { AnimatedWrapper } from "../../components/ui/animated-wrapper/AnimatedWrapper";
import { Outlet } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import s from "./AdminLayout.module.scss";

const AdminLayout = () => {
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
};

export default AdminLayout;
