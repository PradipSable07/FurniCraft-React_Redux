import SectionTitle from "./sectionTitle";
import ProductsGrid from "./ProductsGrid";
import React from "react";
const FeaturedProducts = () => {
	return (
		<div className='pt-24'>
			<SectionTitle title='Featured Products' />
			<ProductsGrid />
		</div>
	);
};

export default FeaturedProducts;
