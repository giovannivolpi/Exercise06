import Header from "./components/layout/header.jsx";
import Meals from "./components/meals/meals.jsx";
import Cart from "./components/cart/Cart.jsx";


function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
