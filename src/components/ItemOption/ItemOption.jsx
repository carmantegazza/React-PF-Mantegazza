import { getDoc, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { useState } from "react"


const ItemOption = ( product ) => {

const itemCollection = collection( db, "products" )

const [versions, setVersions] = useState({})

const q = query ( itemCollection, where ("id", "==", product))
getDoc(q)
.then( (res) => {
  const itemVersions = res.doc.map(product => {
    return{
      ...product.data(),
      version: product.version
    }
  })

  setVersions(itemVersions)

})

return (
<h2>caca</h2>
)
}

export default ItemOption