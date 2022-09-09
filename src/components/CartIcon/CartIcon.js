import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cartActions';
import {
	selectCartCount,
	selectIsCartOpen,
} from '../../store/cart/cartSelector';
import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIcon.styles';

const CartIcon = () => {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);
	return (
		<CartIconContainer onClick={() => dispatch(setIsCartOpen(!isCartOpen))}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
