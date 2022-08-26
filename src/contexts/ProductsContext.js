import { createContext, useEffect, useState } from 'react';
import SHOP_DATA from '../shop-data';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase';

const ProductsContext = createContext({
	products: [],
});

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const value = { products };

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			console.log(categoryMap);
		};

		getCategoriesMap();
	}, []);

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};

export { ProductsContext, ProductsProvider };
