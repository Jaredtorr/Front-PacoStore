import React, { useEffect, useState } from 'react';
import './Delivery.css';

const NavBar = ({ onNavClick }) => (
  <nav className="navbar">
    <ul>
      <li><a href="#inicio" onClick={() => onNavClick('inicio')}>Inicio</a></li>
      <li><a href="#pedidos" onClick={() => onNavClick('pedidos')}>Pedidos</a></li>
    </ul>
  </nav>
);

const DeliveryHeader = ({ onNavClick }) => (
  <header className="delivery-header">
    <NavBar onNavClick={onNavClick} />
    <h1>Detalles del Pedido</h1>
  </header>
);

const OrderDetails = ({ order }) => (
  <div className="order-details">
    <h2>Pedido #{order.id || 'N/A'}</h2>
    <table className="order-table">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {order.products.map((product, index) => (
          <tr key={index}>
            <td><img src={product.image} alt={`Producto ${index + 1}`} className="product-image" /></td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>${product.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2>Información del Cliente</h2>
    <table className="order-table">
      <thead>
        <tr>
          <th>Campo</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cliente</td>
          <td>{order.customerName}</td>
        </tr>
        <tr>
          <td>Dirección</td>
          <td>{order.address}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Delivery = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('order');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  return (
    <div className="delivery-container">
      <DeliveryHeader />
      {order ? <OrderDetails order={order} /> : <p>No hay detalles del pedido disponibles.</p>}
    </div>
  );
};

export default Delivery;
