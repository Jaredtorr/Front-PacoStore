import React from "react";
import Card from "../organismos/Card";
import './CatalogoCamisas.css';

const CatalogoCamisas = () => {
    return (
        <div className="catalogo-container">
            <h2 className="catalogo-titulo">Catálogo de Camisas</h2>
            <div className="Cards-ordenadas">
                <Card 
                    src="Camisassss.jpeg" 
                    Titulo={"Camisa Formal"} 
                    descripcion={"Camisa de vestir elegante, ideal para ocasiones formales y profesionales."} 
                    Precio={"$40.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                     redirectTo="/ProductosMan"
                />
                <Card 
                    src="Camisassssss.jpg" 
                    Titulo={"Camisa Casual"} 
                    descripcion={"Camisa casual de algodón, perfecta para un look relajado."} 
                    Precio={"$35.00"} 
                    text={"Comprar"} 
                    className="card" 
                    isNewArrival={true}
                     redirectTo="/ProductosMan"
                />
                <Card 
                    src="Camison.jpeg" 
                    Titulo={"Camisa de Lino"} 
                    descripcion={"Camisa ligera de lino, ideal para climas cálidos."} 
                    Precio={"$50.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                     redirectTo="/ProductosMan"
                />
                <Card 
                    src="Camisonn.jpg" 
                    Titulo={"Camisa a Cuadros"} 
                    descripcion={"Camisa a cuadros de estilo clásico, perfecta para un look casual."} 
                    Precio={"$30.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                     redirectTo="/ProductosMan"
                />
                <Card 
                    src="Camisasssss.jpeg" 
                    Titulo={"Camisa Vaquera"} 
                    descripcion={"Camisa vaquera resistente, ideal para un estilo casual y robusto."} 
                    Precio={"$45.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                     redirectTo="/ProductosMan"
                />
                <Card 
                    src="Camisas.jpeg" 
                    Titulo={"Camisa Estampada"} 
                    descripcion={"Camisa con estampados modernos, perfecta para un look único."} 
                    Precio={"$38.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                     redirectTo="/ProductosMan"
                />
                <Card 
                    src="Camisonnn.jpeg" 
                    Titulo={"Camisa de Mezclilla"} 
                    descripcion={"Camisa de mezclilla clásica, perfecta casual"} 
                    Precio={"$50.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                     redirectTo="/ProductosMan"
                />
                 <Card 
                    src="Camisonnnn.jpeg" 
                    Titulo={"Camisa Formal"} 
                    descripcion={"Camisa de vestir elegante, ideal para ocasiones profesionales."} 
                    Precio={"$40.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                     redirectTo="/ProductosMan"
                />
                 <Card 
                    src="Camisonnnnn.jpeg" 
                    Titulo={"Camisa Formal"} 
                    descripcion={"Camisa de vestir elegante, ideal para ocasiones formales."} 
                    Precio={"$40.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                     redirectTo="/ProductosMan"
                />
                 <Card 
                    src="Camisonnnnnn.jpeg" 
                    Titulo={"Camisa Formal"} 
                    descripcion={"Camisa de vestir elegante, ideal para ocasiones formales y profesionales."} 
                    Precio={"$40.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                     redirectTo="/ProductosMan"
                />
                <Card 
                    src="Camisoss.jpeg" 
                    Titulo={"Camisa Formal"} 
                    descripcion={"Camisa de vestir elegante"} 
                    Precio={"$40.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                     redirectTo="/ProductosMan"
                />
                <Card 
                    src="Camisos.jpeg" 
                    Titulo={"Camisa Formal"} 
                    descripcion={"Camisa de vestir elegante, ideal"} 
                    Precio={"$40.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                     redirectTo="/ProductosMan"
                />
            </div>
        </div>
    );
}

export default CatalogoCamisas;
