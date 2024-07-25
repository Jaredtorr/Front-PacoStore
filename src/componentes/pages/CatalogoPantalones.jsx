import React from 'react';
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import "../pages/CatalogoPantalones.css"
import Card from "../organismos/Card";

function CatalogoPantalones(){
    return (
        <div className="catalogo-container">
            <h2 className="catalogo-titulo">Catálogo de Pantalon</h2>
            <div className="button-container">
            <a href="/Home" className="btn-regresar">Inicio</a> {/* Enlace para regresar al inicio */}
            </div>
            <div className="Cards-ordenadas">
                <Card 
                    src="Pantalon.jpeg" 
                    Titulo={"Pantalon Formal"} 
                    descripcion={""} 
                    Precio={"$155.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Pantalononn.jpeg" 
                    Titulo={"Jeans Bootcut"} 
                    descripcion={"Pantalon Formal"} 
                    Precio={"$200.00"} 
                    text={"Comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Pantalonnn.jpeg" 
                    Titulo={"Jeans Acampanados"} 
                    descripcion={"Pantalon Formal"} 
                    Precio={"$225.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Pantalonnnn.jpeg" 
                    Titulo={"Pantalon"} 
                    descripcion={"Pantalon Formal"} 
                    Precio={"$335.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Pantalonnnnn.jpeg" 
                    Titulo={"Pantalón Palazzo con Pliegues"} 
                    descripcion={"Pantalon Cargo Profesionales"} 
                    Precio={"$365.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Pantalonnnnnn.jpeg" 
                    Titulo={"Jeans de Mezclilla Clara"} 
                    descripcion={"Pantalon Elegante"} 
                    Precio={"$320.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Pantalones.jpeg" 
                    Titulo={"Pantalón Vaquero Clásico"} 
                    descripcion={"Pantalones de mezclilla de corte clásico, perfectos para un look casual.a, perfecta casual"} 
                    Precio={"$155.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                 <Card 
                    src="Pantaloness.jpeg" 
                    Titulo={"Pantalón Cargo"} 
                    descripcion={"Pantalones cargo con múltiples bolsillos, perfectos para un look casual y funcional.tir elegante, ideal para ocasiones profesionales."} 
                    Precio={"$180.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                 <Card 
                    src="Pantalonesss.jpeg" 
                    Titulo={"Pantalón Deportivo"} 
                    descripcion={"Camisa Pantalones deportivos ligeros y cómodos, perfectos para el ejercicio y el ocio.de vestir elegante, ideal para ocasiones formales."} 
                    Precio={"$225.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                 <Card 
                    src="Pantalonessss.jpeg" 
                    Titulo={"Pantalón Formal"} 
                    descripcion={"Pantalones de vestir elegantes, perfectos para ocasiones formales y profesionales."}
                    Precio={"$355.00"}
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Pantalonesssss.jpeg" 
                    Titulo={"Pantalón Jogger"} 
                    descripcion={"Pantalones jogger cómodos y modernos, ideales para un look urbano y relajado."} 
                    Precio={"$255.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
                <Card 
                    src="Pantalonessssss.jpeg" 
                    Titulo={"Pantalon Formal"} 
                    descripcion={"Pantalones de vestir Elegantes"} 
                    Precio={"$234.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                />
            </div>
            
        </div>
    )
}

export default CatalogoPantalones;
