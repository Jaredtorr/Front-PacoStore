import Label from "../atoms/Label";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import "../pages/ProductosMan.css";
import {useNavigate} from 'react-router-dom'

function ProductosMan(){
    const navigate = useNavigate();
    const EnterCarrito =() =>{
        navigate('/CarritoCompras');

    }
    return(
        <>
        <div className="all-man">
            <div className="rigth-man">
                <div className="tallaman">
                    <Label text="Talla" className="label-info"></Label>
                    <select className="input-form" defaultValue="xs">
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>
                <div className='colorman'>
                    <Label text="Color" className="label-info"></Label>
                    <select className="input-form" defaultValue="rojo">
                        <option value="rojo">Rojo</option>
                        <option value="azul">Azul</option>
                        <option value="verde">Verde</option>
                        <option value="negro">Negro</option>
                        <option value="blanco">Blanco</option>
                    </select>
                </div>
                <div className='btn-confirm'>
                    <Button text="Añadir" onClick={EnterCarrito} className="button-style"></Button>
                </div>
            </div>
            <div className="left-man">
                <img src="/Camisa.jpg" id='ropaimg'></img>
            </div>
        </div>
    </>
    

    )
}
export default ProductosMan;