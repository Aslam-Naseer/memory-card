import logo from "../images/logo.png";
import omnitrix from "../images/omnitrix.png";

const Header = (props) => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <img src={omnitrix} alt="omnitrix" className="omnitrix" />
    </div>
  );
};

export default Header;
