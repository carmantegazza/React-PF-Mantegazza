import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"

import Error from "../Error/Error";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
  const { categoryName } = useParams()
  const [items, setItems] = useState([])
 
  useEffect(() => {
    const itemCollection = collection( db, "products" )

    if (categoryName){
      const q = query( itemCollection, where( "category" , "==" , categoryName ) )
      getDocs(q)
      .then( (res) => {
        const products = res.docs.map( product => { 
          return {
            
            ...product.data(),
            id: product.id
          }
        } )
        setItems(products)
      })
      .catch( (err) => console.log(err))

    } else {
      getDocs(itemCollection)
      .then( (res) => {
        const products = res.docs.map( product => { 
          return {
            
            ...product.data(),
            id: product.id
          }
        } )

        setItems(products)
      })
      .catch( (err) => console.log(err))
    }

  }, [categoryName])

  return (
    <div className="container-fluid mb-5">
      <div className="row justify-content-around mt-5"> 
        {items.length === 0 ? <Error /> : <ItemList items={items} />}
      </div>   
    </div>
  )
}

export default ItemListContainer