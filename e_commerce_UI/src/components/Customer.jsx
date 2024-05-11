import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

function Customer() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:5000/customers");
                setCustomers(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="customer-page">
                {customers.map((customer) => (
                    <div key={customer.customer_id}>
                        <h3>{customer.name}</h3>
                        <p>{customer.customer_id}</p>
                        <p>{customer.phone}</p>
                        <p>{customer.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Customer;
