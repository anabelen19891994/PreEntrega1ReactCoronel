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
      <ItemListContainer mensaje={"Error: No se puede cargar la página. Por favor, inténtalo de nuevo más tarde."}/>
      <Cards />
      <Footer />
    </>
  );
};

export default App;
