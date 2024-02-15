import React from "react";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = (store) => () => {
	const user = store.getState().userState.user;

	if (!user) {
		toast.warning("Please Login To Checkout");
		return redirect("/login");
	}
	return null;
};

const Checkout = () => {
	const cartTotal = useSelector((state) => state.cartState.cartTotal);
	if (cartTotal === 0) {
		return <SectionTitle title='Your Cart Is Empty' />;
	}
	return (
		<>
			<SectionTitle title={"Place Your Order"} />
			<div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
				<CheckoutForm />
				<CartTotals />
			</div>
		</>
	);
};

export default Checkout;
