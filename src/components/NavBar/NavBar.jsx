import "./NavBar.css";
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md px-3 py-1 align-bottom fondoColor">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            <img src="https://res.cloudinary.com/dx8uk8mjq/image/upload/v1669349897/Replay_Logo_2_z7voxh.png" alt="Logo" className="logoNavBar"/>
            </Link>
        </div>

            <div className="navbar-nav">
                    <Link className= "nav-link mx-3" to="/category/girlGroups">Girl Groups</Link>
                    <Link className= "nav-link mx-3" to="/category/boyGroups">Boy Groups</Link>
                    <Link className= "nav-link mx-3" to="/category/soloist">Soloist</Link>
                    <Link className= "nav-link mx-3 text-uppercase fw-semibold" to="/sale">Sale!</Link>
            </div>

        <div className="container-fluid justify-content-end">
            <CartWidget />
        </div>
    </nav>
  )
}


export default NavBar