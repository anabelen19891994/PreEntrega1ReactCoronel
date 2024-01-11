import iconCart from "../assets/cart4.svg";

const CartWidget = () => {
  return (
    <button type="button" className="btn btn-success position-relative">
    <img src={iconCart} alt="carrito de compras" width={24} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
</button>
  )

}

export default CartWidget;
