import { useState, useEffect } from "react"
import { SpinnerCircularSplit } from 'spinners-react';

import CartButtonToShopping from "../CartButtonToShopping/CartButtonToShopping"

const Error = () => {

  const [isLoading, setIsLoading] = useState (true)

  useEffect(() => {

    setTimeout( ()=>{
      setIsLoading(false)
    }, 1500)
  }, [isLoading])
  
  return (
    <div>
       { isLoading ?
      <div className="row justify-content-around mt-5">
        <SpinnerCircularSplit 
          size={70} 
          thickness={180} 
          speed={100} 
          color="#cb6ce6" 
          secondaryColor="#49dfcd" />
      </div> :
      <div className="text-center p-2">
          <img className="img-thumbnail" src="https://res.cloudinary.com/dx8uk8mjq/image/upload/v1670670354/hyungwonMeme_qz3pn9.gif" alt="Hyungwon Coffee Meme" />
          <p className="fw-semibold">Oops, no hay nada por aqui...</p>
          <CartButtonToShopping text={"Volver al inicio"} />
      </div>}
    </div>
  )
}

export default Error