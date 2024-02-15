import React from "react";

const SectionTitle = ({ title }) => {
	return (
		<div className='border-b border-base-300 pb-5'>
			<h2 className='text-3xl font-bold tracking-wider capitalize'>{title}</h2>
		</div>
	);
};

export default SectionTitle;
