import { useEffect, useState } from "react"
import { FaCheck } from 'react-icons/fa'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ stock, initial = 0, onAdd, name}) => {
  const [counter, setCounter] = useState(initial)
  const [disabled, setDisabled] = useState()

  useEffect ( () => {
    stock == 0 || counter == 0 ? setDisabled(true) : setDisabled(false) }, [stock, counter, initial])

  useEffect ( () => {
    setCounter(initial) }, [initial])

  const increment = () => {
    counter < stock && setCounter(counter + 1)
  }

  const decrement = () => {
    counter > initial && setCounter(counter - 1) 
  }

  const notify = () => toast(`Agregaste ${name.toUpperCase()} al carrito!`, {
    icon: <FaCheck style={{fontSize: "1rem", color: "#49dfcd",}}/>,
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

  const addToCartWithToast = () => {
    onAdd(counter)
    notify()
  }

  return (
    <div className="btn-group p-2">
      <button className="btn btn-outline-dark" onClick={decrement}>-</button>
      <button className="btn" disabled>{counter}</button>
      <button className="btn btn-outline-dark" onClick={increment}>+</button>
      <button className="btn buttonPrimary" onClick={addToCartWithToast} disabled={disabled}>Agregar al carrito!</button>
      <ToastContainer />
    </div>
  )
}

export default ItemCount