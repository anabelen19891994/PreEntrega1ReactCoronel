import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {

        const {cart, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

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
                            <h1>Checkout</h1>
                    </div>
                </div>
    
                    <div className="row">
                        <div className="col-md-6">
                        <form>
  <div className="mb-3">
    <label className="form-label">Nombre</label>
    <input type="text" className="form-control"/>
  </div>

  <div className="mb-3">
    <label className="form-label">Email</label>
    <input type="text" className="form-control"/>
  </div>

  <div className="mb-3">
    <label className="form-label">Teléfono</label>
    <input type="text" className="form-control"/>
  </div>
  
  <button type="button" className="btn btn-success">Generar orden</button>
</form>
                        </div>
                        <div className="col-md-6 text-center">
                        <table className="table">
                            <tbody>
                                
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td className="align-middle"><img src={product.image} alt={product.title} width={80} /></td>
                                        <td className="text-start align-middle">{product.title}</td>
                                        <td className="text-start align-middle">${product.price}</td>
                                        <td className="text-start align-middle">{product.quantity}</td>
                                        <td className="text-start align-middle">${product.quatity * product.price}</td>
                                    </tr>
                                    )}
                                    <tr>
                                        <td className="text-center align-middle" colSpan={4}>&nbsp;</td>
                                        <td className="text-start align-middle">${SumaTotalProductos()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    
    export default Checkout; 