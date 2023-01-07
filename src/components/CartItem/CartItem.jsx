import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { RiDeleteBin6Line } from "react-icons/ri"
import "../CartWidget/CartWidget.css";

const CartItem = ({ item }) => {

  const { deleteProductById } = useContext( CartContext )

  return (
    <table className="table" >
      <tbody>
    <tr className="align-middle">
        <th scope="row" key={item.id}></th>
        <td><img className="img" src={item.img} alt={item.description} style= {{height: "5rem",}}/></td>
        <td>{item.name}</td>
        <td>${item.price}.</td>
        <td>x {item.quantity}</td>
        <td> 
        <button className="btn" onClick={()=>deleteProductById(item.id)}>
          <RiDeleteBin6Line
          style = {{
              fontSize: "1.8rem",
              color: "#49dfcd",
          }}/>
        </button>
        </td>
    </tr>
    </tbody>
    </table>
  )
}

export default CartItem