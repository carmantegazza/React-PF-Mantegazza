import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { FaExclamationCircle } from "react-icons/fa"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"

const Form = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({ name: "", phone: "", email: "" })

  const total = getTotalPrice()

  const notify = () => toast('Verifica el email ingresado', {
    icon: <FaExclamationCircle style={{fontSize: "1rem", color: "#49dfcd",}}/>,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setUserData(data => ({...data, [name]: value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (userData.email === userData.confirmEmail) {
      const order = {
          buyer: userData,
          items: cart,
          total: total,
          date: serverTimestamp(),
        }
    
      const orderCollection = collection(db, "orders")
    
      addDoc(orderCollection, order).then((res) => setOrderId(res.id))
    
      cart.map((product) => (
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        })
      ))
        
      setTimeout(() => {
        clearCart()
        
      }, 300);
    } else {
      notify()
    }
  }
  
   return (
    <div  className="container">
      <form action="" onSubmit={handleSubmit}>
        <div className="row mb-1">
          <label className="col-sm-4 col-form-label">Nombre</label>
          <div className="col-sm-8">
            <input
              required
              className="form-control"
              type="text"
              placeholder="Nombre"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-1">
          <label className="col-sm-4 col-form-label">Telefono</label>
          <div className="col-sm-8">
            <input
              required
              className="form-control"
              type="text"
              placeholder="Codigo de area + numero"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
            />
          </div>
        </div>   
        <div className="row mb-1">
          <label className="col-sm-4 col-form-label">E-mail</label>
          <div className="col-sm-8">
            <input
              required
              className="form-control"
              type="email"
              placeholder="xxx@xxx.com"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
        </div>  
        <div className="row mb-1">
          <label className="col-sm-4 col-form-label">Confirma tu e-mail</label>
          <div className="col-sm-8">
            <input
              required
              className="form-control"
              type="email"
              placeholder="xxx@xxx.com"
              name="confirmEmail"
              value={userData.confirmEmail}
              onChange={handleChange}
            />
          </div>
        </div>    
        <button type="submit" className="btn float-end px-3 mt-1 mb-5 buttonPrimary">Confirmar compra</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Form
