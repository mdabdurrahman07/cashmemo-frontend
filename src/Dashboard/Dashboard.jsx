import { Outlet } from "react-router-dom";
import DashboardNavItems from "./DashboardNavItems";

const Dashboard = () => {
    console.log("dashboard")
  return (
    <div className="grid grid-cols-5 h-screen gap-5">
      <div className="border-2 p-5 bg-blue-100">
        <DashboardNavItems />
      </div>
      <div className="col-span-4 border-2 border-red-500">
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
