import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import top from '../images/top.jpg';
import kurta from '../images/kurta.jpg';
import kurta_women from '../images/kurta-women.jpg';
import saree from '../images/saree.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import imgmen from '../images/imgmen.jpg';
import imgmen2 from '../images/imgmen2.jpg';

const products = [
  {
    id: 1,
    name: 'Crop Top',
    image: top,
    price: 1600,
  },
  {
    id: 2,
    name: 'Kurta',
    image: kurta,
    price: 9000,
  },
  {
    id: 3,
    name: 'Women Kurta',
    image: kurta_women,
    price: 8900,
  },
  {
    id: 4,
    name: 'Saree',
    image: saree,
    price: 9000,
  },
  {
    id: 5,
    name: 'Kurti',
    image: img7,
    price: 5600,
  },
  {
    id: 6,
    name: 'Western Women',
    image: img8,
    price: 9000,
  },
  {
    id: 7,
    name: 'Western Women',
    image: img9,
    price: 10000,
  },
  {
    id: 8,
    name: 'Western Women',
    image: img10,
    price: 10000,
  },
  {
    id: 9,
    name: 'Western Men',
    image: imgmen,
    price: 7800,
  },
  {
    id: 10,
    name: 'Western Men',
    image: imgmen2,
    price: 9000,
  },
];

function Shop() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  const calculateTotalPrice = (updatedCart) => {
    const total = updatedCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalPrice(total);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Row>
        <Col xs={12} className="mb-4">
          <h1 className="text-center my-4">Our Services</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="mb-4">
          <Form.Control
            type="text"
            placeholder="Search for products"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Col>
      </Row>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} className="img-fluid" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ₹{product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      <Row>
        <Col xs={12}>
          <h2 className="text-center">Your Cart</h2>
        </Col>
      </Row>
      <Row>
        {cart.map((item) => (
          <Col key={item.id} xs={12}>
            <div className="alert alert-success d-flex justify-content-between align-items-center mb-3">
              <span>{item.name} - ₹{item.price} x {item.quantity}</span>
              <div>
                <Button variant="secondary" onClick={() => removeFromCart(item.id)} className="mr-2">-</Button>
                <Button variant="primary" onClick={() => increaseQuantity(item.id)} className="mr-2">+</Button>
                <span>{item.quantity}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          <p className="total-price">Total Price: ₹{totalPrice}</p>
          <Form.Group>
            <Form.Label>Select Payment Method:</Form.Label>
            <Form.Control as="select" onChange={handlePaymentMethodChange} value={paymentMethod}>
              <option value="">Select Payment Method</option>
              <option value="cash">Cash on Delivery</option>
              <option value="upi">UPI</option>
              <option value="card">Card</option>
            </Form.Control>
          </Form.Group>
          <Link to="/checkout" className="btn btn-primary" disabled={!paymentMethod}>Proceed to Order</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
