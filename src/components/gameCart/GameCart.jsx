const GameCart = ({ cart, action }) => {
	return (
		<div>
			{cart.map(game => (
				<div key={game.id}>
					<span>{game.amount}</span>
					<img src={game.image} alt='' />
					<div>
						<span>{game.platform}</span>
						<button onClick={action}>X</button>
					</div>
					<span>Price: {game.price}</span>
				</div>
			))}
		</div>
	);
};

export default GameCart;
