import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";


const Cart = (props) => {

    const CartCtx = useContext(cartContext);

    const totalAmount = CartCtx.totalAmount.toFixed(2);
    const hasItems = CartCtx.items.length > 0;

    
    const cartItem = (
        <ul className={classes["cart-item"]}>
           {CartCtx.items.map((items) => (
            <li>{items.name}</li>
           ))}
        </ul>
    );

    return (
        <Modal onClose={props.onCloseCart}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;