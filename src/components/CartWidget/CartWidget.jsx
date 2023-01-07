import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
    const { getItemsTotal } = useContext(CartContext)

  return (
        <button className="btn position-relative p-0">
            <Link to="/cart">
            <FaShoppingCart 
            style = {{
                fontSize: "2.5rem",
                color: "#49dfcd",
            }}/>
         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-light colorMarcaSecundario">{getItemsTotal() > 0 ? getItemsTotal() : "0"}</span>
         </Link>
        </button>
 )
}

export default CartWidget