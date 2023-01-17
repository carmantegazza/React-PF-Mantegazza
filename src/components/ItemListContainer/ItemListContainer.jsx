import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { SpinnerCircularSplit } from 'spinners-react';
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"

import Error from "../Error/Error";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
  const { categoryName } = useParams()
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
 
  useEffect(() => {
    setIsLoading(true)

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

    setTimeout( ()=>{
      setIsLoading(false)
    }, 1200)

  }, [categoryName])

  return (
    <div className="container-fluid mb-5">
      { isLoading ?
      <div className="row justify-content-around mt-5">
        <SpinnerCircularSplit 
          size={70} 
          thickness={180} 
          speed={100} 
          color="#cb6ce6" 
          secondaryColor="#49dfcd" />
      </div> : 
      <div className="row justify-content-around mt-5"> 
        {items.length === 0 ? <Error /> : <ItemList items={items} />}
      </div>   
      }
    </div>
  )
}

export default ItemListContainer