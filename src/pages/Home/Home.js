import Directory from '../../components/Directory/Directory';

import hats from '../../assets/hats.png';
import jackets from '../../assets/jackets.png';
import mens from '../../assets/men.png';
import sneakers from '../../assets/sneakers.png';
import womens from '../../assets/womens.png';

const Home = () => {
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

export default Home;
