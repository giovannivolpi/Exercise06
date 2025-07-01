import Context from "./context.jsx";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const CartReducer = (state, action) => {
    return defaultCartState;
};


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(
        CartReducer,
        defaultCartState
    );
    
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: item});
    };

    const CartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return <Context.Provider value={CartContext}>{props.children}</Context.Provider>;
};

export default CartProvider;