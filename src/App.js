import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Authentication from './pages/Authentication/Authentication';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import { setCurrentUser } from './store/user/userActions';
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(user => {
			if (user) createUserDocumentFromAuth(user);
			dispatch(setCurrentUser(user));
		});

		return unsubscribe;
	}, []);
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
