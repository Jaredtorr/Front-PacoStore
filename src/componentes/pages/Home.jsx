import React from "react";
import { Helmet } from "react-helmet";
import "./index2.css";
import Card from "../organismos/Card";
function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>PCOStore</title>
            </Helmet>
            <div>
                <header>
                    <div className="top-bar">
                        <div className="logo">PCOStore</div>
                        <div className="search-bar">
                            <input type="text" placeholder="Buscar" />
                        </div>
                        <div className="user-options">
                            <button>Iniciar sesión</button>
                            <button className="cart-icon">🛒</button>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Todo</a></li>
                            <li><a href="#">Mujer</a></li>
                            <li><a href="#">Hombre</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="cards-container">
                    <Card 
                        src={"./Pantalonn.jpeg"} 
                        descripcion={"Esta bonita la pantalón, Jared Audiel"} 
                        Precio={"$200000000000"} 
                        text={"Comprar"} 
                        Titulo={"Pantalón bonito"} 
                        className={"card"} 
                        redirectTo="/CatalogoPantalones"
                    />
                    <Card 
                        src={"./Camisassss.jpeg"} 
                        descripcion={"Esta bonita la camisa, Jared Audiel"} 
                        Precio={"$150000000000"} 
                        text={"Comprar"} 
                        Titulo={"Camisa bonita"} 
                        className={"card"} 
                        redirectTo="/CatalogoCamisas"
                    />
                    <Card 
                        src={"./Blusassss.jpeg"} 
                        descripcion={"Esta bonita la blusa, Jared Audiel"} 
                        Precio={"$180000000000"} 
                        text={"Comprar"} 
                        Titulo={"Blusa bonita"} 
                        className={"card"} 
                        redirectTo="/CatalogoBlusas"
                    />
                    <Card 
                        src={"./Shortsss.jpeg"} 
                        descripcion={"Este bonito short"} 
                        Precio={"$220000000000"} 
                        text={"Comprar"} 
                        Titulo={"Short"} 
                        className={"card"} 
                        redirectTo="/CatalogoShorts"
                    />
                    <Card 
                        src={"./Camisonnn.jpeg"} 
                        descripcion={"Esta bonita la camisa, Jared Audiel"} 
                        Precio={"$150000000000"} 
                        text={"Comprar"} 
                        Titulo={"Camisa bonita"} 
                        className={"card"} 
                        redirectTo="/CatalogoCamisas"
                    />
                    <Card 
                        src={"./Playerass.jpg"} 
                        descripcion={"Esta bonita la playera, Jared Audiel"} 
                        Precio={"$200000000000"} 
                        text={"Comprar"} 
                        Titulo={"Playera bonita"} 
                        className={"card"} 
                        redirectTo="/CatalogoProductos"
                    />
                    <Card 
                        src={"./Playerass.jpg"} 
                        descripcion={"Esta bonita la playera, Jared Audiel"} 
                        Precio={"$200000000000"} 
                        text={"Comprar"} 
                        Titulo={"Playera bonita"} 
                        className={"card"} 
                        redirectTo="/CatalogoProductos"
                    />
                </div>
                <main>
                    <section className="categories">
                        {/* Aquí puedes añadir contenido adicional si es necesario */}
                    </section>
                </main>

                <footer>
                    {/* Aquí puedes añadir el contenido del pie de página */}
                </footer>
            </div>
        </>
    );
}

export default Home;
