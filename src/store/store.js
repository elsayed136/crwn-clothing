import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
	process.env.NODE_ENV !== 'production' && logger,
	sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
	(process.env.NODE_ENV !== 'production' &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
