import { useState } from "react";
import ItemCount from "./ItemCount";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useEffect } from "react";
import ItemDetailContainer from "./ItemDetailContainer";

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
      <ItemList items={items} />
      <ItemCount stock={10} />
      <ItemDetailContainer/>
    </>
  );
};

export default ItemListContainer;
