import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./components/Error/Error"

import Cart from "./components/Cart/Cart"
import CartContextProvider from "./context/CartContext"
import Form from "./components/Form/Form"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>

        <NavBar />
        <Routes>

          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:categoryName" element={<ItemListContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Form />} />

          <Route path="/:sale" element={<ItemListContainer />} />

          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={<Error />} />

       </Routes>

      </CartContextProvider>
    </BrowserRouter>

  );
}

export default App;
