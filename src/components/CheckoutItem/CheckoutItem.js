import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);
	const clearItemHandler = () => clearItemFromCart(cartItem);

	return (
		<div className='checkout-item'>
			<div className='checkout-item__img'>
				<img src={imageUrl} alt={name} />
			</div>
			<span className='checkout-item__name'> {name} </span>
			<span className='checkout-item__quantity'>
				<div className='arrow' onClick={removeItemHandler}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={addItemHandler}>
					&#10095;
				</div>
			</span>
			<span className='checkout-item__price'> {price}</span>
			<div className='remove-button' onClick={clearItemHandler}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;