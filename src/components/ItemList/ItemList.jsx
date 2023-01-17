import Item from "../Item/Item"

const ItemList = ({ items }) => {
  return (
    <div className="row justify-content-evenly">
      {items.map((element) => {
        return <Item key={element.name} element={element} />
      })}
    </div>
  )
}

export default ItemList