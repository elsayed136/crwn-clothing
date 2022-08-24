import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { UserContext } from './contexts/UserContext';
import Authentication from './pages/Authentication/Authentication';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

const App = () => {
	const { currentUser } = useContext(UserContext);
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route
					path='auth'
					element={
						currentUser ? <Navigate to='/' replace /> : <Authentication />
					}
				/>
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
