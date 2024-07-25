import Button from "../atoms/Button";
import "../pages/CatalogoProductos.css";
import {useNavigate} from 'react-router-dom';
import Card from "../organismos/Card";

function CatalogoProductos(){

    const navigate6 = useNavigate();
    const enterProduc =() =>{
        navigate6('/CatalogoPantalones');
    }

    return(
        <div className="catalogo-container">
            <h2 className="catalogo-titulo">Catálogo de Playeras</h2>
            <div className="Cards-ordenadas">
                <Card 
                    src="Playeronnnn.jpeg" 
                    Titulo={"Playera Formal"} 
                    descripcion={"."} 
                    Precio={"$135.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                    onClick={enterProduc}
                        redirectTo="/ProductosMan"
                />
                <Card 
                    src="Playerass.jpg" 
                    Titulo={"Playera Casual"} 
                    descripcion={""} 
                    Precio={"$175.00"} 
                    text={"Comprar"} 
                    className="card" 
                    isNewArrival={true}
                        redirectTo="/ProductosMan"
                />
                <Card 
                    src="Playerasss.jpeg" 
                    Titulo={"Playera"} 
                    descripcion={""} 
                    Precio={"$190.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                        redirectTo="/ProductosMan"
                />
                <Card 
                    src="Playerassss.jpeg" 
                    Titulo={"Playeras Casual"} 
                    descripcion={""} 
                    Precio={"$155.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                        redirectTo="/ProductosMan"
                />
                <Card 
                    src="Playerasssss.jpeg" 
                    Titulo={"Playera casual"} 
                    descripcion={"."} 
                    Precio={"$95.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                        redirectTo="/ProductosMan"
                />
                <Card 
                    src="Playerassssss.jpeg" 
                    Titulo={"Playera Formal"} 
                    descripcion={""} 
                    Precio={"$200.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                        redirectTo="/ProductosMan"
                />
                <Card 
                    src="Playeron.jpeg" 
                    Titulo={"Playera Formal"} 
                    descripcion={""} 
                    Precio={"$155.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                        redirectTo="/ProductosMan"
                />
                 <Card 
                    src="Playeronnnnnn.jpeg" 
                    Titulo={"Playera Formal"} 
                    descripcion={""} 
                    Precio={"$188.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                        redirectTo="/ProductosMan"
                />
                 <Card 
                    src="Playeronn.jpeg" 
                    Titulo={"Playera Formal"} 
                    descripcion={""} 
                    Precio={"$125.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                        redirectTo="/ProductosMan"
                />
                 <Card 
                    src="Playeronnn.jpeg" 
                    Titulo={"Playera"} 
                    descripcion={""} 
                    Precio={"$100.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                        redirectTo="/ProductosMan"
                />
                <Card 
                    src="Playeronnnn.jpeg" 
                    Titulo={"Formal"} 
                    descripcion={""} 
                    Precio={"$100.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                        redirectTo="/ProductosMan"
                />
                <Card 
                    src="Playeronnnnn.jpeg" 
                    Titulo={"Playera Formal"} 
                    descripcion={""} 
                    Precio={"$155.00"} 
                    text={"comprar"} 
                    className="card" 
                    isNewArrival={true}
                        redirectTo="/ProductosMan"
                />
            </div>
        </div>
    )
}

export default CatalogoProductos;
