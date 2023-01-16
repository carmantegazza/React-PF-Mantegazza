import { Link } from "react-router-dom"

const CartButtonKeepShopping = (text) => {
  return (
    <button className="btn buttonSecondary"><Link to={`/`}>{text.text}</Link></button>
  )
}

export default CartButtonKeepShopping