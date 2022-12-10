import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./components/Error/Error"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>

      <NavBar />
      <Routes>

      <Route path="/" element={<ItemListContainer />} />
        
        <Route path="/category/:categoryName" element={<ItemListContainer />} />


        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

        <Route path="/cart" element={ <h3>Aca se muestra el carrito</h3> } />

        <Route path="*" element={ <Error/> } />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
