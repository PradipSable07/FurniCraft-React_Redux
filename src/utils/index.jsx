import axios from "axios";

const MAIN_URL = "https://strapi-store-server.onrender.com/api";
export const customFetch = axios.create({
	baseURL: MAIN_URL,
});

export const formatPrice = (price) => {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
	}).format(price / 10);
};
export const generateAmountOptions = (number) => {
	return Array.from({ length: number }, (_, index) => {
		const quantity = index + 1;

		return (
			<option key={quantity} value={quantity}>
				{quantity}
			</option>
		);
	});
};
