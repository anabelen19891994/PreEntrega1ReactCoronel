import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <ItemListContainer titulo={"🚨 Atención 🚨"} mensaje={"❤️ Estamos actualizando el Sitio Web. Regresamos en unos minutos. ❤️"}/>
      <Cards />
      <Footer />
    </>
  );
};

export default App;
