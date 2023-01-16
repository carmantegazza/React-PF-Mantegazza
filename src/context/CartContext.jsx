import { useEffect } from "react"
import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [isCartEmpty, setIsCartEmpty] = useState()

  const addToCart = (element) => {
    if (isInCart(element)) {
      let newArray = cart.map((product) => {
        if (product.id === element.id) {
          let newProduct = {
            ...product,
            quantity: element.quantity,
          }
          return newProduct
        } else {
          return product
        }
      })
      setCart(newArray)
    } else {
      setCart([...cart, element])
    }
  }

  const clearCart = () => setCart([])

  const deleteProductById = (id) => {
    const newArray = cart.filter( product => product.id !== id )
    setCart(newArray)
  }

  const getItemsTotal = () => {
    const itemsTotal = cart.reduce ( (items, element) => {
      return items + (element.quantity)
    }, 0)
    return itemsTotal
  }
  
  const getQuantityById = (id) => {
    const product = cart.find( elemento => elemento.id === id)
    return product?.quantity
  }
  
  const getTotalPrice = () => {
    const total = cart.reduce( (acc, element) => {
      return acc + (element.price * element.quantity)
    }, 0 )
    return total
  }
  
  const isInCart = (item) => {
    return cart.some((elemento) => elemento.id === item.id)
  }

  useEffect(() => {
    if (cart.length === 0){
      setIsCartEmpty(true)
    } else {
      setIsCartEmpty(false)
    }
  }, [cart])
  
    const data = {
    addToCart,
    cart,
    clearCart,
    deleteProductById,
    getItemsTotal,
    getQuantityById,
    getTotalPrice,
    isCartEmpty,
    isInCart,
  }

  return (
      <CartContext.Provider value={data}>
        {children}
      </CartContext.Provider>
  )

}

export default CartContextProvider