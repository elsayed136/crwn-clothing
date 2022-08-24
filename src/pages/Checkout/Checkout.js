import { useContext } from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { CartContext } from '../../contexts/CartContext';
import './Checkout.scss';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);
	return (
		<div className='checkout'>
			<div className='checkout__header'>
				<div>
					<span>Product</span>
				</div>
				<div>
					<span>Description</span>
				</div>
				<div>
					<span>Quantity</span>
				</div>
				<div>
					<span>Price</span>
				</div>
				<div>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className='checkout__total'>TOTAL: ${cartTotal}</div>
		</div>
	);
};

export default Checkout;
