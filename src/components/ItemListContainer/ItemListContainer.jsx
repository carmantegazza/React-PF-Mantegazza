import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../productsMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
  const { categoryName } = useParams()

  const [items, setItems] = useState([])

  useEffect(() => {
    const productosFiltered = products.filter(
      (productos) => productos.category === categoryName
    )

    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltered : products)
      }, 500)
    })

    getProducts
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        console.log("se rechazo")
      })

  }, [categoryName])

  return (
        <ItemList items={items} />
  )
}

export default ItemListContainer