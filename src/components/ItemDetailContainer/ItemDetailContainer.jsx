import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, collection, getDoc } from "firebase/firestore"
import { db } from '../../firebaseConfig'

import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const {id} = useParams()

  useEffect( ()=>{

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

  }, [id])

  return (
    <div className="row justify-content-center mt-1">
      <ItemDetail product={ product } />
    </div>
  )
}

export default ItemDetailContainer