import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    const { getItemsTotal, isCartEmpty } = useContext(CartContext)

    return (
        <button className="btn position-relative p-0">
            <Link to="/cart">
                <FaShoppingCart style = {{fontSize: "2.5rem", color: "#49dfcd"}}/>
                 {isCartEmpty !== true && 
                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-light bgBrandColor2">{getItemsTotal()}</span>}
            </Link>
        </button>
    )
}

export default CartWidget