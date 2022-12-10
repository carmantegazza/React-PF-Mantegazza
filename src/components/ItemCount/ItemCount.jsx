import { useState } from "react"

const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial)

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

  const onAdd = ( quantity ) => {
    console.log("You added", quantity, "albums to the cart!")
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