import { Fragment, useContext } from 'react';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import './Shop.scss';

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<Fragment>
			{Object.keys(categoriesMap).map(title => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</Fragment>
	);
};

export default Shop;
