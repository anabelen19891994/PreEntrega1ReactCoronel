import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="row">
      <div className="col-md-10 d-flex align-items-center">
        <ul className="nav bg-success">
          <li className="nav-item">
            <a className="nav-link text-dark fs-5" href="#">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fs-5" href="#">
              Camas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fs-5" href="#">
              Platos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fs-5" href="#">
              Correas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fs-5" href="#">
              Dispenser
            </a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
