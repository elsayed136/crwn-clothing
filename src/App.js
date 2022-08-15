import Directory from './components/Directory/Directory';

import hats from './images/hats.png';
import jackets from './images/jackets.png';
import mens from './images/men.png';
import sneakers from './images/sneakers.png';
import womens from './images/womens.png';

const App = () => {
	const categories = [
		{
			id: 1,
			title: 'hats',
			imageUrl: hats,
		},
		{
			id: 2,
			title: 'jackets',
			imageUrl: jackets,
		},
		{
			id: 3,
			title: 'sneakers',
			imageUrl: sneakers,
		},
		{
			id: 4,
			title: 'womens',
			imageUrl: womens,
		},
		{
			id: 5,
			title: 'mens',
			imageUrl: mens,
		},
	];
	return <Directory categories={categories} />;
};

export default App;
