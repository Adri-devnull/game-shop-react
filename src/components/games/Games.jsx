import GameCard from '../gameCard/GameCard';
import { StyledGamesContainer } from './styles';

const Games = ({ gamesList, action }) => {
	return (
		<StyledGamesContainer>
			{gamesList.map(game => (
				<GameCard key={game.id} action={action} {...game} />
			))}
		</StyledGamesContainer>
	);
};

export default Games;
