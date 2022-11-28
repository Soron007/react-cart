import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { Toaster } from "react-hot-toast";
import './Styles/app.scss';


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>

        <Route path={'/'} element={<Home />} />
        <Route path={'/cart'} element={<Cart />} />
      </Routes>

      <Toaster />


    </BrowserRouter>

  );
}

export default App;
