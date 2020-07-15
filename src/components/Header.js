import React from "react";
import { NavLink, Link} from "react-router-dom"

const Header = (props) => {
  return (
    <div className='ui pointing menu'>
      <Link to = "/"  className='item'>Home</Link>
      <Link to = "/about" className='item'>About</Link>
    </div>
  );
};

export default Header;
