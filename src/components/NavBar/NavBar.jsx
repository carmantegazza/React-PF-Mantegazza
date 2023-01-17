import { Link } from "react-router-dom"

import CartWidget from "../CartWidget/CartWidget";

import "../../styles/styles.css"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md px-3 py-1 align-bottom sticky-top bgColor">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://res.cloudinary.com/dx8uk8mjq/image/upload/v1669349897/Replay_Logo_2_z7voxh.png" alt="Logo" className="logo"/>
        </Link>
      </div>
      <div className="navbar-nav">
        <Link className= "nav-link text-nowrap mx-3 titleText" to="/category/girlGroups">Girl Groups</Link>
        <Link className= "nav-link text-nowrap mx-3 titleText" to="/category/boyGroups">Boy Groups</Link>
        <Link className= "nav-link text-nowrap mx-3 titleText" to="/category/soloist">Solistas</Link>
      </div>
      <div className="container-fluid justify-content-end">
            <CartWidget />
        </div>
    </nav>
  )
}

export default NavBar