import React, { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";

const ProductsContainer = () => {
	const { meta } = useLoaderData();
	const totalProducts = meta.pagination.total;
	const [layOut, setLayOut] = useState("grid");

	const setActiveLayout = (pattern) => {
		return `text-xl   btn btn-circle  btn-sm hover:scale-xl  hover:-rotate-[360deg] transition duration-300 hover:btn-outline ${
			pattern === layOut
				? "btn-primary text-primary-content"
				: "btn-natural text-based-content"
		} `;
	};

	return (
		<>
			<div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
				<h4 className='font-medium text-md'>
					{totalProducts} Product{totalProducts > 1 && "s"}
				</h4>

				<div className='flex gap-x-2'>
					<button
						className={setActiveLayout("grid")}
						onClick={() => {
							setLayOut("grid");
						}}
						type='button'>
						<BsGrid3X3GapFill />
					</button>
					<button
						className={setActiveLayout("row")}
						onClick={() => {
							setLayOut("row");
						}}
						type='button'>
						<FaBars />
					</button>
				</div>
			</div>
			<div>
				{totalProducts === 0 ? (
					<div className='text-2xl text-center'>
						Sorry, No Products Match Your Search
					</div>
				) : layOut === "grid" ? (
					<ProductsGrid />
				) : (
					<ProductsList />
				)}
			</div>
		</>
	);
};

export default ProductsContainer;
