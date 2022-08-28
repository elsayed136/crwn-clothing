import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCard = () => addItemToCart(product);

	return (
		<div className='product-card'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='product-card__footer'>
				<span className='product-card__name'>{name}</span>
				<span className='product-card__price'>{price}</span>
			</div>
			<Button
				onClick={addProductToCard}
				buttonType={BUTTON_TYPE_CLASSES.inverted}
			>
				Add to card
			</Button>
		</div>
	);
};

export default ProductCard;
