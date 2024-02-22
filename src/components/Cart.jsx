import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash.svg";

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
                        <h1>Productos seleccionados</h1>
                </div>
            </div>

                <div className="row">
                    <div className="col text-center">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-end align-middle" colSpan={6}><a href="#" onClick={clear} className="btn btn-success">Vaciar carrito <img src={trash} alt="Eliminar producto" title="Eliminar producto"/></a></td>

                            </tr>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="align-middle"><img src={product.image} alt={product.title} width={80} /></td>
                                    <td className="text-start align-middle">{product.title}</td>
                                    <td className="text-start align-middle">${product.price}</td>
                                    <td className="text-start align-middle">{product.quantity}</td>
                                    <td className="text-start align-middle">${product.quatity * product.price}</td>
                                    <td className="text-end align-middle"><a href="#" onClick={() => {removeItem(product.id)}}>
                                        <img src={trash} alt="Eliminar producto" title="Eliminar producto" /></a></td>
                                </tr>
                                )}
                                <tr>
                                    <td className="text-center align-middle" colSpan={4}>&nbsp;</td>
                                    <td className="text-start align-middle">${SumaTotalProductos()}</td>
                                    <td className="text-end align-middle"><Link to={"/checkout"} className="btn btn-success">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart; 