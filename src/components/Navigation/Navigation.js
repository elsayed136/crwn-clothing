import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';
import CartDropdown from '../CartDropdown/CartDropdown';
import CartIcon from '../CartIcon/CartIcon';
import './Navigation.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div className='navigation__links'>
					<Link className='navigation__link' to='/shop'>
						SHOP
					</Link>

					{currentUser ? (
						<span className='navigation__link' onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className='navigation__link' to='/auth'>
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
