import Banner1 from "../assets/1-slide-1696526892927-2680576897-6e030a0f3deb414d676cc50d5b266e131696526961-1920-1920.webp";
import Banner2 from "../assets/1-slide-1696526892927-3604204794-5ee7cc22089dbc11eafca4e4b4fa9d0c1696526960-1920-1920.webp";
import Banner3 from "../assets/1-slide-1696526892927-6035337254-34d5b5d7239f234d9019b37b452a90ef1696526964-1920-1920.webp";
import Banner4 from "../assets/1-slide-1696526892927-6271888686-5c4b399911be96d0dead49e52b4899251696526966-1920-1920.webp";
import Banner5 from "../assets/1-slide-1696526892927-8337060692-eacdac2b76e2ef355bfc9e2aef53134f1696526963-1920-1920.webp";

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Banner1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Banner2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Banner3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Banner4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Banner5} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
