import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="row">
      <div className="col-md-10 d-flex align-items-center">
        <ul className="nav bg-success">
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark fs-5"
              activeclassname="active"
              to={"/"}
            >
              Productos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark fs-5"
              activeclassname="active"
              to={"/category/camas"}
            >
              Camas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark fs-5"
              activeclassname="active"
              to={"/category/platos"}
            >
              Platos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark fs-5"
              activeclassname="active"
              to={"/category/correas"}
            >
              Correas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark fs-5"
              activeclassname="active"
              to={"/category/dispenser"}
            >
              Dispenser
            </NavLink>
          </li>
        </ul>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
