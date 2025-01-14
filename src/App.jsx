import { Navbar } from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer message="Listado de productos en construcción" />
    </div>
  );
}

export default App;
