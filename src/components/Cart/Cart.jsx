import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
//import NoInfo from "../NoInfo/NoInfo"
import Error from "../Error/Error"
import "../ItemCount/ItemCount.css"


const Cart = () => {
    const { cart, clearCart, getTotalPrice, getItemsTotal } = useContext(CartContext)
  
    return (
      <div className="container my-3">
            <div className="row">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}   
                
                { cart.length < 1 && <Error /> }
            </div>
   
        <table className="table">
            <tbody>
                <tr>
                    <th scope="row"></th>
                    <td>Quantity:</td>
                    <td>{ getItemsTotal() > 0 ? getItemsTotal() : "No items yet"}</td>
                </tr>
                <tr>
                    <th scope="row"></th>
                    <td>Order Total:</td>
                    <td>{ getTotalPrice() > 0 ? getTotalPrice() : "No items yet"}</td>
                </tr>
            </tbody>
        </table>    
          <div className="row">
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-outline-dark text-light colorMarcaSecundario">Proceed to checkout</button>
                <button className="btn btn-outline-dark"><Link to={`/`}>Keep shopping!</Link></button>
                <button className="btn btn-outline-dark" onClick={() => clearCart()}>Clear cart</button>
              </div>
          </div>
    </div>
    )
  }
  
  export default Cart