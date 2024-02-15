import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const queryClient = useQueryClient();
	const user = useSelector((state) => state.userState.user);
	// const username = user.username;
	const handleLogout = () => {
		navigate("/");
		dispatch(clearCart({}));
		dispatch(logoutUser({}));
		queryClient.removeQueries();
	};

	return (
		<header className=' bg-secondary-content py-2 '>
			<div className='align-element flex justify-center sm:justify-end'>
				{user ? (
					<div className='flex gap-x-2 sm:gap-x-8 items-center'>
						<p className='text-xs sm:text-sm'>Namaste, {user.username}</p>
						<button
							className='btn btn-xs   btn-secondary '
							onClick={handleLogout}>
							Logout
						</button>
					</div>
				) : (
					<div className='flex gap-x-6 justify-center items-center'>
						<Link to='/login' className='link link-hover text-xs sm:text-sm'>
							Sign In / Guest
						</Link>
						<Link to='/register' className='link link-hover text-xs sm:text-sm'>
							Create Account
						</Link>
					</div>
				)}
			</div>
		</header>
	);
};
export default Header;
