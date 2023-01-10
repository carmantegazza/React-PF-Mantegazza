import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"

import "../ItemCount/ItemCount.css"

import CartItem from "../CartItem/CartItem"
import Error from "../Error/Error"
import Form from "../Form/Form"
import Orders from "../Orders/Orders"
import CartButtonKeepShopping from "../CartButtonKeepShopping/CartButtonKeepShopping"
import CartButtonCheckout from "../CartButtonCheckout/CartButtonCheckout"
import CartButtonClearCart from "../CartButtonClearCart/CartButtonClearCart"
import CartTotalsTable from "../CartTotalsTable/CartTotalsTable"


const Cart = () => {
    const { cart, isCartEmpty } = useContext(CartContext)

    const [buy, setBuy] = useState(false)
    const [orderId, setOrderId] = useState(null)
  
    const [order, setOrder] = useState({})
  
    const openForm = () => {
      if (cart.length > 0) {
        setBuy(true)
      } else {
        alert("no se puede comprar la nada")
      }
    }
  
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
          <div>
            <h1>tu orden de compra es : {orderId}</h1>
            <Orders order={order} />
    
            <Link to={"/"}>Volver a comprar</Link>
          </div>
        )
      }
  
    return (
      <div className="container my-3">
            <div className="row">
              <ul className="list-group">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}   
                
                { isCartEmpty() == true && <Error /> }
                </ul>
            </div>
          {isCartEmpty() != true && <CartTotalsTable />}
          <div className="row">
              <div className="d-grid gap-2 col-6 mx-auto">
                <CartButtonKeepShopping />
                {isCartEmpty() != true &&<CartButtonCheckout />}
                {isCartEmpty() != true && <CartButtonClearCart />}  
              </div>
          </div>
    </div>
    )
  }
  
  export default Cart