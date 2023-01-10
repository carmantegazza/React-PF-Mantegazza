import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const CartButtonKeepShopping = () => {

  const { isCartEmpty } = useContext(CartContext)

  let keepShoppingButtonText = ""
  isCartEmpty() === true ? keepShoppingButtonText = "Empezá a comprar!" : keepShoppingButtonText = "Seguir comprando"

 
  return (
    <button className="btn btn-outline-dark"><Link to={`/`}>{keepShoppingButtonText}</Link></button>
    )
}

export default CartButtonKeepShopping