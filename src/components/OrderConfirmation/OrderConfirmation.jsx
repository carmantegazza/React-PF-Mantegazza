import CartButtonToShopping from "../CartButtonToShopping/CartButtonToShopping"

const OrderConfirmation = (order) => {

  return (
    <div className="container mt-3">
        <p className="fs-4 text-center">Muchas gracias por tu compra!</p>
        <p className="fs-5 text-center">Este es el identificador de tu orden: {order.order}</p>
        <div className="d-grid gap-2 col-6 mx-auto">
          <CartButtonToShopping text={"Volver a comprar"} />
        </div>
    </div>
  )
}

export default OrderConfirmation