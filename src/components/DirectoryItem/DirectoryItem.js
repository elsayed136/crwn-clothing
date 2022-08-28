import React from 'react';
import './DirectoryItem.scss';

const DirectoryItem = ({ category }) => {
	const { title, imageUrl } = category;
	return (
		<div className='directory-item'>
			<div
				className='directory-item__image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className='directory-item__body'>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
