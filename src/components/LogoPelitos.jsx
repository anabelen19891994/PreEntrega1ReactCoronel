import { Link } from "react-router-dom";
import Logo from "../assets/logo nuevo.png";

const LogoPelitos = () => {
  return (
    <Link to={"/"}>
      <img src={Logo} alt="logo pelitos" width={120} />
    </Link>
  );
};

export default LogoPelitos;
