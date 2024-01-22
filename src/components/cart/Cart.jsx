import GameCart from '../gameCart/GameCart';
import { StyledCart } from './styles';

const Cart = ({ cart, action }) => {
	return (
		<StyledCart>
			<GameCart cart={cart} action={action} />
		</StyledCart>
	);
};

export default Cart;
