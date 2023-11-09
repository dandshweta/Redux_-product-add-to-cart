import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/CartSlice";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProductList(data));
  }, []);

  const onAddToCart = (product) => {
    console.log("Products cart:  ", product);
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div className="product-list">
        {productList.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img
                className="item-image"
                src={item.image}
                style={{ width: "100px", height: "100px" }}
              />
              <div>
                <p>{item.title}</p>
                <button onClick={() => onAddToCart(item)}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
