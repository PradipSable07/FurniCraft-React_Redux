import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
const singleQueryProduct = (id) => {
	return {
		queryKey: ["singleProduct", id],
		queryFn: () => {
			return customFetch(`/products/${id}`);
		},
	};
};

export const loader =
	(queryClient) =>
	async ({ params }) => {
		const response = await queryClient.ensureQueryData(
			singleQueryProduct(params.id)
		);
		return { product: response.data.data };
	};
const SingleProduct = () => {
	const { product } = useLoaderData();
	const { category, colors, company, description, image, price, title } =
		product.attributes;

	const rupeePrice = formatPrice(price);
	const [quantity, setQuantity] = useState(1);
	const [productColor, setProductColor] = useState(colors[0]);

	const handelQuantity = (e) => {
		setQuantity(parseInt(e.target.value));
	};
	const dispatch = useDispatch();
	const cartProduct = {
		cartID: product.id + productColor,
		productID: product.id,
		image,
		title,
		price,
		quantity,
		productColor,
		company,
	};

	const addToCart = () => {
		dispatch(addItem({ product: cartProduct }));
	};
	return (
		<section>
			{/* breadcrumbs */}
			<div className='breadcrumbs text-sm'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li>
				</ul>
			</div>
			{/* product  info*/}
			<div className='grid gap-y-8 lg:grid-cols-2 mt-6 place-items-center lg:gap-x-16'>
				<img
					src={image}
					alt={title}
					className='w-96 h-96 lg:w-full object-cover rounded-md'
				/>
				<div className='flex flex-col '>
					<h2 className='text-3xl font-bold capitalize '>
						{title}{" "}
						<span className=' text-base text-success-content'> {company}</span>
					</h2>
					<h4 className='text-lg text-content-secondary font-small mt-4'>
						{rupeePrice}
					</h4>
					<h4 className='text-md text-content-secondary font-medium mt-4'>
						Category : {category}
					</h4>
					<p className='mt-3 leading-7 text-content-secondary'>{description}</p>
					<div className='flex justify-between mt-4'>
						{/* colors */}
						<div className='flex items-center  gap-x-2 mt-4'>
							<h4 className='text-md tacking-wider font-medium capitalize'>
								colors :
							</h4>
							<div className='mt-2'>
								{colors.map((color) => {
									return (
										<button
											key={color}
											type='button'
											className={`badge h-4 w-12 rounded-full mr-1 ${
												color === productColor && "border-2 border-secondary"
											} `}
											style={{ backgroundColor: color }}
											onClick={() => {
												setProductColor(color);
												console.log(color);
											}}></button>
									);
								})}
							</div>
						</div>
						{/* quantity */}
						<div className='flex items-center gap-x-2 mt-4  w-full max-w-xs'>
							<label className='label input-group' htmlFor='quantity'>
								<h4 className='text-md tacking-wider font-medium  capitalize'>
									quantity :
								</h4>
							</label>
							<select
								className='select select-secondary select-bordered select-md'
								value={quantity}
								onChange={handelQuantity}
								id='quantity'>
								{generateAmountOptions(15)}
							</select>
						</div>
					</div>
					<div className='mt-10'>
						<button
							type='button'
							className='btn rounded-md hover:bg-base-200 hover:text-primary hover:rounded-full hover:border-0 hover:shadow-xl hover:scale-105 transition duration-500  btn-primary '
							onClick={addToCart}>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SingleProduct;
