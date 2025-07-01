import {useState} from "react";

import Header from "./components/layout/header.jsx";
import Meals from "./components/meals/meals.jsx";
import Cart from "./components/cart/Cart.jsx";
import CartProvider from "./store/provider.jsx";


function App() {
const [cartIsShown, setCartIsShown] = useState(false);

const showCartHandler = () => {
  setCartIsShown(true);
};

const hideCartHandler = () => {
  setCartIsShown(false);
};

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
