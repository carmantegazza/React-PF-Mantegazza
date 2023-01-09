
const ItemDetailStock = ( {stock} ) => {

    let stockText = ""
    const lowStockText = "Apurate! Ultimas unidades"
    const noStockText = "Sin stock!"

const stockCheck = () => {

    if ( stock === 0) {
        stockText = noStockText
    } else if ( stock <= 5) {
        stockText = lowStockText
    }

    return stockText

}

    return (
        <p className="fst-italic">{ stockCheck() }</p>
    )
}

export default ItemDetailStock