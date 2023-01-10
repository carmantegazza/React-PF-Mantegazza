import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartButtonClearCart = () => {

    const { clearCart } = useContext(CartContext)
    const notify = () => toast('Vaciando carrito', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

  const clearCartWithToast = () => {
    notify()
    setTimeout (() => {
      clearCart()
    }, 2000)
  }


  return (
    <div>
      <button className="btn btn-outline-dark" onClick={clearCartWithToast}>Vaciar carrito</button>
      <ToastContainer />
    </div>
    )
}

export default CartButtonClearCart