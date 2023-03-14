import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { AiFillCode } from "react-icons/ai";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whatcyber">What is cyber security?</a>
    </p>
    <p>
      <a href="#cta">Let's start</a>
    </p>
    <p>
      <a href="#blog">Blogs</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="cdon__navbar">
      <div className="cdon__navbar-links">
        <div className="cdon__navbar-links_logo">
          <AiFillCode size={"30"} color={"#fff"} />
        </div>
        <div className="cdon__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="cdon__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="cdon__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="cdon__navbar-menu_container scale up-center">
            <div className="cdon__navbar-menu_container-links">
              <Menu />
              <div className="cdon__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
