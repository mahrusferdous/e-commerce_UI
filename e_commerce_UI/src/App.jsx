import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Customer from "./components/Customer";
import CustomerAdd from "./components/CustomerAdd";
import CustomerDelete from "./components/CustomerDelete";
import CustomerUpdate from "./components/CustomerUpdate";
import Product from "./components/Product";
import ProductAdd from "./components/ProductAdd";
import ProductDelete from "./components/ProductDelete";
import ProductUpdate from "./components/ProductUpdate";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/add" element={<CustomerAdd />} />
            <Route path="/customer/delete" element={<CustomerDelete />} />
            <Route path="/customer/update" element={<CustomerUpdate />} />
            <Route path="/order" element={<Product />} />
            <Route path="/order/add" element={<ProductAdd />} />
            <Route path="/order/delete" element={<ProductDelete />} />
            <Route path="/order/update" element={<ProductUpdate />} />
        </Routes>
    );
}

export default App;
