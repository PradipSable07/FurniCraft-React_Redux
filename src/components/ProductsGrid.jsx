import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
	const { products } = useLoaderData();

	return (
		<div className='grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3 '>
			{products.map((product) => {
				const { image, title, price } = product.attributes;
				const rupeeAmount = formatPrice(price);
				return (
					<Link
						key={product.id}
						to={`/products/${product.id}`}
						className='card bg-base-100 rounded-sm hover:scale-105 shadow-lg hover:shadow-3xl transition duration-500'>
						<figure>
							<img src={image} className='h-64 md:h-48 w-full object-cover' />
						</figure>
						<div className='card-body items-center text-center'>
							<h2 className='card-title capitalize tracking-wider'>{title}</h2>
							<span className='text-secondary'>{rupeeAmount}</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default ProductsGrid;
