import { BsMoonStarsFill, BsCart4 } from "react-icons/bs";
import { GiSun } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const Navbar = () => {
	const dispatch = useDispatch();

	const handleTheme = () => {
		dispatch(toggleTheme());
	};

	const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

	return (
		<nav className=' bg-base-200 '>
			<div className='navbar align-element'>
				<div className='navbar-start'>
					<NavLink
						to='/'
						className='btn btn-ghost hidden lg:flex text-3xl item-center '>
						FurniCraft
					</NavLink>

					<div className='dropdown lg:hidden'>
						<label tabIndex={0} className='btn btn-ghost btn-circle lg:hidden '>
							<FaBarsStaggered className='h-6 w-6' />
						</label>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 p-2 z-[1] shadow bg-base-100 rounded-box w-52'>
							<NavLinks />
						</ul>
					</div>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal  '>
						<NavLinks />
					</ul>
				</div>
				<div className='navbar-end'>
					{/* Theme setUp */}
					<label className='swap swap-rotate mr-4'>
						<input
							type='checkbox'
							name='theme'
							className=' theme-controller'
							onClick={handleTheme}
						/>
						<GiSun className='swap-off h-6 w-6' />
						<BsMoonStarsFill className='swap-on h-5 w-5' />
					</label>

					{/* CartBtn */}
					<NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
						<div className='indicator'>
							<BsCart4 className='h-6 w-6' />
							<span className='badge badge-sm  badge-accent indicator-item'>
								{numItemsInCart}
							</span>
						</div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
