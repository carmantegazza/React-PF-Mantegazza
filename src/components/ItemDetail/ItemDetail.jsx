import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import ItemOption from "../ItetmOption/ItemOption"

const ItemDetail = ( {product} ) => {

  const {addToCart, getQuantityById} = useContext(CartContext)
  const onAdd = (quantity) => {
    addToCart({
      ...product,
      quantity: quantity,
    })
  }

  const quantity = getQuantityById(product.id)

  const hurryUpText = "Hurry up! Only few left!"

  return (
    <div className="col-sm-8 mt-3 p-2">
      <div className="card text-center">
        <div className="card-body">
           <h2 className="card-title">{product.name}
           {product.sale === true && <span className="badge text-light float-end fs-5 colorMarcaSecundario">SALE!</span>}</h2>
          <div className="card-text">{product.description}</div>
        <h3>${product.price}</h3>
        <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />
        <p>In stock: {product.stock} <span className="fst-italic">{product.stock <= 3 && hurryUpText}</span></p>
        <img className="img-fluid" src={product.contentImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail