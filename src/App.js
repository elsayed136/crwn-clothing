import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';

const Shop = () => {
	return <div>I am the shop page</div>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;
