import { useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useEffect } from "react";
import Carousel from "./Carousel";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayProductos);
      }, 2000);
    });
    promesa.then((data) => {
      setItems(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Carousel/>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
