import LogoPelitos from "./LogoPelitos";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-2">
          <LogoPelitos />
        </div>
        <div className="col-md-9 d-flex text-center">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
