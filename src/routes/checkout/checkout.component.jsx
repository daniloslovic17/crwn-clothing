import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, addItemToCart } = useContext(CartContext);
    return(
        <div className="checkout-container">
            {cartItems.map((item) => {
                const {id, name, price, quantity, imageUrl} = item;
                return <div key={id}>
                    <h2>{name}</h2>
                    <span>{quantity}</span>
                    <span>decrement</span>
                    <span onClick={() => addItemToCart(item)}>increment</span>
                </div> 
            })}
        </div>
    );

}

export default Checkout;