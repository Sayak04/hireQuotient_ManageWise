import Logo from "../../assets/logo.webp";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="nav-items-container">
        <div className="nav-items">
          <div>
            <a className="nav-link-items" href="">
              Features
            </a>
          </div>
          <div className="dot"></div>
          <div>
            <a className="nav-link-items" href="">FAQ</a>
          </div>
          <div className="dot"></div>
          <div>
            <a className="nav-link-items" href="">Pricing</a>
          </div>
          <div className="dot"></div>
          <div>
            <a className="nav-link-items" href="">Testimonials</a>
          </div>
        </div>
        <div className="template">
            <button className="template-btn">Buy Template</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
