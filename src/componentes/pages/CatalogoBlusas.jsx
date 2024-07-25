import Button from "../atoms/Button";
import Label from "../atoms/Label";
import "../pages/CatalogoBlusas.css"
import Card from "../organismos/Card";

const CatalogoBlusas=()=> {
    return( 
    <div className="catalogo-container">
        <h2 className="catalogo-titulo">Catálogo de Blusas</h2>
        <div className="Cards-ordenadas">
            <Card 
                src="Blusassss.jpeg" 
                Titulo={"Blusa Formal"} 
                descripcion={""} 
                Precio={"$100.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/RopaCasualMujer"
            />
            <Card 
                src="Blusasssss.jpeg" 
                Titulo={"Blusa Casual"} 
                descripcion={""} 
                Precio={"$150.00"} 
                text={"Comprar"} 
                className="card" 
                isNewArrival={true}
               redirectTo="/RopaCasualMujer"
            />
            <Card 
                src="Blusass.jpeg" 
                Titulo={"Blusa de Lino"} 
                descripcion={""} 
                Precio={"$200.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                 redirectTo="/RopaCasualMujer"
            />
            <Card 
                src="Blusasss.jpeg" 
                Titulo={"Blusa Lisa"} 
                descripcion={""} 
                Precio={"$90.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                 redirectTo="/RopaCasualMujer"
            />
            <Card 
                src="Blusassssss.jpeg" 
                Titulo={"Blusa Vaquera"} 
                descripcion={"Camisa vaquera resistente, ideal para un estilo casual y robusto."} 
                Precio={"$120.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                 redirectTo="/RopaCasualMujer"
            />
            <Card 
                src="Blusa.jpg" 
                Titulo={"Blusa Estampada"} 
                descripcion={""} 
                Precio={"$150.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                 redirectTo="/RopaCasualMujer"
            />
            <Card 
                src="Bluson.jpeg" 
                Titulo={"Blusa de Mezclilla"} 
                descripcion={""} 
                Precio={"100.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/RopaCasualMujer"
            />
             <Card 
                src="Blusonn.jpeg" 
                Titulo={"Blusa Formal"} 
                descripcion={""} 
                Precio={"$80.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/RopaCasualMujer"
            />
             <Card 
                src="Blusonnn.jpeg" 
                Titulo={"Blusa Formal"} 
                descripcion={""} 
                Precio={"$150.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                 redirectTo="/RopaCasualMujer"
            />
             <Card 
                src="Blusonnnn.jpeg" 
                Titulo={"Blusa Formal"} 
                descripcion={""} 
                Precio={"$175.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/RopaCasualMujer"
            />
            <Card 
                src="Blusonnnnn.jpeg" 
                Titulo={"Blusa Formal"} 
                descripcion={""} 
                Precio={"$90.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                 redirectTo="/RopaCasualMujer"
            />
            <Card 
                src="Blusonnnnnn.jpeg" 
                Titulo={"Blusa Formal"} 
                descripcion={""} 
                Precio={"$100.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/RopaCasualMujer"
            />
            
        </div>
    </div>

    );
}

export default CatalogoBlusas;