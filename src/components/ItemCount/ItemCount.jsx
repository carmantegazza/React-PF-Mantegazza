import { useState } from "react"
import { useEffect } from "react"

const ItemCount = ({ stock, initial = 1, onAdd}) => {
  const [counter, setCounter] = useState(initial)

  useEffect ( () => {
    setCounter(initial) }, [initial])

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="btn-group p-2">
      <button className="btn btn-outline-dark" onClick={decrement}>-</button>
      <button className="btn" disabled>{counter}</button>
      <button className="btn btn-outline-dark" onClick={increment}>+</button>
      <button className="btn btn-outline-dark text-light colorMarcaSecundario" onClick={() => onAdd(counter)}>Add to cart!</button>
    </div>
  )
}

export default ItemCount