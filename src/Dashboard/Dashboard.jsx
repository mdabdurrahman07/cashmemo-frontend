import { NavLink, Outlet } from "react-router-dom";
import DashboardNavItems from "./DashboardNavItems";
import { Divider } from "keep-react";

const Dashboard = () => {
    console.log("dashboard")
  return (
    <div className="grid grid-cols-5 h-screen gap-5">
      <div className="border-2 p-5 bg-blue-100">
        <div className="text-center">Welcome user @user</div>
        <Divider size="xl" color="primary" className="my-5 bg-slate-600"/>
        <DashboardNavItems />
        <Divider size="xl" color="primary" className="my-5 bg-slate-600"/>
        <NavLink
          
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "grid mb-5 text-xl rounded-lg bg-blue-500 text-white px-2.5 py-1.5"
              : "grid mb-5 text-xl"
          }
        >
          Home
        </NavLink>
      </div>
      <div className="col-span-4">
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
