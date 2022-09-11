import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './categoriesTypes';

export const fetchCategoriesRequest = () =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REQUEST);

export const fetchCategoriesSuccess = categories =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailuer = error =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
