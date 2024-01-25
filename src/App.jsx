import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <ItemListContainer />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
