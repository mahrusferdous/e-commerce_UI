import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { Card } from "react-bootstrap";
import picture from "../assets/people.svg";

function Product() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:5000/orders");
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
                {customers.map((order, index) => (
                    <Card key={index} style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>Products {order.products}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {order.order_id}
                            </Card.Subtitle>
                            <Card.Text>Date: {order.date}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Product;
