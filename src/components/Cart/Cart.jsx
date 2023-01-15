import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"

import CartItem from "../CartItem/CartItem"
import CartButtonClearCart from "../CartButtonClearCart/CartButtonClearCart"
import CartButtonCheckout from "../CartButtonCheckout/CartButtonCheckout"
import CartButtonKeepShopping from "../CartButtonKeepShopping/CartButtonKeepShopping"
import CartTotalsTable from "../CartTotalsTable/CartTotalsTable"
import Error from "../Error/Error"
import Form from "../Form/Form"
import Orders from "../Orders/Orders"

import "../ItemCount/ItemCount.css"
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation"

const Cart = () => {
  const { cart, clearCart, getItemsTotal, getTotalPrice, isCartEmpty } = useContext(CartContext)

  const [buy, setBuy] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [order, setOrder] = useState({})

  const openForm = () => setBuy(true)

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
  
  return (
    <div className="container my-3">
        {orderId ? <OrderConfirmation order={order.id}/>
            :
      <div className="row">
        <ul className="list-group">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} /> ))}                
          {isCartEmpty() == true && <Error /> }
        </ul>
        {isCartEmpty() != true && <CartTotalsTable />}
        {buy && <Form
              cart={cart}
              getTotalPrice={getTotalPrice}
              setOrderId={setOrderId}
              clearCart={clearCart}
            />}
      <div className="row">
        <div className="d-grid gap-2 col-6 mx-auto">
          <CartButtonKeepShopping />
          {isCartEmpty() != true && <CartButtonCheckout onClick={openForm}/>}
          {isCartEmpty() != true && <CartButtonClearCart />}  
        </div>
      </div>
    </div>}
    </div>
  )
}
  
  export default Cart