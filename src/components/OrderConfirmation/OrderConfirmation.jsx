import CartButtonKeepShopping from "../CartButtonKeepShopping/CartButtonKeepShopping"
import Orders from "../Orders/Orders"

const OrderConfirmation = (order) => {

  return (
    <div className="container">
        <h3 className="text-align-center">Muchas gracias por tu compra!</h3>
        <h3 className="text-align-center">Identificador de orden: {order.order}</h3>
        <CartButtonKeepShopping text={"Volver a comprar"} />
        <Orders order={order.order} />
    </div>
  )
}

export default OrderConfirmation