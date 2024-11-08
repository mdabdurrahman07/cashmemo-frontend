// import React from "react";
import { NavLink } from "react-router-dom";

const DashboardNavItems = () => {
  const navitems = [
    {
      path: "/dashboard/statistics",
      name: "Dashboard",
    },
    {
      path: "/dashboard/cashmemo",
      name: "Cashmemo",
    },
    {
      path: "/dashboard/profile",
      name: "Profile",
    },
    {
      path: "/dashboard/shop",
      name: "Shop",
    },
  ];
  return (
    <div>
      {navitems.map((values) => (
        <NavLink
          key={values?.name}
          to={values.path}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "grid mb-5 text-xl rounded-lg bg-blue-500 text-white px-2.5 py-1.5"
              : "grid mb-5 text-xl"
          }
        >
          {values.name}
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardNavItems;
