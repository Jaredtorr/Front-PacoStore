import React, { useState } from 'react';
import "../pages/AgregarProducto.css";
import Label from "../atoms/Label";
import Button from "../atoms/Button";

const AgregarProductos = () => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productType, setProductType] = useState('');

    const agregarProducto = () => {
        const newProduct = {
            name: productName,
            price: productPrice,
            description: productDescription,
            type: productType
        };
        setProducts([...products, newProduct]);
        limpiarCampos();
    };

    const limpiarCampos = () => {
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setProductType('');
    };

    const editarProducto = (index) => {
        const product = products[index];
        setProductName(product.name);
        setProductPrice(product.price);
        setProductDescription(product.description);
        setProductType(product.type);
        eliminarProducto(index);
    };

    const eliminarProducto = (index) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };

    return (
        <div className="container">
            <header className="header">
                <h1>PacoStore</h1>
                <a href="/BienvenidoPaco" className="btn-regresar">Inicio</a> {/* Enlace para regresar al inicio */}
            </header>
            <div className="formulario">
                <h2>Agregar Producto</h2>
                <div>
                    <label htmlFor="productName" className="label-form">Nombre del producto:</label>
                    <input 
                        type="text" 
                        id="productName" 
                        placeholder="Ingrese el nombre del Producto." 
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="productPrice">Precio del producto:</label>
                    <input 
                        type="text" 
                        id="productPrice" 
                        placeholder="Ingrese el precio del Producto." 
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="productDescription">Descripción del producto:</label>
                    <input 
                        type="text" 
                        id="productDescription" 
                        placeholder="Ingrese la descripción del Producto." 
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="productType">Tipo de producto:</label>
                    <input 
                        type="text" 
                        id="productType" 
                        placeholder="Ingrese el tipo de Producto." 
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                        required 
                    />
                </div>
                <button type="button" onClick={agregarProducto}>Agregar Producto</button>
            </div>

            <div className="tabla">
                <h2>Lista de Productos</h2>
                <table id="productosTabla">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th>Tipo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.type}</td>
                                <td>
                                    <button onClick={() => editarProducto(index)}>Editar</button>
                                    <button onClick={() => eliminarProducto(index)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgregarProductos;
