import React from 'react'

const ItemDetail = ( {product} ) => {
  return (
    <div className='col-sm-8 mt-3 p-2'>
      <div className='card text-center'>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <div className="card-text">{product.description}</div>
        <h3>${product.price}</h3>

        </div>
      </div>
    </div>
  )
}

export default ItemDetail