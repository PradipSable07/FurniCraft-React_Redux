import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0,
};

const getCartFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
	name: "cart",
	initialState: getCartFromLocalStorage,
	reducers: {
		addItem: (state, action) => {
			const { product } = action.payload;

			const item = state.cartItems.find((i) => i.cartID === product.cartID);
			if (item) {
				item.quantity += product.quantity;
			} else {
				state.cartItems.push(product);
			}
			state.numItemsInCart += product.quantity;
			state.cartTotal += product.price * product.quantity;

			cartSlice.caseReducers.calculateTotals(state);
			toast.success("Item added to cart");
		},
		clearCart: (state) => {
			localStorage.setItem("cart", JSON.stringify(defaultState));

			return defaultState;
		},

		removeItem: (state, action) => {
			const { cartID } = action.payload;
			const product = state.cartItems.find((i) => i.cartID === cartID);
			state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

			state.numItemsInCart -= product.quantity;
			state.cartTotal -= product.price * product.quantity;

			cartSlice.caseReducers.calculateTotals(state);
			toast.error("Item Removed to cart");
		},
		editItem: (state, action) => {
			const { cartID, quantity } = action.payload;
			const item = state.cartItems.find((i) => i.cartID === cartID);
			state.numItemsInCart += quantity - item.quantity;
			state.cartTotal += item.price * (quantity - item.quantity);
			item.quantity = quantity;
			cartSlice.caseReducers.calculateTotals(state);
			toast.success("Item edited successfully!!!");
		},
		calculateTotals: (state) => {
			state.tax = 0.1 * state.cartTotal;
			state.orderTotal = state.cartTotal + state.shipping + state.tax;
			localStorage.setItem("cart", JSON.stringify(state));
		},
	},
});
export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
