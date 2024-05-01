import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Customers from "./pages/Customers.jsx";

function App() {
  return (<>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="customers" element={<Customers/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>)
}

export default App
