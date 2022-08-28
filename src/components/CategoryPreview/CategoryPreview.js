import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => {
	return (
		<div className='category-preview'>
			<h2>
				<Link to={title} className='category-preview__title'>
					{title.toUpperCase()}
				</Link>
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
