import { BrowserRouter, Route,Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import Cart from './components/Cart';
import {CartContextProvider} from './components/CartContext';
import './App.css';

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} /> 
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/details/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
