import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import ItemDetailStock from "../ItemDetailStock/ItemDetailStock"
import ItemOutOfStockBadge from "../ItemOutOfStockBadge/ItemOutOfStockBadge"
import ItemSaleBadge from "../ItemSaleBadge/ItemSaleBadge"


const ItemDetail = ( {product} ) => {

  const {addToCart, getQuantityById} = useContext(CartContext)
  const onAdd = (quantity) => {
    addToCart({
      ...product,
      quantity: quantity,
    })
  }

  const quantity = getQuantityById(product.id)

  return (
    <div className="col-sm-8 mt-3 p-2">
      <div className="card text-center">
      {product.stock === 0 && <ItemOutOfStockBadge />}  
      {product.sale === true && <ItemSaleBadge/>}
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <div className="card-text">
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <ItemCount onAdd={onAdd} name={product.name} stock={product.stock} initial={quantity} />
            <ItemDetailStock stock={product.stock}/>
            <img className="img-fluid" src={product.contentImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail