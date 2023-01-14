import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartTotalsTable = () => {

  const { getTotalPrice, getItemsTotal } = useContext(CartContext)

  return (
    <table className="table">
      <tbody>
        <tr>
          <th scope="row"></th>
          <td>Cantidad:</td>
          <td>{getItemsTotal()}</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Total:</td>
          <td>{"$" + getTotalPrice()}</td>
        </tr>
      </tbody>
    </table>  
  )
}

export default CartTotalsTable