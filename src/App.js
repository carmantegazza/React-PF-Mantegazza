import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting = {"Bienvenidos a Replay K-Pop Store!"} />
    </div>
  );
}

export default App;
