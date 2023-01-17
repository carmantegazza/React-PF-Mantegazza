import CartButtonToShopping from "../CartButtonToShopping/CartButtonToShopping"

const Error = () => {
  return (
    <div className="text-center p-2">
        <img className="img-thumbnail" src="https://res.cloudinary.com/dx8uk8mjq/image/upload/v1670670354/hyungwonMeme_qz3pn9.gif" alt="Hyungwon Coffee Meme" />
        <p className="fw-semibold">Oops, no hay nada por aqui...</p>
        <CartButtonToShopping text={"Volver al inicio"} />
    </div>
  )
}

export default Error