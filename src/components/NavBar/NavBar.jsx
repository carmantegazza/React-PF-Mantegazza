import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md p-1 align-bottom fondoColor">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/dx8uk8mjq/image/upload/v1669349897/Replay_Logo_2_z7voxh.png" alt="Logo" className="logoNavBar"/>
            </a>
        </div>
        <div className="collapse navbar-collapse">
            <div className="navbar-nav">
                    <a className= "nav-link mx-3" href="#albums">Albums</a>
                    <a className= "nav-link mx-3" href="#dvds">DVDs</a>
                    <a className= "nav-link mx-3" href="#merch">Merch</a>
            </div>
        </div>
        <div className="container-fluid justify-content-end">
            <CartWidget />
        </div>
    </nav>
  )
}


export default NavBar