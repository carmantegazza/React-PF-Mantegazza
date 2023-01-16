import { useState, useEffect } from "react"

const ItemDetailStock = ( {stock} ) => {

    const [stockText, setStockTest] = useState()
    
    useEffect(() => {    
        if (stock === 0) {
        setStockTest("Sin stock")
        } else if (stock <=5) {
        setStockTest("Apurate! Solo quedan "+ stock)
        }}, [stock])

    return (
        <p className="fst-italic">{stockText}</p>
    )
}

export default ItemDetailStock