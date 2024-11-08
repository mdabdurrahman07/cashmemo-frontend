import { NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png"
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
export const Navitems = () => {
  const navitems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/dashboard/statistics",
      name: "Dashboard",
    },
    {
      path: "/pricing",
      name: "Pricing",
    },
  ];
  return (
    <Navbar className="px-4 border-none rounded-none">
      <NavbarContainer>
        <NavbarBrand>
          <h1 className="text-xl">Cashmemo</h1>
        </NavbarBrand>
        <NavbarList>
          {navitems.map((values) => (
            <NavLink
            key={values?.name}
            to={values.path}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "ml-5 text-xl rounded-lg bg-blue-500 text-white px-2.5 py-1.5"
                : "ml-5 text-xl"
            }
          >
            {values.name}
          </NavLink>
          ))}
        </NavbarList>
        <NavbarList>
        <NavLink
            
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "grid mb-5 text-xl rounded-lg bg-blue-500 text-white px-2.5 py-1.5"
                : "grid mb-5 text-xl"
            }
          >
            Login
          </NavLink>
          <NavLink
            
            to="/register"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "grid mb-5 text-xl border-2 rounded-lg px-2.5 py-1.5 border-blue-500"
                : "grid mb-5 text-xl rounded-lg border-blue-500  px-2.5 py-1.5"
            }
          >
            Register
          </NavLink>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <NavbarItem>Sign In</NavbarItem>
          <NavbarItem active={true}>Sign Up</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};
