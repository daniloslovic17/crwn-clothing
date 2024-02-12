import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

    const totalCartCount = cartItems.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0 )

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>
                {totalCartCount}
            </span>
        </div>
    );
}

export default CartIcon;