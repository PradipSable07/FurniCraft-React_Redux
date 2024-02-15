import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	HomeLayout,
	Cart,
	About,
	Checkout,
	Error,
	Landing,
	Login,
	Orders,
	Products,
	Register,
	SingleProduct,
} from "./pages";
import { ErrorElement } from "./components";
// loader;
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";
// actions
import { actions as registerUserAction } from "./pages/Register";
import { actions as loginUserAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";
// store
import { store } from "./store";
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 6,
		},
	},
});
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <ErrorElement />,
				loader: landingLoader(queryClient),
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "orders",
				element: <Orders />,
				loader: ordersLoader(store, queryClient),
			},
			{
				path: "checkout",
				element: <Checkout />,
				loader: checkoutLoader(store),
				action: checkoutAction(store, queryClient),
			},
			{
				path: "products",
				element: <Products />,
				loader: productLoader(queryClient),
			},
			{
				path: "products/:id",
				element: <SingleProduct />,
				loader: singleProductLoader(queryClient),
			},
		],
	},
	//Login
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />,
		action: loginUserAction(store),
	},
	//Register
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />,
		action: registerUserAction,
	},
]);
const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
export default App;
