import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {
	fetchCategoriesFailuer,
	fetchCategoriesSuccess,
} from './categoriesActions';
import { CATEGORIES_ACTION_TYPES } from './categoriesTypes';

export function* fetchCategoriesAsync() {
	try {
		const categories = yield call(getCategoriesAndDocuments);
		yield put(fetchCategoriesSuccess(categories));
	} catch (error) {
		yield put(fetchCategoriesFailuer(error));
	}
}

export function* onFetchCategories() {
	yield takeLatest(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REQUEST,
		fetchCategoriesAsync
	);
}

export function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
}
