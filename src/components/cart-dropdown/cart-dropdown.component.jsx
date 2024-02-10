import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropdown = ({display}) => {
    return(
        <div className='cart-dropdown-container' style={{display: `${display}`}}>
            <div className='cart-items'>
                <Button>GO TO CHECKOUT</Button>
            </div>
        </div>
    );
}

export default CartDropdown;