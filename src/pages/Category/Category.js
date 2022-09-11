import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import Spinner from '../../components/Spinner/Spinner';
import {
	selectCategoriesMap,
	selectIsLoading,
} from '../../store/categories/categoriesSelector';
import { CategoryContainer, Title } from './Category.styles';

const Category = () => {
	const { category } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[category]);
	const isLoading = useSelector(selectIsLoading);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<Title>{category.toUpperCase()}</Title>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products &&
						products.map(product => {
							return <ProductCard key={product.id} product={product} />;
						})}
				</CategoryContainer>
			)}
		</Fragment>
	);
};

export default Category;
