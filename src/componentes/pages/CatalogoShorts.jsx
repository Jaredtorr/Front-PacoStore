import Button from "../atoms/Button";
import Label from "../atoms/Label";
import "../pages/CatalogoShorts.css";
import Card from "../organismos/Card";

const CatalogoShorts=()=>{
    return( <div className="catalogo-container">
        <h2 className="catalogo-titulo">Catálogo de Shorts</h2>
        <div className="Cards-ordenadas">
            <Card 
                src="Shortsss.jpeg" 
                Titulo={"Short Formal"} 
                descripcion={""} 
                Precio={"$125.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                 redirectTo="/ProductosMan"
            />
            <Card 
                src="Shortss.jpeg" 
                Titulo={"Short Formal"} 
                descripcion={""} 
                Precio={"$100.00"} 
                text={"Comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/ProductosMan"
            />
            <Card 
                src="Shortssss.jpeg" 
                Titulo={"Short Formal"} 
                descripcion={"135"} 
                Precio={"$50.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/ProductosMan"
            />
            <Card 
                src="Shortsssss.jpeg" 
                Titulo={"Short Liso"} 
                descripcion={""} 
                Precio={"$95.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/ProductosMan"
            />
            <Card 
                src="Shortssssss.jpeg" 
                Titulo={"Short Formal"} 
                descripcion={""} 
                Precio={"$165.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/ProductosMan"
            />
            <Card 
                src="Shorts.jpeg" 
                Titulo={"Short Formal"} 
                descripcion={""} 
                Precio={"$145.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/ProductosMan"
            />
            <Card 
                src="Shortson.jpeg" 
                Titulo={"Short Casual"} 
                descripcion={""} 
                Precio={"$100.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/ProductosMan"
            />
             <Card 
                src="Shortsonn.jpeg" 
                Titulo={"Short Formal"} 
                descripcion={""} 
                Precio={"$95.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/ProductosMan"
            />
             <Card 
                src="Shortsonnn.jpeg" 
                Titulo={"Short Formal"} 
                descripcion={""} 
                Precio={"$135.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/ProductosMan"
            />
             <Card 
                src="Shortsonnnn.jpeg" 
                Titulo={"Short Formal"} 
                descripcion={""} 
                Precio={"$155.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/ProductosMan"
            />
            <Card 
                src="Shortsonnnnn.jpeg" 
                Titulo={"Short Formal"} 
                descripcion={""} 
                Precio={"$100.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/ProductosMan"
            />
            <Card 
                src="Shortsonnnnnn.jpeg" 
                Titulo={"Short Formal"} 
                descripcion={""} 
                Precio={"$125.00"} 
                text={"comprar"} 
                className="card" 
                isNewArrival={true}
                redirectTo="/ProductosMan"
            />
        </div>
    </div>

    );
}

export default CatalogoShorts;