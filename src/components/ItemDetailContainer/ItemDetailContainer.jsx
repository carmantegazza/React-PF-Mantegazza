import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SpinnerCircularSplit } from 'spinners-react';
import { getDoc, doc, collection, query, where} from "firebase/firestore"
import { db } from '../../firebaseConfig'

import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const {id} = useParams()

  useEffect( ()=>{
    setIsLoading(true)

    const itemCollection = collection(db, "products")
    const ref = doc(itemCollection, id)

    getDoc(ref).then( res => {
      setProduct(
        {
          id: res.id,
          ...res.data()
        }
      )
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
    
  }, [id])

  return (
    <div className="row justify-content-center mt-1">
      {isLoading ?
      <div className="row justify-content-around mt-5">
        <SpinnerCircularSplit 
          size={70} 
          thickness={180} 
          speed={100} 
          color="#cb6ce6" 
          secondaryColor="#49dfcd" />
      </div> :
      <ItemDetail product={ product } />}
    </div>
  )
}

export default ItemDetailContainer