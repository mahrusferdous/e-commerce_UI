import { useState } from "react";
import { Form, InputGroup, Container, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import axios from "axios";

function ProductUpdate() {
    const [updateProd, setUpdateProd] = useState("");
    // const [products, setProducts] = useState([]);
    const [date, setDate] = useState("");
    const [customer_id, setCustomer_id] = useState("");

    const updateProduct = async () => {
        try {
            const response = await axios.put(`http://127.0.0.1:5000/orders/${updateCust}`, {
                // products: products,
                date: date,
                customer_id: customer_id,
            });
            alert(response.data.message);
            // setProducts("");
            setDate("");
            setCustomer_id("");
            setUpdateProd("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <NavBar />
            <Container className="customer-update">
                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Product ID"
                        aria-label="Product ID"
                        aria-describedby="basic-addon2"
                        value={updateProd}
                        onChange={(e) => setUpdateProd(e.target.value)}
                    />
                </InputGroup>
                {/* <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Products"
                        aria-label="Products"
                        aria-describedby="basic-addon1"
                        value={products}
                        onChange={(e) => setProducts(e.target.value)}
                    />
                </InputGroup> */}

                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Date"
                        aria-label="Date"
                        aria-describedby="basic-addon2"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Customer ID"
                        aria-label="Customer ID"
                        aria-describedby="basic-addon2"
                        value={customer_id}
                        onChange={(e) => setCustomer_id(e.target.value)}
                    />
                </InputGroup>

                <Button
                    variant="primary"
                    onClick={updateProduct}
                    disabled={!updateProd || !date || !customer_id}
                >
                    Update Product
                </Button>
            </Container>
        </div>
    );
}

export default ProductUpdate;
