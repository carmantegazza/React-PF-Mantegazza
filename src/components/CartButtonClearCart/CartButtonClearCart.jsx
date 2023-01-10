import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const CartButtonClearCart = () => {

    const { clearCart } = useContext(CartContext)

  return (
    <button className="btn btn-outline-dark" onClick={() => clearCart()}>Vaciar carrito</button>
    )
}

export default CartButtonClearCart