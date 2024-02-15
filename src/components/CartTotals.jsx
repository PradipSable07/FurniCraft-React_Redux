import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
	const { cartTotal, shipping, tax, orderTotal } = useSelector(
		(state) => state.cartState
	);
	return (
		<div className='card bg-base-200 rounded-sm'>
			<div className='card-body'>
				{/* Subtotal */}
				<p className='flex justify-between border-b text-sm border-base-100 pb-2'>
					<span>Subtotal: </span>
					<span className='font-medium'>{formatPrice(cartTotal)}</span>
				</p>
				{/* Shipping */}
				<p className='flex justify-between border-b text-sm border-base-100 pb-2'>
					<span>Shipping: </span>
					<span className='font-medium'>{formatPrice(shipping)}</span>
				</p>
				{/* tax */}
				<p className='flex justify-between border-b text-sm border-base-100 pb-2'>
					<span>Tax: </span>
					<span className='font-medium'>{formatPrice(tax)}</span>
				</p>
				{/* order Total */}
				<p className='flex justify-between  text-md  mt-2 '>
					<span>Order Total: </span>
					<span className='font-medium'>{formatPrice(orderTotal)}</span>
				</p>
			</div>
		</div>
	);
};
export default CartTotals;
