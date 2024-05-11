import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Customer from "./components/Customer";
import CustomerAdd from "./components/CustomerAdd";
import CustomerDelete from "./components/CustomerDelete";
import CustomerUpdate from "./components/CustomerUpdate";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/add" element={<CustomerAdd />} />
            <Route path="/customer/delete" element={<CustomerDelete />} />
            <Route path="/customer/update" element={<CustomerUpdate />} />
        </Routes>
    );
}

export default App;
