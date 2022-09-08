import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './categoriesTypes';

export const setCategories = categories =>
	createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
