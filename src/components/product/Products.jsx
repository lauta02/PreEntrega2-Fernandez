import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const myProducts = query(collection(db, "products"));
    getDocs(myProducts)
      .then(resp => {
        const productsList = resp.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(productsList);
        setProducts(productsList);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Precio: ${product.price}</p>
          
        </div>
      ))}
    </div>
  );
};