import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carousalImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
	return (
		<div className='grid lg:grid-cols-2 gap-24 items-center'>
			<div>
				<h1 className='text-4xl tracking-tight  font-bold max-w-2xl sm:text-6xl'>
					we are changing the way you shop
				</h1>
				<p className=' mt-3 max-w-xl text-lg leading-8'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
					laudantium quod perferendis nesciunt beatae molestiae alias vitae qui
					voluptatibus suscipit!
				</p>
				<div className='mt-10'>
					<Link
						to='/products'
						className='btn rounded-md hover:bg-base-200 hover:text-primary hover:rounded-full hover:border-0 hover:shadow-xl hover:scale-105 transition duration-500  btn-primary'>
						Shop Now
					</Link>
				</div>
			</div>
			<div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-natural rounded-box '>
				{carousalImages.map((img) => {
					return (
						<div key={img} className='carousel-item'>
							<img src={img} className='h-full w-80 object-cover' />
						</div>
					);
				})}
				<div className=' h-full'></div>
			</div>
		</div>
	);
};
export default Hero;
