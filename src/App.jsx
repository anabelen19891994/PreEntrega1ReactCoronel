import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Header />

    <ItemListContainer />
    <Routes>
      <Route path={"/"} element={<ItemListContainer />} />
      <Route path={"/category/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
    </Routes>
    <Cards />
    <Footer />
    </BrowserRouter>
    
  );
};

export default App;
