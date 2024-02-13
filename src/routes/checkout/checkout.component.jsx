import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
    return(
        <div className="checkout-container">
            {cartItems.map(item => 
                <div>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <button onClick={() => addItemToCart(item)}>Increase</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => removeItemFromCart(item)}>Decrease</button>
                    <img src={item.imageUrl} alt={item.name} />
                    <span>{item.quantity*item.price}</span>
                </div>
            )}
        </div>
    );

}

export default Checkout;