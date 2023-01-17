import { useState, useEffect } from "react"
import { SpinnerCircularSplit } from 'spinners-react';

const CartEmptyMessage = () => {

  const [isLoading, setIsLoading] = useState (true)

  useEffect(() => {

    setTimeout( ()=>{
      setIsLoading(false)
    }, 1500)
  }, [isLoading])


  return (
    <div className="container">
      { isLoading ?
        <div className="row justify-content-around my-5">
          <SpinnerCircularSplit 
            size={70} 
            thickness={180} 
            speed={100} 
            color="#49dfcd" 
            secondaryColor="#cb6ce6" />
      </div> :
      <div className="row justify-content-around mt-5">
        <p className="fs-4 text-center">No hay nada en el carrito</p>
      </div>
      }
    </div>
  )
}

export default CartEmptyMessage