import { NavLink } from "react-router-dom";
import logo from "../../assets/cashmemo.png";
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
            path:"/",
            name:"Home"
        },
        {
            path:"/about",
            name:"About"
        },
        {
            path:"/dashboard",
            name:"Dashboard"
        },
        {
            path:"/pricing",
            name:"Pricing"
        },
    ]
  return (
    <Navbar>
      <NavbarContainer>
        <NavbarBrand>{/* <img src={logo} alt="cashmemologo"/> */}</NavbarBrand>
        <NavbarList>
          
          {navitems.map(values => <NavLink key={values?.name}
            to={values.path}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <p className="text-xl ml-5">{values.name}</p>
          </NavLink>)}
        </NavbarList>
        <NavbarList>
          <NavbarItem>Sign In</NavbarItem>
          <NavbarItem active={true}>Sign Up</NavbarItem>
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
