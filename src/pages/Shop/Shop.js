import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setCategoriesMap } from '../../store/categories/categoryActions';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			dispatch(setCategoriesMap(categoryMap));
		};

		getCategoriesMap();
	}, [dispatch]);
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
