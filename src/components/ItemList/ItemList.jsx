import React from "react"
import Item from "../Item/Item"

const ItemList = ({ items }) => {
  return (
    <div className="row justify-content-center m-0 p-2">
      {items.map((element) => {
        return <Item key={element.name} element={element} />
      })}
    </div>
  )
}

export default ItemList