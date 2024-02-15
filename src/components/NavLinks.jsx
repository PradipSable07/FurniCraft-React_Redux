import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const links = [
	{ id: 1, text: "Home", url: "/" },
	{ id: 2, text: "about", url: "about" },
	{ id: 3, text: "products", url: "products" },
	{ id: 4, text: "cart", url: "cart" },
	{ id: 5, text: "checkout", url: "checkout" },
	{ id: 6, text: "orders", url: "orders" },
];
const NavLinks = () => {
	const user = useSelector((state) => state.userState.user);

	return (
		<>
			{links.map((link) => {
				const { id, text, url } = link;
				if ((url === "checkout" || url === "orders") && !user) return null;
				return (
					<li
						key={id}
						className='capitalize hover:border active:border-primary hover:rounded-md'>
						<Link to={url}>{text}</Link>
					</li>
				);
			})}
		</>
	);
};
export default NavLinks;
