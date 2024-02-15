import React from "react";
import { formatPrice, generateAmountOptions } from "../utils";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/cartSlice";

const CartItem = ({ cartItem }) => {
	const dispatch = useDispatch();
	const { title, image, price, quantity, productColor, company, cartID } =
		cartItem;

	const removeItemFromTheCart = () => {
		dispatch(removeItem({ cartID }));
	};
	const handleQuantity = (e) => {
		dispatch(editItem({ cartID, quantity: parseInt(e.target.value) }));
	};
	return (
		<article
			key={cartID}
			className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'>
			{/* IMAGE */}
			<img
				src={image}
				alt={title}
				className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'
			/>
			{/* INFO */}
			<div className='sm:ml-16 sm:w-48'>
				{/* TITLE */}
				<h3 className='capitalize font-medium'>{title}</h3>
				{/* COMPANY */}
				<h4 className='mt-2 capitalize text-sm text-neutral-content'>
					{company}
				</h4>
				{/* COLOR */}
				<p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
					color :
					<span
						className='badge badge-sm'
						style={{ backgroundColor: productColor }}></span>
				</p>
			</div>
			<div className='sm:ml-12'>
				{/* quantity */}
				<div className='form-control max-w-xs'>
					<label htmlFor='quantity' className='label p-0'>
						<span className='label-text'>Quantity</span>
					</label>
					<select
						name='quantity'
						id='quantity'
						className='mt-2 select select-base select-bordered select-xs'
						value={quantity}
						onChange={handleQuantity}>
						{generateAmountOptions(quantity + 5)}
					</select>
				</div>
				{/* REMOVE */}
				<button
					className='mt-2 link link-primary link-hover text-sm'
					onClick={removeItemFromTheCart}>
					remove
				</button>
			</div>

			{/* PRICE */}
			<p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
		</article>
	);
};

export default CartItem;
