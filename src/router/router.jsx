import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/about";
import Pricing from "../pages/pricing";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../pages/DashboardPages/Statistics";
import Cashmemo from "../pages/DashboardPages/Cashmemo";
import Shop from "../pages/DashboardPages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path:"dashboard/statistics",
        element: <Statistics/>
      },
      {
        path:"dashboard/cashmemo",
        element: <Cashmemo/>
      },
      {
        path:"dashboard/shop",
        element: <Shop/>
      }
      
    ]
  },
]);
export default router;
