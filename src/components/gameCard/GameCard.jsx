import { useState } from 'react';

const GameCard = ({ name, image, platforms, action }) => {
	const [activePlatform, setActivePlatform] = useState(0);
	const game = {
		id: platforms[activePlatform].id,
		image,
		price: platforms[activePlatform].price,
		platform: platforms[activePlatform].name
	};
	return (
		<div>
			<div>
				<img src={image} alt='' />
				<h1>{name}</h1>
				<button onClick={() => action(game)}>Add</button>
			</div>
			<div>
				{platforms.map((platform, index) => (
					<button
						key={platform.id}
						onClick={() => changeActivePlatform(setActivePlatform, index)}
					>
						{platform.name}
					</button>
				))}
				<span>{platforms[activePlatform].price}</span>
			</div>
		</div>
	);
};

const changeActivePlatform = (setActivePlatform, index) => {
	setActivePlatform(index);
};

export default GameCard;
