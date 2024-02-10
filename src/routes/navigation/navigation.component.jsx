import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { display, setDisplay } = useContext(CartContext);

  const handleDropdown = () => {
    if(display === "none"){
      setDisplay("flex");
    } else {
      setDisplay("none");
    }
  }

  return(
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
              SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
              ) : (
              <Link className="nav-link" to="/auth">
                  SIGN IN
              </Link>
            )
          }
          <CartIcon handleDropdown={handleDropdown} />
        </div>
        <CartDropdown display={display} />
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;