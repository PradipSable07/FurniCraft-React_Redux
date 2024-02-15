import { useState } from "react";
import { formatPrice } from "../utils";

const FormRange = ({ label, name, size, price }) => {
	const step = 1000;
	const maxPrice = 100000;
	const [selectPrice, setSelectPrice] = useState(price || maxPrice);
	return (
		<div className='form-control '>
			<label htmlFor={name} className='label cursor-pointer'>
				<span className='label-text capitalize'>{label}</span>
				<span>{formatPrice(selectPrice)}</span>
			</label>
			<input
				type='range'
				name={name}
				min={0}
				max={maxPrice}
				step={step}
				value={selectPrice}
				onChange={(e) => {
					setSelectPrice(e.target.value);
				}}
				className={`range range-primary cursor-col-resize ${size} `}
			/>
			<div className='w-full flex justify-between text-xs px-2 mt-2'>
				<span className='text-md font-light  '>0</span>
				<span className='text-md font-light  '>
					Max: {formatPrice(maxPrice)}
				</span>
			</div>
		</div>
	);
};
export default FormRange;
