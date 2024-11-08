import { Outlet } from "react-router-dom"
import DashboardNavItems from "./DashboardNavItems"


const Dashboard = () => {
  return (
    <div className="grid grid-cols-5 h-screen gap-5">
        <div className="border-2"><DashboardNavItems/></div>
        <div className="border-2 border-red-500 w-full col-span-4">{Outlet}</div>
    </div>
  )
}

export default Dashboard