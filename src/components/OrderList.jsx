import { useLoaderData } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const OrderList = () => {
	const { orders, meta } = useLoaderData();

	// console.log(orders, meta);
	return (
		<div className='mt-8'>
			<h4 className='mb-4 capitalize'>Total Orders: {meta.pagination.total}</h4>
			<div className='overflow-x-auto'>
				<table className='table table-zebra'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Address</th>
							<th>Products</th>
							<th>Cost</th>
							<th className='hidden sm:block'>Date</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => {
							const id = order;
							const { name, address, numItemsInCart, orderTotal, createdAt } =
								order.attributes;
							// console.log(typeof orderTotal);

							const date = day(createdAt).format("hh:mm a - MMM Do, YYYY ");
							return (
								<tr key={id}>
									<th>{name}</th>
									<th>{address}</th>
									<th>{numItemsInCart}</th>
									<th>{orderTotal}</th>
									<th className='hidden sm:block'>{date}</th>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default OrderList;
