import React from "react";
import { useRouteError, Link } from "react-router-dom";
import icon404 from "../assets/404not.svg";
import warning from "../assets/Warning.svg";

const Error = () => {
	const error = useRouteError();
	console.log(error);
	if (error.status === 404) {
		return (
			<main className=' min-h-screen grid place-items-center '>
				<div className='text-center'>
					<img src={icon404} alt='404 not found' className='mx-auto w-1/2' />

					<h5 className='text-2xl font-bold mt-10 tracking-tight sm:text-3xl '>
						{error.data}
					</h5>
					<Link className='btn btn-outline mt-7 ' to='/'>
						Home
					</Link>
				</div>
			</main>
		);
	}
	return (
		<main className=' min-h-screen grid place-items-center '>
			<div className='text-center'>
				<img src={warning} alt='404 not found' className='mx-auto w-1/2' />
				<h4 className='text-4xl font-bold text-center my-6'>
					Something went wrong
				</h4>
			</div>
		</main>
	);
};

export default Error;
