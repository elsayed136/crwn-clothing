import { createContext, useEffect, useReducer, useState } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
import { createAction } from '../utils/reducer/reducer.utils';

const CATEGORIES_ACTION_TYPES = {
	SET_CATEGORIES_MAP: 'SET_CATEGORIES_MAP',
};

const INITIAL_STATE = {
	categoriesMap: {},
};

const categoriesReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
			return { ...state, categoriesMap: payload };

		default:
			throw new Error(`Unhandled type ${type} in categoriesReducer`);
	}
};

const CategoriesContext = createContext({
	categoriesMap: {},
});

const CategoriesProvider = ({ children }) => {
	const [{ categoriesMap }, dispatch] = useReducer(
		categoriesReducer,
		INITIAL_STATE
	);
	const value = { categoriesMap };

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			dispatch(
				createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoryMap)
			);
		};

		getCategoriesMap();
	}, []);

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};

export { CategoriesContext, CategoriesProvider };
