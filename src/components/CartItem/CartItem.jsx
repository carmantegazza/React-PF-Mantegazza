import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import "../CartWidget/CartWidget.css";

import { RiDeleteBin6Line } from "react-icons/ri"

const CartItem = ({ item }) => {

  const { deleteProductById } = useContext( CartContext )

  return (

    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img className="img" src={item.img} alt={item.description} style= {{height: "5rem",}}/>
      <span className="ps-5 me-auto">{item.quantity}</span>
      <span className="me-auto">{item.name}</span>
      <span className="pe-5">${item.price}</span>
      <button className="btn" onClick={()=>deleteProductById(item.id)}>
          <RiDeleteBin6Line
          style = {{
              fontSize: "1.8rem",
              color: "#49dfcd",
          }}/>
        </button>
    </li>
  )
}

export default CartItem