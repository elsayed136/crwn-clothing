import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => {
	return (
		<div className='category-preview'>
			<h2>
				<span className='category-preview__title'>{title.toUpperCase()}</span>
			</h2>
			<div className='category-preview__preview'>
				{products
					.filter((_, index) => index < 4)
					.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
