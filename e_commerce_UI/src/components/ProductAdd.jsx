import { useState } from "react";
import { Form, InputGroup, Container, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import axios from "axios";

function ProductAdd() {
    // const [products, setProducts] = useState([]);
    const [date, setDate] = useState("");
    const [customer_id, setCustomer_id] = useState("");

    // const handleInputChange = (e) => {
    //     const inputValue = e.target.value;
    //     const newProducts = inputValue.split(",");
    //     setProducts(newProducts);
    // };

    const addProduct = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:5000/orders", {
                // products: products,
                date: date,
                customer_id: customer_id,
            });
            alert(response.data.message);
            // setProducts("");
            setDate("");
            setCustomer_id("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <NavBar />
            <Container className="customer-add">
                {/* <InputGroup className="mb-3 px-5">
                    <Form.Control
                        placeholder="Products"
                        aria-label="Products"
                        aria-describedby="basic-addon1"
                        value={products}
                        onChange={handleInputChange}
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

                <Button onClick={addProduct} variant="success">
                    Add Product
                </Button>
            </Container>
        </div>
    );
}

export default ProductAdd;
