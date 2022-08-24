import React from 'react';
import './CartItem.scss';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className='cart-item'>
			<img className='cart-item__img' src={imageUrl} alt={`${name}`} />
			<div className='cart-item__item-details'>
				<span className='cart-item__name'>{name}</span>
				<span className='cart-item__price'>
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
