import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Vendors from "./pages/Vendors.jsx";
import Customers from "./pages/Customers.jsx";
import Services from "./pages/Services.jsx";

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={'customers'} element={<Customers/>}/>
          <Route path={'products'} element={<Products/>}/>
          <Route path={'services'} element={<Services/>}/>
          <Route path={'vendors'} element={<Vendors/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App
