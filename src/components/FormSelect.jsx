const FormSelect = ({ name, defaultValue, label, list, size }) => {
	return (
		<div className='form-control'>
			<label htmlFor={name} className='label'>
				<span className='capitalize label-text'>{name}</span>
			</label>
			<select
				name={name}
				id={name}
				defaultValue={defaultValue}
				className={`select select-bordered ${size}`}>
				{list.map((item) => {
					return (
						<option key={item} value={item}>
							{item}
						</option>
					);
				})}
			</select>{" "}
		</div>
	);
};
export default FormSelect;
