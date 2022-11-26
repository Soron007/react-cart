

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Header from './Components/Header';
import { Toaster } from 'react-hot-toast'
import Cart from './Components/Cart';

import './Styles/app.scss';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>

      <Toaster />

    </BrowserRouter>
  );
}

export default App;
