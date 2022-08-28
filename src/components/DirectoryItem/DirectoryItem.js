import React from 'react';
import { Body, DirectoryItemContainer, Image } from './DirectoryItem.styles';

const DirectoryItem = ({ category }) => {
	const { title, imageUrl } = category;
	return (
		<DirectoryItemContainer>
			<Image imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
