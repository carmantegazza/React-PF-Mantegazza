import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrash, FaTimes } from "react-icons/fa"
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({ item }) => {

  const { deleteProductById } = useContext( CartContext )

  const notify = () => toast(`Eliminaste "${item.name}" del carrito!`, {
    icon: <FaTimes style={{fontSize: "1rem", color: "#49dfcd",}}/>,
    transition: Flip,
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const deleteItemWithToast = () => {
    deleteProductById(item.id)
    notify()
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img className="img" src={item.img} alt={item.description} style= {{height: "5rem",}}/>
      <span className="ps-5 me-auto">{item.quantity}</span>
      <span className="me-auto">{item.name}</span>
      <span className="pe-5">${item.price}</span>
      <button className="btn" onClick={deleteItemWithToast} title={"Eliminar del carrito"}>
        <FaTrash style = {{fontSize: "1.8rem", color: "#49dfcd"}}/>
      </button>
      <ToastContainer />
    </li>
  )
}

export default CartItem