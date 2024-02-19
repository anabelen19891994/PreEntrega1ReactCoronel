import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el carrito</div>
                        <Link to={"/"} className="btn btn-success my-5">Volver a la página principal</Link>

                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">Hay productos</div>
                    </div>
                </div>
            </div>
    )
}

export default Cart; 