import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Dogs from './components/Dogs/DogsPage';
import Cart from './components/Cart/Cart';
import Nav from './components/Nav/NavBar';
import axios from 'axios';
import { CartContext } from './components/Context/CartContext';

function App() {

  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getData () {
      const res = await axios.get('https://appbe1.herokuapp.com/v1/dogs');
      return res;
    }
      getData()
      .then(res => { setAllDogs(res.data) })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <CartContext.Provider value={{ myCart, addToCart, total, setTotal }}>
      <Router>
        <Nav />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs allDogs={allDogs} />} />
            <Route path="/checkout" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
