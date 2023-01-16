import { Link } from "react-router-dom"

const CartButtonKeepShopping = (text) => {

  return (
    <button className="btn btn-outline-dark"><Link to={`/`}>{text.text}</Link></button>
  )
}

export default CartButtonKeepShopping