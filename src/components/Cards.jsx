import Card1 from "../assets/camas-8iZnbf1cT-transformed.png";
import Card2 from "../assets/zyro-image.png";

const Cards = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col">
          <div className="card">
            <img src={Card1} className="img-fluid" alt="..." />
            <div className="card-body text-center">
              <h4>Camas</h4>
              <p>
                Descubre comodidad y estilo para tu mascota con nuestras
                camitas. Variedad de tamaños y estilos para garantizar el
                descanso perfecto.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={Card2} className="img-fluid" alt="..." />
            <div className="card-body text-center">
              <h4>Platos</h4>
              <p>
                Optimiza las comidas de tu mascota con nuestros platos
                funcionales y elegantes. Diseños duraderos que combinan estilo y
                utilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
