import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
export const actions =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		try {
			const response = await customFetch.post("/auth/local", data);
			store.dispatch(loginUser(response.data));
			toast.success("Login Successfully 🧑🏻‍💻✌︎...");
			return redirect("/");
		} catch (error) {
			const errorMassage =
				error?.response?.data?.error?.message ||
				"Please Check your Credentials 📝";
			toast.error(errorMassage);
			return null;
		}
	};

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const loginAsGuestUser = async () => {
		try {
			const response = await customFetch.post("/auth/local", {
				identifier: "test@test.com",
				password: "secret",
			});
			dispatch(loginUser(response.data));
			toast.success("Welcome Guest User 🙏🧉");
			navigate("/");
		} catch (error) {
			console.log(error);
			toast.error("Guest User Login Error, Please Try Again !!!!");
		}
	};
	return (
		<section className='grid h-screen place-items-center'>
			<Form
				method='post'
				className='card w-96 p-8 shadow-xl flex flex-col gap-y-4'>
				<h4 className='text-3xl text-center font-bold'>Login</h4>
				<FormInput label={"Email"} name={"identifier"} type={"email"} />
				<FormInput label={"password"} name={"password"} type={"password"} />
				<div className='mt-4'>
					<SubmitBtn text={"Login"} />
				</div>
				<button
					type='button'
					className='btn btn-secondary btn-block'
					onClick={loginAsGuestUser}>
					Guest User
				</button>
				<p className='text-center  '>
					{" "}
					Don't have an account?{" "}
					<Link
						to='/register'
						className='link  link-hover ml-2 link-primary capitalize'>
						Register
					</Link>
				</p>
			</Form>
		</section>
	);
};

export default Login;
