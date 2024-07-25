import React from 'react';
import "../pages/RopaCasualMujer.css";
import Label from '../atoms/Label';
import Button from '../atoms/Button';
import { useNavigate } from 'react-router-dom';

function RopaCasualMujer() {
    const navigate1 = useNavigate();
    const EnterCarrito = () => {
        console.log("Añadir");
        navigate1("/CarritoCompras");
    };

    return (
        <>
            <div className="all-ropa">
                <div className="rigth-ropa">
                    <div className="talla">
                        <Label text="Talla"></Label>
                        <select className="input-field" defaultValue="xs">
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                        </select>
                    </div>
                    <div className="color">
                        <Label text="Color"></Label>
                        <select className="input-field" defaultValue="rojo">
                            <option value="rojo">Rojo</option>
                            <option value="azul">Azul</option>
                            <option value="verde">Verde</option>
                            <option value="negro">Negro</option>
                            <option value="blanco">Blanco</option>
                        </select>
                    </div>
                    <div className="btn-confirm">
                        <Button text="Añadir" onClick={EnterCarrito}></Button>
                    </div>
                </div>
                <div className="left-ropa">
                    <img src="/ropa.jpeg" id="ropaimg" alt="Ropa" />
                </div>
            </div>
        </>
    );
}

export default RopaCasualMujer;
