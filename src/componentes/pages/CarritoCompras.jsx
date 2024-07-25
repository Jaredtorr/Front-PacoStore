import React, { useState } from 'react';
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import "../pages/CarritoCompras.css";
import { useNavigate } from 'react-router-dom';

function CarritoCompras() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const enterCatalogo = () => {
        const order = {
            customerName: name,
            address: address,
            products: [
                { image: 'Camisassssss.jpg', name: 'Camisa Casual', quantity: 1, total: 30.00 },
                { image: '/Camison.jpeg', name: 'Playera Casual', quantity: 1, total: 40.00 },
                { image: 'Camisassss.jpeg', name: 'Pantalon Casual', quantity: 1, total: 25.00 }
            ]
        };
        localStorage.setItem('order', JSON.stringify(order));
        navigate("/Delivery");
    }

    return (
        <div className="all-carrito">
            <div className="header-image">
                <img src="/Carrito.jpeg" id="carritobuy" alt="Carrito" />
            </div>
            <h1>Carrito de compras</h1>
            <div className="box">
                <img src="Camisassssss.jpg" alt="Camisa Casual" />
                <div className="item-details">
                    <p>Camisa Casual</p>
                    <p>$30.00</p>
                    <Label text="Cantidad" />
                </div>
                <Button text="Eliminar" />
            </div>
            <div className="box">
                <img src="/Camison.jpeg" alt="Playera Casual" />
                <div className="item-details">
                    <p>Playera Casual</p>
                    <p>$40.00</p>
                    <Label text="Cantidad" />
                </div>
                <Button text="Eliminar" />
            </div>
            <div className="box">
                <img src="Camisassss.jpeg" alt="Pantalon Casual" />
                <div className="item-details">
                    <p>Pantalon Casual</p>
                    <p>$25.00</p>
                    <Label text="Cantidad" />
                </div>
                <Button text="Eliminar" />
            </div>
            <div className="form-section">
                <Label text="Nombre" />
                <Input
                    placeholder="Ingrese su nombre"
                    className="input-style"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Label text="Ubicación" />
                <Input
                    placeholder="Ingrese su ubicación"
                    className="input-style"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <div className="summary">
                    <span className="summary-label">Subtotal:</span>
                    <span className="summary-value">$95.00</span>
                    <br />
                    <span className="summary-label">Envío:</span>
                    <span className="summary-value">Gratis</span>
                    <br />
                    <span className="summary-label">Total:</span>
                    <span className="summary-value">$95.00</span>
                </div>
                <Button text="Pagar" onClick={enterCatalogo} className="checkout-button" />
            </div>
        </div>
    );
}

export default CarritoCompras;
