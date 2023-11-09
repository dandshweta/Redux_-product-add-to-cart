// Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} from "./cartSlice";

const Cart = () => {
  const cartList = useSelector((state) => state.myCart.data);
  const dispatch = useDispatch();

  const onRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <h2>Cart products</h2>
      {cartList.length > 0 ? (
        cartList.map((item) => (
          <div key={item.id}>
            <img src={item.image} width={40} alt={item.title} />
            <span style={{ fontSize: "16px" }}>
              {item.title} : {item.price}$
            </span>
            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
            <div>
              <button onClick={() => dispatch(decrementQuantity(item))}>
                -
              </button>
              <p>{item.quantity}</p>
              <button onClick={() => dispatch(incrementQuantity(item))}>
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No Products in the cart</p>
      )}
    </div>
  );
};

export default Cart;
