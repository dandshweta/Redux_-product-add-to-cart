import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Products from "./features/Products/Products.jsx";
import Cart from "./features/Cart/Cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div>
      <div>
        <Products />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  </Provider>
);
