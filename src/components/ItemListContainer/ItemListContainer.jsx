import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { SpinnerCircularSplit } from 'spinners-react';
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"

import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
  const { categoryName } = useParams()
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
 
  useEffect(() => {
    setIsLoading(true)

    const itemCollection = collection( db, "products" )

    if( categoryName ){
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

    }else{

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
    }, 500)

  }, [categoryName])

  return (
    <div className="container-fluid">
      { isLoading ?
      <div className="row justify-content-around mt-5">
        <SpinnerCircularSplit 
          size={70} 
          thickness={180} 
          speed={100} 
          color="#cb6ce6" 
          secondaryColor="#49dfcd" />
      </div> :       
      <ItemList items={items} /> 
      }
    </div>
  )
}

export default ItemListContainer