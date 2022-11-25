import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = () => {
  return (
        <button className="btn position-relative p-0">
            <FaShoppingCart 
            style = {{
                fontSize: "2.5rem",
                color: "#49dfcd",
            }}/>
         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill colorMarcaSecundario">3</span>
        </button>
 )
}

export default CartWidget