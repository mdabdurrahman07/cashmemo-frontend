import React from "react";
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
    <div className="space-y-5">
      {navitems.map((values) => (
        <NavLink
          key={values?.name}
          to={values.path}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <p className="text-xl ml-5">{values.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardNavItems;
