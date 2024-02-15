import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const OrderPaginationContainer = () => {
	const { meta } = useLoaderData();
	const { pageCount, page } = meta.pagination;

	const { search, pathname } = useLocation();
	const navigate = useNavigate();

	const handlePageChange = (pageNumber) => {
		const searchParams = new URLSearchParams(search);
		searchParams.set("page", pageNumber);
		navigate(`${pathname}?${searchParams.toString()}`);
	};
	const addPageButton = ({ pageNumber, activePage }) => {
		return (
			<button
				onClick={() => handlePageChange(pageNumber)}
				key={pageNumber}
				className={`btn btn-xs sm:btn-md border-none join-item ${
					activePage ? "bg-base-300 border-base-300" : ""
				}`}>
				{pageNumber}
			</button>
		);
	};
	const renderPageBtn = () => {
		const pageBtn = [];
		// first btn is always active
		pageBtn.push(addPageButton({ pageNumber: 1, activePage: page === 1 }));

		// this btn when page is greater than 2
		if (page > 2) {
			pageBtn.push(
				<button
					className='join-item btn btn-xs sm:btn-md border-none '
					key='dot-btn1'>
					...
				</button>
			);
		}
		// this btn when page is 2 and in the middle
		if (page !== 1 && page !== pageCount) {
			pageBtn.push(addPageButton({ pageNumber: page, activePage: true }));
		}
		// this btn when page is pageCount -1
		if (page < pageCount - 1) {
			pageBtn.push(
				<button
					className='join-item btn btn-xs sm:btn-md border-none '
					key='dot-btn2'>
					...
				</button>
			);
		}
		// last btn is always active
		pageBtn.push(
			addPageButton({ pageNumber: pageCount, activePage: page === pageCount })
		);
		return pageBtn;
	};
	if (pageCount < 2) return null;

	return (
		<div className='mt-16 flex justify-end'>
			<div className='join'>
				<button
					className='btn btn-xs sm:btn-md join-item'
					onClick={() => {
						let prevPage = page - 1;
						if (prevPage < 1) prevPage = pageCount;
						handlePageChange(prevPage);
					}}>
					Prev
				</button>
				{renderPageBtn()}
				<button
					className='btn btn-xs sm:btn-md join-item'
					onClick={() => {
						let nextPage = page + 1;
						if (nextPage > pageCount) nextPage = 1;
						handlePageChange(nextPage);
					}}>
					Next
				</button>
			</div>
		</div>
	);
};
export default OrderPaginationContainer;
