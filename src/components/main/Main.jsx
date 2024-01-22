import { useState } from 'react';
import Filters from '../filters/Filters';
import Games from '../games/Games';
import { StyledMain } from './styles';
import { PRODUCTS } from '../../constants/games';
import Cart from '../cart/Cart';

const Main = () => {
	const [filters, setFilters] = useState({
		PS5: false,
		PS4: false,
		PC: false,
		Xbox: false
	});

	const [cart, setCart] = useState([]);
	const filteredGames = filterByPlatform(PRODUCTS, filters);
	console.log(cart);

	return (
		<StyledMain>
			<Filters
				action={input => filteredGamesList(input, filters, setFilters)}
			/>
			<Games
				gamesList={filteredGames}
				action={game => addGameToCart(cart, setCart, game)}
			/>
			<Cart cart={cart} setCart={setCart} action={deleteGameCart} />
		</StyledMain>
	);
};

const filteredGamesList = (input, filters, setFilters) => {
	const { name, checked } = input;
	setFilters({ ...filters, [name]: checked });
};

const filterByPlatform = (games, filters) => {
	const filtersActive = Object.values(filters).some(value => value);
	if (!filtersActive) return games;
	const filteredGames = games.filter(game =>
		game.platforms.some(platform => filters[platform.name])
	);
	return filteredGames;
};

const addGameToCart = (cart, setCart, game) => {
	const findedGame = cart.find(gameCart => gameCart.id === game.id);
	if (!findedGame) {
		setCart([...cart, { ...game, amount: 1 }]);
		return;
	}
	const updatedGamesCart = cart.map(gameCart => {
		if (gameCart.id === game.id) {
			gameCart.amount++;
		}
		return gameCart;
	});

	setCart(updatedGamesCart);
};

const deleteGameCart = (cart, setCart, game) => {};

export default Main;
