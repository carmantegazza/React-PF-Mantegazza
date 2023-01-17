import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"

import CartButtonClearCart from "../CartButtonClearCart/CartButtonClearCart"
import CartButtonCheckout from "../CartButtonCheckout/CartButtonCheckout"
import CartButtonToShopping from "../CartButtonToShopping/CartButtonToShopping"
import CartDetail from "../CartDetail/CartDetail"
import Form from "../Form/Form"
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation"

import "../../styles/styles.css"

const Cart = () => {
  const { cart, clearCart, getTotalPrice, isCartEmpty } = useContext(CartContext)
  
  const [buttonText, setButtonText] =useState('')
  const [buy, setBuy] = useState(false)
  const [order, setOrder] = useState({})
  const [orderId, setOrderId] = useState(null)
  
  const openForm = () => setBuy(true)
  
  useEffect( () => {
    isCartEmpty ? setButtonText("Empeza a comprar!") : setButtonText("Seguir comprando")
    isCartEmpty && setBuy(false)

  }, [isCartEmpty])  

  useEffect(() => {
    if (orderId) {
      const orderCollection = collection(db, "orders")
      const ref = doc(orderCollection, orderId)
  
      getDoc(ref).then((res) => {
        setOrder({
          id: res.id,
          ...res.data(),
        })
      })
    }
  }, [orderId])

  if (orderId) {
    return (
      <OrderConfirmation order={order.id}/>
    )
  }
  
  return (
    <div className="container my-3">
        <CartDetail /> 
        {buy ? 
        <Form
          order={order}
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        /> :
        <div className="row">
          <div className="d-grid gap-2 col-6 mx-auto">
            <CartButtonToShopping text={buttonText}/>
            {isCartEmpty !== true && <CartButtonCheckout onClick={openForm}/>}
            {isCartEmpty !== true && <CartButtonClearCart />}  
          </div>
        </div>
        }
    </div>
  )
}
  
export default Cart