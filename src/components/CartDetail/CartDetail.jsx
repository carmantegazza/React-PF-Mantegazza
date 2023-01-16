import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import CartEmptyMessage from "../CartEmptyMessage/CartEmptyMessage"
import CartTotalsTable from "../CartTotalsTable/CartTotalsTable"

const CartDetail = () => {
    const { cart, isCartEmpty } = useContext(CartContext)

  return (
    <div className="row">
        <ul className="list-group">
            {cart.map((item) => (
                <CartItem key={item.id} item={item} /> ))}                
            {isCartEmpty() === true && <CartEmptyMessage /> }
        </ul>
        {isCartEmpty() !== true && <CartTotalsTable />}
    </div>
  )
}

export default CartDetail
