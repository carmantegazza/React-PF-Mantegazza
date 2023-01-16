import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc, collection} from "firebase/firestore"
import { db } from '../../firebaseConfig'

import Error from "../Error/Error"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  console.log(product)

  const {id} = useParams()

  useEffect( ()=>{
    const itemCollection = collection(db, "products")
    const ref = doc(itemCollection, id)

    getDoc(ref)
    .then( res => {
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
      {product.name ? <ItemDetail product={ product } /> : <Error />}
    </div>
  )
}

export default ItemDetailContainer