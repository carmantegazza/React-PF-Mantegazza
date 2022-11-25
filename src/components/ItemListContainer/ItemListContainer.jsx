import "./ItemListContainer.css";

const ItemListContainer = ( {greeting}) => {
  return (
    <div className="container-fluid my-2">
        <p className="text-center colorMarca">{greeting}</p>
    </div>
  )
}

export default ItemListContainer