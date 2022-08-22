import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './Navigation.scss';

const Navigation = () => {
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

					<Link className='navigation__link' to='/auth'>
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
